<template>
    <div class="container">
        <h1>Welcome to Punk Api </h1>

        <div v-if="(result instanceof Beer)">
            <h3>{{ result.id }}</h3>
            <h3>{{ result.name }}</h3>
            <img :src="result.image_url">
            <h3>{{ result.description }}</h3>
        </div>

        <div v-if="(result instanceof ErrorBeer)">
            <h3>{{ result.code }}</h3>
            <h3>{{ result.msg }}</h3>
        </div>
    </div>

</template>
<script setup lang="ts">
import {ref} from 'vue'
import {ErrorBeer,Beer,getBeer} from '@/models/BeerModel'

const result = ref<Beer|ErrorBeer>()

result.value =  await getBeer()
 

</script>
<style scoped>

</style>