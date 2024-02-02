<script>
import { store } from '../store'
export default {
    data() {
        return {
            store,
        }
    },
    props: {
        project: Object,
    },
    computed: {
        reduceText() {
            if (this.project.description && this.project.description.length > 15) {
                return this.project.description.slice(0, 15) + "..."; // so che sarebbe meglio substring, ma metto questo giusto per provare slice
            }
            return this.project.description;

        },
    },
    methods: {
        punctuation(index, total) {
            return index < total - 1 ? ', ' : '.';
        },
        getImage(imgPath) {
            return new URL(`../assets/img/${imgPath}`, import.meta.url).href;
        }
    }
}

</script>

<template>
    <div class="card" style="width: 18rem;">
        <img :src="!project.cover_image ? getImage('no_Image_Available.jpg') : `${store.baseUrl}/storage/${project.cover_image}`"
            class="card-img-top" :alt="project.name">

        <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p class="card-text">{{ reduceText }}</p>
            <div>
                <span class="fw-bold">Project technologies: </span>
                <p class="card-text d-inline" v-for="(technology, index) in project.technologies">{{
                    technology.technology_name }}{{ punctuation(index, project.technologies.length) }}
                </p>
            </div>
            <p class="mt-2"><span class="fw-bold">Project type: </span>{{ project.type.name }}</p>
            <p><span class="fw-bold">Author:</span> {{ project.user.name }}</p>
            <router-link :to="{ name: 'single-project', params: { slug: project.slug } }">details</router-link>

        </div>
    </div>
</template>

<style scoped></style>