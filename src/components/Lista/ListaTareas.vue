<template>

    <div class="container">
        <h1>Lista de Tareas</h1>
        <BuscadorTarea @emit="buscarTarea"></BuscadorTarea>
        <AgregarTarea @add="agregarTarea"></AgregarTarea>

            <div class="lista" v-if="tareas.length>0">
                <ul class="list-group">
                    <li
                     class="list-group-item" 
                     v-for="(tarea,id) in tareas" :key="id"
                     >
                     <span >{{ tarea.nombre }}</span>
                     <span :class="{'tarea-pendiente': tarea.estadoActual === 'pendiente', 'tarea-finalizada': tarea.estadoActual === 'finalizado'}">{{ tarea.estadoActual }}</span>
                    <button type="button" class="btn btn-danger" @click="eliminarTarea(id)">Eliminar</button>
                    <input class="form-check-label" type="checkbox" value="" id="flexCheckDefault" @change="tareaAcababa(tarea)">
                        <label class="form-check-label" for="flexCheckDefault">
                            Hecho
                        </label>
                     
                    </li>
                </ul>

            </div>
            <div class="lista" v-else>
                <ul class="list-group">
                    <li  class="list-group-item">Aún no hay tareas</li>
                </ul>

            </div>
    </div>

</template>

<script setup lang="ts">
import {ref} from 'vue'
import AgregarTarea from '@/components/Lista/AgregarTarea.vue'
import {Tarea} from '@/models/TareaModel'
import BuscadorTarea from '@/components/Lista/BuscadorTarea.vue'




let tareas = ref<Tarea[]>([])


const agregarTarea = (nombreTarea:string) => {
    const tarea : Tarea = {
        nombre: nombreTarea,
        estadoActual : 'pendiente'
    };

    tareas.value.push(tarea);
}

const eliminarTarea = (id:number) => {
    tareas.value.splice(id,1)
}

const tareaAcababa = (tarea: Tarea) =>{
    tarea.estadoActual = 'finalizado'
}

const buscarTarea = () =>{
    //
}
</script>
<style scoped>
.lista{

    margin-top: 10px;
    text-align: center;
    justify-content: space-between;
}
.tarea-pendiente{
    color: red;
    font-weight: bold;
}
.tarea-finalizada{
    color: green;
    font-weight: bold;
}
.tarea-finalizada-nombre{
   text-decoration: line-through;
}

</style>