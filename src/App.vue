<template>
  <v-app>
    <DialogPayment 
      :showDialog="dialogPayment" 
      :productsPayment="productsPayment"
      :informationClie="informationCli" />
  </v-app>
</template>

<script>

import DialogPayment from '@/components/DialogPayment.vue';

export default {
  name: 'App',
  components: {
    DialogPayment
  },
  data() {
    return {
      dialogPayment: true,
      productsPayment: {},
      informationCli: {} 
    }
  },
  created() {
    this.productsPayment = {
      items: [
        { id: 1, name: 'Grabacion Full HD 4k', quantity: 1, amount: 250 },
      ]
    };
    this.informationCli = { id: 1, name: 'Fabian', lastName: 'Duran' };
  }
};
</script>
