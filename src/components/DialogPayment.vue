<template>
  <v-dialog
    :value="showDialog"
    persistent
    max-width="500">
    <v-card>
      <v-card-title>
        Ejecución Del Pago
      </v-card-title>
      <v-card-text>
        {{ this.createMessage }}
        <CardProductPayment
          v-if="productsPayment !== null" 
          :productsPayment="productsPayment" />
        <v-alert
          v-if="showAlert"
          :type="typeAlert"
          class="mt-1">
          {{ textAlert }}
        </v-alert>
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="green darken-1"
          :loading="isLoading"
          @click="efectuarPago"
          dark>
          Efectuar Pago
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>

import CardProductPayment from '@/components/CardProductPayment';
import axios from '@/api/axios';

export default {
  data() {
    return {
      isLoading: false,
      textAlert: '',
      typeAlert: '',
      showAlert: false
    }
  },
  props: {
    showDialog: {
      type: Boolean,
      required: true
    },
    productsPayment: {
      type: Object,
      required: true
    },
  },
  components: {
    CardProductPayment
  },
  methods: {
    efectuarPago() {
      localStorage.setItem('idCompra', this.productsPayment.items[0].id);
      this.isLoading = true;
      axios({
        method: 'POST',
        url: 'create-checkout-session.php',
        data: JSON.stringify(this.productsPayment)
      }).then(res => {
        this.showAlert = true;
        this.typeAlert = 'success';
        this.textAlert = 'Un momento por favor...';
        localStorage.setItem('idTrans', res.data.id_pago);
        setTimeout(() => {
          location.href = res.data.url;
        }, 2000);
      // eslint-disable-next-line
      }).catch(error => {
        this.isLoading = false;
        this.showAlert = true;
        this.typeAlert = 'error';
        this.textAlert = 'Error en el servidor';
      });
    }
  },
  computed: {
    createMessage() {
      const message = `Enhorabuena!!! el freelacer ${this.productsPayment.items[0].cliente}
                       ha aceptado el trabajo. Por favor realizar el pago en la siguiente plataforma.`;
      return message;
    }
  }
}
</script>