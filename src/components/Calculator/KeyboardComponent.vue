<template>
    <div class="calculator__keys">
    <button @click="handleClick('+')" class="calculator__key calculator__key--operator">+</button>
    <button @click="handleClick('-')" class="calculator__key calculator__key--operator">-</button>
    <button @click="handleClick('*')" class="calculator__key calculator__key--operator">&times;</button>
    <button @click="handleClick('/')" class="calculator__key calculator__key--operator">÷</button>
    <button @click="handleClick(7)" class="calculator__key">7</button>
    <button @click="handleClick(8)" class="calculator__key">8</button>
    <button @click="handleClick(9)" class="calculator__key">9</button>
    <button @click="handleClick(4)" class="calculator__key">4</button>
    <button @click="handleClick(5)" class="calculator__key">5</button>
    <button @click="handleClick(6)" class="calculator__key">6</button>
    <button @click="handleClick(1)" class="calculator__key">1</button>
    <button @click="handleClick(2)" class="calculator__key">2</button>
    <button @click="handleClick(3)" class="calculator__key">3</button>
    <button @click="handleClick('.')" class="calculator__key">.</button>
    <button @click="handleClick(0)" class="calculator__key">0</button>
    <button @click="handleClick('AC')" class="calculator__key">AC</button>
    <button @click="handleClick('=')" class="calculator__key calculator__key--enter">=</button>
  </div>


</template>

<script setup lang="ts">
import { defineEmits } from 'vue';

const emits = defineEmits(['myClick'])


const handleClick = (myValue: number | string) => {
    emits('myClick',myValue)

}

</script>

<style scoped>

.calculator__keys {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1px;
  background: hsl(207, 19%, 61%);
}
.calculator__key {
  background: hsl(210, 25%, 95%);
  border: none;
  padding-block-start: 1rem;
  padding-block-end: 1rem;
  padding-inline-end: 1.25rem;
  padding-inline-start: 1.25rem;
  font-size: 1.5rem;
}
.calculator__key:active,
.calculator__key:focus {
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3) inset;
  outline: none;
}
.calculator__key--operator {
  background: hsl(208, 25%, 86%);
}
.calculator__key--operator:active {
  background: hsl(208, 24%, 80%);
}
.calculator__key--enter {
  grid-column: 4 / 5;
  grid-row: 2 / span 4;
  background:  rgb(17, 196, 17);
}

</style>