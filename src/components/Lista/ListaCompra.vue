<template>
    <div>
        <h1>Lista de la compra</h1>
        <InputComponent></InputComponent>
        <TablaComponent></TablaComponent>
    </div>

</template>
<script setup lang="ts">
import {Ref,ref,defineComponent } from 'vue'
import {ListaModelo} from '@/models/ListaModelo'
import InputComponent from './InputComponent.vue';
import TablaComponent from './TablaComponent.vue';

defineComponent({
    name: 'ListaCompra',
    components: {
        InputComponent,
        TablaComponent
    }
})
</script>

<style>

</style>