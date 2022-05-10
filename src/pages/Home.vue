<template>
  <div>
    <DialogPayment
      v-if="dialogPayment"
      :showDialog="dialogPayment" 
      :productsPayment="productsPayment" />
    <TableProducts 
      :products="products"
      @cambioEstado="ejecutarPago" />
    <v-snackbar
      v-model="alertView"
      elevation="24"
      color="success"
      top>
      {{ alertText }}
    </v-snackbar>
  </div>
</template>
<script>

import TableProducts from '@/components/TableProducts.vue';
import DialogPayment from '@/components/DialogPayment.vue';
import { generateProducts } from '@/data/products';
import axios from '@/api/axios';

export default {
  name: 'HomePage',
  components: {
    DialogPayment,
    TableProducts,
  },
  data() {
    return {
      dialogPayment: false,
      products: [],
      productsPayment: {
        items: []
      },
      alertView: false,
      alertText: ''
    }
  },
  props: {
    pago: {
      type: String,
      default: ''
    }
  },
  created() {
    if (this.pago !== '') {
      console.log('Se realiza peticion HTTP', this.pago);
      const idPago = this.pago;
      this.actualizacionDatosPago(idPago);
    }
    if (!localStorage.getItem('products')) localStorage.setItem('products', JSON.stringify(generateProducts(10)));
    this.products = JSON.parse(localStorage.getItem('products'));
  },
  methods: {
    ejecutarPago(productSelect) {
      console.log('Producto seleccionado', productSelect);
      this.productsPayment.items[0] = productSelect;
      this.dialogPayment = true;
    },
    actualizacionDatosPago(idPago) {
      axios({
        method: 'GET',
        url: `list-payments.php?pago=${idPago}`,
      }).then(res => {
        this.alertView = true;
        this.alertText = res.data.message;
      })
    }
  }
};
</script>
