<template>
    <div class="buscador">
        <input type="text" placeholder="Nombre de la tarea" v-model="nombreBuscar">
        <button type="button" class="btn btn-dark" @click="buscarTarea">Buscar</button>

    </div>

</template>
<script setup lang="ts">
import {ref,defineEmits} from 'vue'

let nombreBuscar = ref('')

const emitBuscar = defineEmits(['emit'])

const buscarTarea = () =>{
    emitBuscar('emit',nombreBuscar)
}


</script>

<style scoped>
input{
    border-radius: 5px;
    border: 1px solid black;
    margin: 20px;
}

</style>