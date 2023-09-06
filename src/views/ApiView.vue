<template>
  <div>
    <Suspense>
      <ApodComponent></ApodComponent>
    </Suspense>
  </div>
  </template>
  <script lang="ts">
  
 import {defineComponent} from 'vue';
 import ApodComponent from '@/components/ApodComponent.vue';
  
 export default defineComponent({
    component: {
        ApodComponent
    },
    components: { ApodComponent }
})
  
  
  </script>