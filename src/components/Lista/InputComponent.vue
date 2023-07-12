<template>
    <div class="container-input">
        <label>Introduce el producto</label>
        <input type="text" v-model="producto">
        <label>Introduce la cantidad</label>
        <input type="number"  v-model="cantidad">

        <button @click="insertar(producto, cantidad)">Insertar</button>

    </div>
</template>
<script setup lang="ts">
import {Ref,ref,defineProps} from 'vue'
import { ListaModelo } from '@/models/ListaModelo';

//Definición de props
const props = defineProps({
    producto: String,
    cantidad: Number,
    arrayLista:ListaModelo
});

// Variables 
let producto: Ref<string> = ref('')
let cantidad:Ref<number> = ref(0)
let arrayLista = ref<ListaModelo[]>([]) 



//Función 
const insertar = (producto:string, cantidad:number) => {
    
    let lista :ListaModelo = new ListaModelo(producto, cantidad)
    arrayLista.value.push(lista)
    console.log(lista)
}

</script>

<style scoped>

input{
    border-radius: 4px;
    padding: 5px;
    margin: 15px;
    border: 1px solid black;
}

button{
    border-radius: 7px;
    padding: 6px;
    background-color: black;
    color: white;
    box-shadow: none;
    border: none;
}
.container-input{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: auto;
}

</style>