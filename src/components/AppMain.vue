<script>
import axios from 'axios';
import AppCard from './AppCard.vue';
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
    components: {
        AppCard,
    }

}
</script>


<template>
    <main>
        <div class="container my-5">
            <h1 class="my-5">My projects</h1>
            <div class="row align-items-center g-3">
                <div class="col-3" v-for="project in projects" :key="project.id">
                    <AppCard :project="project" />
                </div>
            </div>
        </div>


    </main>
</template>

<script scoped></script>