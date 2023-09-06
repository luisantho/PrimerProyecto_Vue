<template>
    <div class="container">
        <h1>Lista de Tareas</h1>

        <AgregarTarea @add="agregarTarea"></AgregarTarea>

        <div class="lista " v-if="tareas.length > 0">
            <ul class="list-group ">
                <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(tarea, id) in tareas"
                    :key="id">
                    <span :class="{ 'tarea-finalizada-nombre': tarea.estadoActual === 'finalizado' }">{{ tarea.nombre
                    }}</span>
                    <span
                        :class="{ 'tarea-pendiente': tarea.estadoActual === 'pendiente', 'tarea-finalizada': tarea.estadoActual === 'finalizado' }">{{
                            tarea.estadoActual }}</span>
                    <button type="button" class="btn btn-danger btn-sm" @click="eliminarTarea(id)">Eliminar</button>
                    <input class="form-check-label" type="checkbox" @change="tareaAcababa(tarea)">
                    <label class="form-check-label">
                        Hecho
                    </label>
                    <button type="button" class="btn btn-info btn-sm" @click="mostrarModal = true">Modificar</button>
                    <div v-if="mostrarModal">
                        <ModalComponent></ModalComponent>
                    </div>

                </li>
            </ul>
            <p>Tareas pendientes: {{ tareasPendientes() }}</p>
            <button type="button" class="btn btn-dark" @click="eliminarTodo">Eliminar todo</button>

        </div>
        <div class="lista" v-else>
            <ul class="list-group">
                <li class="list-group-item">Aún no hay tareas</li>
            </ul>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import AgregarTarea from '@/components/Lista/AgregarTarea.vue'
import { Tarea } from '@/models/TareaModel'
import DetallesTarea from './DetallesTarea.vue'
import ModalComponent from './ModalComponent.vue';

//Variables y arrays

let tareas = ref<Tarea[]>([])
let mostrarModal = ref(false)

//


// Función para calcular el número de tareas pendientes
const tareasPendientes = (): number => {
    let tareasPen = 0
    tareas.value.forEach((tarea) => {
        if (tarea.estadoActual === 'pendiente') {
            tareasPen++;
        }
    });

    return tareasPen
}

// Función para agregar una nueva tarea con el nombre pasado por el usuario
const agregarTarea = (nombreTarea: string) => {
    if (nombreTarea != '') {

        const tarea: Tarea = {
            nombre: nombreTarea,
            estadoActual: 'pendiente',
            fechaCreacion: new Date()
        };

        tareas.value.push(tarea);
    }
}

// Función para eliminar una tarea en concreto
const eliminarTarea = (id: number) => {
    tareas.value.splice(id, 1)
}

// Función marcar una tarea como finalizada o pendiente
const tareaAcababa = (tarea: Tarea) => {

    tarea.estadoActual = tarea.estadoActual === 'finalizado' ? 'pendiente' : 'finalizado';

}

//Realmente lo que hace esta función es vaciar el array
const eliminarTodo = () => {
    tareas.value = []
}

</script>
<style scoped>
.tarea-pendiente {
    color: red;
    font-weight: bold;
}

.tarea-finalizada {
    color: green;
    font-weight: bold;
}

.tarea-finalizada-nombre {
    text-decoration: line-through;
}

p {
    text-align: left;
    margin-top: 5px;
}
</style>