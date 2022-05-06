<template>
  <v-card
    outlined
    elevation="0"
    class="mt-2">
    <v-card-title>{{ this.descriptionsProduct }}</v-card-title>
    <v-card-subtitle>{{ this.formatAmaount }}</v-card-subtitle>
  </v-card>
</template>
<script>
export default {
  props: {
    productsPayment: {
      type: Object,
      required: true
    }
  },
  computed: {
    formatAmaount() {
      const formatNumber = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(this.productsPayment.items[0].amount || '0');
      return formatNumber;
    },
    descriptionsProduct() {
      const description = this.productsPayment.items[0].name || '';
      return description;
    }
  }
}
</script>