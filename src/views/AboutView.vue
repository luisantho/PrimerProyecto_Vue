<template>
  <div class="about">
      <ListaCompra></ListaCompra>
  </div>
</template>
<script lang="ts">

import {defineComponent} from 'vue'
import ListaCompra from '@/components/Lista/ListaTareas.vue'

export default defineComponent ({
  name: 'AboutView',
  components:{
    ListaCompra
  },
})




</script>