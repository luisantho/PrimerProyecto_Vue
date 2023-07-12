<template>
     <div class="calculator__output">{{ myDisplay }}</div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';

defineProps({
    myDisplay: {
        type: String,
        required: true
    }
})

</script>

<style>
.calculator__output {
  background: hsl(202, 11%, 29%);
  color: hsl(255, 100%, 100%);
  font-size: 2rem;
  padding-block-start: 0.5rem;
  padding-block-end: 0.5rem;
  padding-inline-end: 0.75rem;
  text-align: end;
}

</style>