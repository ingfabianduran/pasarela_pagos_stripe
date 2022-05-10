<template>
  <v-card>
    <v-card-title>Listado de Paquetes</v-card-title>
    <v-card-text>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th
                v-for="item in headTable"
                :key="item"
                class="text-left">
                {{ item }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in products"
              :key="item.id">
              <td>{{ item.cliente }}</td>
              <td>{{ item.paquete }}</td>
              <td>{{ formatAmaount(item.costo) }}</td>
              <td>
                <v-btn
                  color="primary"
                  :disabled="item.estado === 'Pagado'"
                  @click="aprobarPaquete(item)">
                  Aprobar
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>
<script>

export default {
  data() {
    return {
      headTable: ['Cliente', 'Paquete', 'Costo', 'Estado'],
      selectValues: [
        { text: 'Pendiente', value: 'Pendiente' },
        { text: 'Aprobado', value: 'Aprobado' },
        { text: 'Pagado', value: 'Pagado' },
        { text: 'Errores', value: 'Errores' },
      ],
      viewMessage: false,
      message: 'Selección Invalida'
    }
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  methods: {
    formatAmaount(costo) {
      const formatNumber = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(costo || '0');
      return formatNumber;
    },
    aprobarPaquete(itemChange) {
      this.$emit('cambioEstado', itemChange);
    }
  }    
}
</script>