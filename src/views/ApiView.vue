<template>
  <div>
    <Suspense>
     <BeerComponent></BeerComponent>
    </Suspense>
  </div>
  </template>
  <script lang="ts">
  
 import {defineComponent} from 'vue';
//  import ApodComponent from '@/components/ApodComponent.vue';
import BeerComponent from '@/components/Beer/BeerComponent.vue';

  
//  export default defineComponent({
//     component: {
//         ApodComponent
//     },
//     components: { ApodComponent }
// })
  export default defineComponent({
    components:{
      BeerComponent
    }
  })
  
  </script>