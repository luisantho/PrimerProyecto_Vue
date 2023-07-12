<template>
    <div class="container-ul">
        <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque a quisquam eaque assumenda molestias ipsum corrupti quas, quam aut, fugiat repudiandae sit, laudantium veniam velit vitae illum commodi cupiditate.</li>

            
        </ul>
    </div>

</template>
<script setup lang="ts">
import ListaCompra from './ListaCompra.vue';
import {ListaModelo} from '@/models/ListaModelo'



</script>

<style scoped>
.container-ul{
    display: flex;
    align-items: center;
    justify-content: center;
   
}

ul{
    list-style: none;
    text-align: center;
    display: inline;
}
li{
    
    padding: 10px;
    background-color: rgb(99, 171, 99);
    color: black;
    
    
}

</style>