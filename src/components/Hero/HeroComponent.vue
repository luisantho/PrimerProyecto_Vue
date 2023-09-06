<template>
    <InputHero @addHero="addHero"></InputHero>
    <ListaHero :heroes="heroes" @onDeleteHero="deleteHero"></ListaHero>

</template>
<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import { Hero } from '@/models/HeroModel'
import InputHero from './InputHero.vue';
import ListaHero from './ListaHero.vue';

defineComponent({
    components: {
        ListaHero,
        InputHero,
       
    }
})
const heroes = ref<Hero[]>([])

const deleteHero = (index: number) => {

    heroes.value.splice(index, 1)
}
const addHero = (hero: Hero) => {
    if (hero.name === '') {
        return;
    }

    heroes.value.push(hero)
}


</script>
<style scoped></style>