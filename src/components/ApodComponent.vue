<template>
    <div class="container">
        <VueDatePicker v-model="date"></VueDatePicker>
        <div class="row align-items-md-stretch" v-if="!responded">
            <div class="col-md-12">
                <div class="h-100 p-5 text-black  border rounded-3">
                    <h2>{{ errorCode }}</h2>
                    <p>{{ errorMessage }}</p>

                </div>

            </div>
        </div>

        <div class="row align-items-md-stretch" v-if="responded">
            <div class="col-md-12">
                <div class="h-100 p-5 text-black  border rounded-3">
                    <h2>{{ apod?.title }}</h2>
                    <p>{{ apod?.date }}</p>
                    <div class="container-fluid d-flex">
                        <img class="mx-auto" :src="apod?.url" :alt="apod?.title">

                    </div>
                    <p class="mt-3">{{ apod?.explanation }}</p>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup lang="ts" >
import { ref, defineComponent, watch } from 'vue'
import { Apod } from '@/models/ApodModel'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { ErrorApod } from '@/models/ApodModel'

defineComponent({
    components: {
        VueDatePicker
    }
})

const responded = ref(false)
const errorMessage = ref('')
const errorCode = ref(0)
const date = ref('')
const apod = ref<Apod>()

watch(date, async (newDate: any) => {
    console.log('new date' + newDate)
    //yyyy-mm-dd
    const dateStr = newDate.toISOString().split('T')[0];
    await getApod(dateStr);
})


const getApod = async (date?: string): Promise <ErrorApod | Apod> => {

    let url = 'https://ap.nasa.gov/planetary/apod?api_key=DEMO_KEY'
    if (date !== undefined) {
        url += '&date=' + date
    }
    //Guardar la respuesta en una constante para poder poner condiciones
    const response = await fetch(url)
    if (!response.ok) {
        console.error('Error' + JSON.stringify(response));
        switch (response.status) {
            case 400:
                return new ErrorApod(400, 'Bad request')

            case 500:
                return new ErrorApod(500, 'Internal server error')
            default:
                break;
        }

    }
    responded.value = true;
    const json = await response.json();
    return new Apod(json)

}

await getApod();

</script>

<style scoped></style>