<script>
import axios from 'axios';
export default {
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
            projects: [],
        }
    },
    created() {
        axios.get(`${this.baseUrl}/api/projects`).then((resp) => {
            this.projects = resp.data.result.data;
            console.log(this.projects);
        })

    },
    methods: {

    },

}
</script>


<template>
    <main>
        <div class="container my-5">
            <h1 class="my-5">My projects</h1>
            <div class="row align-items-center g-3">
                <div class="col-3" v-for="project in projects" :key="project.id">
                    <div class="card" style="width: 18rem;">
                        <img :src="`${baseUrl}/storage/${project.cover_image}`" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{ project.name }}</h5>
                            <p class="card-text">{{ project.description ? project.description : 'No description' }}.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </main>
</template>

<script scoped></script>