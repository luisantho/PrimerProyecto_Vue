<template>
    <div class="container">
        <Slider v-model="value" />
    </div>
    <div class="container">
        <div class="row justify-content-center align-items-center g-2">
            <div class="col-xs-12 col-md-6 col-lg-4" v-for="(beer, id) in beers" :key="id">
                <div class="card h-100">
                    <img class="card-img-top mx-auto mt-3" :src="beer.imageUrl" alt="Title" style="width: 60px;">
                    <div class="card-body">
                        <h4 class="card-title">{{ beer.name }}</h4>
                        <p class="card-text">{{ beer.tagline }}</p>
                        <p class="card-text">{{ beer.abv }}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup lang="ts" >
import { ref, defineComponent,watch } from 'vue'
import { Beer,getBeers } from '@/models/BeerModel'
import Slider from '@vueform/slider'

defineComponent({
    components:{
        Slider
    }
})

let value = ref(0)
const beers = ref<Beer[]>()

watch(value,async (newValue:any) => {
    console.log('new value' + newValue);
    
})

beers.value = await getBeers();

</script>

<style  src="@vueform/slider/themes/default.css">

</style>