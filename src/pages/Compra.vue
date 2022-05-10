<template>
  <v-dialog
    :value="isView"
    max-width="500"
    persistent>
    <v-card>
      <v-card-title>
        Estado Del Pago
      </v-card-title>
      <v-card-text>
        <v-alert
          :type="typeAlert">
          {{ this.messageAlert }}
        </v-alert>
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="green darken-1"
          dark
          @click="redirectHomePage">
          Volver al Inicio
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: 'CompraPage',
  data() {
    return {
      isView: true,
      typeAlert: '',
      messageAlert: 'Compra realizada correctamente'
    }
  },
  props: {
    status: {
      type: String,
      default: '0'
    }
  },
  created() {
    if (this.status === '0') {
      this.setStateCompra('error', 'Error al realizar la compra', 'Error');
    } else {
      this.setStateCompra('success', 'Compra realizada correctamente', 'Pagado');
    }
  },
  methods: {
    redirectHomePage() {
      const idPago = localStorage.getItem('idTrans');
      this.$router.push(`/paquetes/${idPago}`);
    },
    setStateCompra(statusAlert, message, statusCompra) {
      this.typeAlert = statusAlert;
      this.messageAlert = message;
      const idCompra = localStorage.getItem('idCompra');
      const listadoCompra = JSON.parse(localStorage.getItem('products'));
      const indexListado = listadoCompra.findIndex(item => item.id === idCompra);
      const compra = {
        ...listadoCompra[indexListado],
        estado: statusCompra,
      };
      listadoCompra[indexListado] = compra;
      localStorage.setItem('products', JSON.stringify(listadoCompra));
    }
  }
}
</script>