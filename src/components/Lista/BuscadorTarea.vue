<template>
    <div class="buscador">
        <input type="text" placeholder="Nombre de la tarea" v-model="nombreBuscar">
        <button type="button" class="btn btn-dark">Buscar</button>
        <div>
            <ul class="list-group">
                <li class="list-group-item" ></li>
            </ul>
        </div>
        <div>
            <ul class="list-group">
                <li class="list-group-item" ></li>
            </ul>

        </div>

    </div>

</template>
<script setup lang="ts">
import { Tarea } from '@/models/TareaModel';
import {ref,defineProps} from 'vue'




</script>

<style scoped>
input{
    border-radius: 5px;
    border: 1px solid black;
    margin: 20px;
}

</style>