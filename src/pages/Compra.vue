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
      typeAlert: 'success',
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
      this.typeAlert = 'error';
      this.messageAlert = 'Error al realizar la compra';
    }
  },
  methods: {
    redirectHomePage() {
      this.$router.push('/');
    }
  }
}
</script>