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
            if (resp.data.success) {
                this.singleProject = resp.data.result;
                console.log(resp.data.success)
            } else {
                this.$router.push({ name: 'not-found' })
            }
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

        <div v-if="loading" class="d-flex flex-column align-items-center">
            <p>loading...</p>
        </div>

        <div v-else class="d-flex flex-column align-items-center">
            <div v-if="singleProject !== null">
                <h3>{{ singleProject.name }}</h3>
                <p><span class="fw-bold">Author:</span> {{ singleProject.user.name }}</p>
                <img :src="!singleProject.cover_image ? getImage('no_Image_Available.jpg') : `${store.baseUrl}/storage/${singleProject.cover_image}`"
                    class="card-img-top" :alt="singleProject.name">
                <div class="my-5">

                    <span class="fw-bold">Project technologies: </span>
                    <span class="badge fs-6 card-text my-0 mx-1" :style="{ 'background-color': technology.hex_color }"
                        v-for="technology in singleProject.technologies">{{
                            technology.technology_name }}
                    </span>
                    <p class="m-0"><span class="fw-bold">Type:</span> {{ singleProject.type.name }}</p>
                    <p class="m-0"><span class="fw-bold">Description:</span> {{ singleProject.description }}</p>
                    <p class="m-0"><span class="fw-bold">Created at:</span> {{ singleProject.created_at }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
img {
    width: 300px;
}
</style>