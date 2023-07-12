<template>
    <div class="calculator">
      <DisplayComponent :myDisplay="display"/>
      <KeyboardComponent @myClick="handleClick"/>
    </div>

</template>

<script setup lang="ts">
import {Ref,ref,defineComponent} from 'vue'
import {CalculatorModel} from '@/models/CalculatorModel'
import DisplayComponent from './DisplayComponent.vue';
import KeyboardComponent from './KeyboardComponent.vue';

defineComponent({
  name: 'CalculatorComponent',
  components:{
    DisplayComponent,
    KeyboardComponent
  }
})


let display: Ref<string> = ref('')

let calculator: CalculatorModel = new CalculatorModel()

const handleClick = (myValue: number | string) => {
    // display.value += myValue.toString()
    if(typeof myValue === 'number'){
        display.value = calculator.hanldeNumber(myValue)
    }else if (typeof myValue === 'string'){
        display.value = calculator.hanldeSymbol(myValue )
    }
}


</script>

<style scoped>
.calculator {
  border-radius: 10px;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15), 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
  margin-inline-start: auto;
  margin-inline-end: auto;
  margin-block-start: 2em;
  max-inline-size: 22rem;
  overflow: hidden;
}

</style>