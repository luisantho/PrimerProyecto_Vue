<template>
  <div class="home">
    <CalculadoraComponent></CalculadoraComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
//import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import CalculadoraComponent from '@/components/Calculator/CalculadoraComponent.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    CalculadoraComponent
},
});
</script>
