<script>
import axios from 'axios';
import AppCard from '../components/AppCard.vue';
import { store } from '../store';
export default {
    data() {
        return {
            store,
            projects: [],
            currentPage: 1,
            totalPages: 1,
        }
    },
    created() {
        this.fetchProjects();
    },
    components: {
        AppCard,
    },
    methods: {
        fetchProjects() {
            axios.get(`${this.store.baseUrl}/api/projects?page=${this.currentPage}`)
                .then((resp) => {
                    this.projects = resp.data.result.data;
                    this.totalPages = resp.data.result.last_page;
                    console.log(resp.data.result)
                });
        },
        changePage(page) {
            this.currentPage = page;
            this.fetchProjects();
        },
    },

}
</script>


<template>
    <main>
        <div class="container my-5">
            <h1 class="my-5 text-center">Our projects</h1>
            <div class="row align-items-center g-5">
                <div class="col-12 col-md-6 col-lg-4 col-xxl-3 d-flex flex-column align-items-center"
                    v-for="project in projects" :key="project.id">
                    <AppCard :project="project" />
                </div>
            </div>


            <nav aria-label="Page navigation" class="my-4">
                <ul class="pagination">
                    <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
                        <a class="page-link" href="#" aria-label="Previous" @click.prevent="changePage(currentPage - 1)">
                            Previous<span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item" v-for="page in totalPages" :key="page"
                        :class="{ 'active': currentPage === page }">
                        <a class="page-link" href="#" @click="changePage(page)">{{ page }}</a>
                    </li>
                    <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
                        <a class="page-link" href="#" aria-label="Next" @click.prevent="changePage(currentPage + 1)">
                            Next <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>


    </main>
</template>

<script scoped></script>