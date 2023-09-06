<template>
      <div class="container">
        <label for="" class="form-label">Hero Name</label>
        <input  v-model="heroName" type="text" class="form-control" name="" id="" aria-describedby="helpId">
        <small id="helpId">Introduce a hero name</small>
    </div>
    <div class="container">
        <label for="" class="form-label mt-2">Hero Description</label>
        <input  v-model="heroDescription" type="text" class="form-control" name="" id="" aria-describedby="helpId">
        <small id="helpId">Introduce a hero description</small>
    </div>
    <button class="btn btn-dark" @click="addHero()" :disabled="heroName === ''">Add hero</button>

</template>
<script setup lang="ts">
import {ref, defineProps,defineEmits} from 'vue'
import { Hero } from '@/models/HeroModel'

let heroName = ref('')
let heroDescription = ref('')
const emits = defineEmits(['addHero'])

const addHero = () =>{
    emits('addHero',new Hero (heroName.value, heroDescription.value))
}


</script>
<style scoped>

</style>