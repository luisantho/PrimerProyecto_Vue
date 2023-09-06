<template>
     <ul class="list-group">
        <li class="list-group-item" v-for="(hero,index) in heroes" :key="index">
            <h3>{{ hero.name }}</h3> 
            <p>{{ hero.description }}</p>
            <button class="btn btn-danger" @click="deleteHero(index)">Delete</button>
        </li>
    </ul>

</template>
<script setup lang="ts">
import {ref, defineProps,defineEmits} from 'vue'
import {Hero} from '@/models/HeroModel'

defineProps({
    heroes:{
        type:Array as () => Hero[],
        required: true
    }
})

const emits = defineEmits(['onDeleteHero'])

const deleteHero = (index:number) => {
   // console.log('deleteHero', index);
    emits('onDeleteHero',index)
}
  
    


</script>
<style scoped>

</style>