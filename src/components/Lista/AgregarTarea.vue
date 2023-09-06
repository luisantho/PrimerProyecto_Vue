<template>

    <div class="container mt-4">
        <div class="alert" v-if="mostrarAlert">
            <AlertComponent></AlertComponent>
        </div>
        <label>Agrega una tarea</label>
        <input type="text" v-model="nombreTarea" v-on:keyup.enter="añadirTarea">
        <button type="button" class="btn btn-dark"  @click="añadirTarea">Añadir</button>
      
    </div>

</template>

<script setup lang="ts">
import {ref,defineEmits} from 'vue'
import AlertComponent from './AlertComponent.vue';

let nombreTarea = ref('')
let mostrarAlert = ref<boolean>()
//Definimos el evento y la guardamos en una constante
const emitAgregar = defineEmits(['add'])

//Con esta funcion se lanza el evento creado anteriormente
const añadirTarea = () => {
    if(nombreTarea.value != ''){
        emitAgregar('add',nombreTarea.value)
        nombreTarea.value = ''
        mostrarAlert.value = false
    } else{
        mostrarAlert.value = true
    }
}

</script>

<style scoped>

input{
    border-radius: 5px;
    border: 1px solid black;
    margin: 20px;
}

</style>