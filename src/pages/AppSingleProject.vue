<script>
import axios from 'axios';
import { store } from '../store';
export default {
    data() {
        return {
            store,
            singleProject: null,
            loading: false,
        }
    },
    created() {
        this.loading = true;
        axios.get(`${this.store.baseUrl}/api/projects/${this.$route.params.slug}`).then((resp) => {
            this.singleProject = resp.data.result;
            console.log(this.singleProject)
        }).finally(() => {
            this.loading = false
        })
    },
    methods: {

        getImage(imgPath) {
            return new URL(`../assets/img/${imgPath}`, import.meta.url).href;
        },
    },
}
</script>

<template>
    <div class="container my-5">
        <div v-if="!loading" class="d-flex flex-column align-items-center">
            <h3>{{ singleProject.name }}</h3>
            <p><span class="fw-bold">Author:</span> {{ singleProject.user.name }}</p>
            <img :src="!singleProject.cover_image ? getImage('no_Image_Available.jpg') : `${store.baseUrl}/storage/${singleProject.cover_image}`"
                class="card-img-top" :alt="singleProject.name">
            <div class="my-5">

                <span class="fw-bold">Project technologies: </span>
                <span class="badge fs-6 card-text my-0 mx-1"  :style="{ backgroundColor: technology.hex_color }"  v-for="(technology, index) in singleProject.technologies">{{
                    technology.technology_name }}
                </span>
                <p class="m-0"><span class="fw-bold">Type:</span> {{ singleProject.type.name }}</p>
                <p class="m-0"><span class="fw-bold">Description:</span> {{ singleProject.description }}</p>
            </div>

        </div>

        <div v-if="loading" class="d-flex flex-column align-items-center">
            <p>loading..</p>
        </div>

    </div>
</template>

<style scoped>
img {
    width: 300px;
}
</style>