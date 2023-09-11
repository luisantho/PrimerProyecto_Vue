<template>
    <div class="container">
        <VueDatePicker v-model="date"></VueDatePicker>
        <div class="row align-items-md-stretch" v-if="(result instanceof ErrorApod)">
            <div class="col-md-12">
                <div class="h-100 p-5 text-black  border rounded-3">
                    <h2>{{ result.code }}</h2>
                    <p>{{ result.msg  }}</p>

                </div>

            </div>
        </div>

        <div class="row align-items-md-stretch" v-if="(result instanceof Apod)">
            <div class="col-md-12">
                <div class="h-100 p-5 text-black  border rounded-3">
                    <h2>{{ result?.title }}</h2>
                    <p>{{ result?.date }}</p>
                    <div class="container-fluid d-flex">
                        <img class="mx-auto" :src="result?.url" :alt="result?.title">

                    </div>
                    <p class="mt-3">{{ result?.explanation }}</p>
                </div>
            </div>
        
        </div>
    </div>
</template>
<script setup lang="ts" >
import { ref, defineComponent, watch } from 'vue'
import { Apod,ErrorApod,getApod } from '@/models/ApodModel'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


defineComponent({
    components: {
        VueDatePicker
    }
})

const date = ref(new Date().toISOString().split('T')[0]);
const result = ref<Apod | ErrorApod>()

watch(date, async (newDate: any) => {
    console.log('new date' + newDate)
    //yyyy-mm-dd
    const dateStr = newDate.toISOString().split('T')[0];
    result.value = await getApod(dateStr);
})

result.value = await getApod();

</script>

<style scoped></style>