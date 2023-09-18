<template>
    <div class="container">
        <Slider v-model="range" class="my-4" :lazy="false" />
    </div>
    <div class="container">
        <div class="row justify-content-center align-items-center g-2">
            <div class="col-xs-12 col-md-6 col-lg-4" v-for="(beer, id) in filterBeers" :key="id">
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
import { ref, defineComponent, computed } from 'vue'
import { Beer, getBeers } from '@/models/BeerModel'
import Slider from '@vueform/slider'

defineComponent({
    components: {
        Slider
    }
})

const range = ref([5, 10])
const beers = ref<Beer[]>()

beers.value = await getBeers();

//Filtrando beers con un computed
const filterBeers = computed(() => beers.value
.filter(beer => beer.abv >= range.value[0] && beer.abv <= range.value[1])
.sort((a,b) => a.abv - b.abv));

</script>

<style  src="@vueform/slider/themes/default.css"></style>