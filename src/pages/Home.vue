<template>
  <DialogPayment 
    :showDialog="dialogPayment" 
    :productsPayment="productsPayment"
    :informationClie="informationCli" />
</template>
<script>

import DialogPayment from '@/components/DialogPayment.vue';

export default {
  name: 'HomePage',
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
