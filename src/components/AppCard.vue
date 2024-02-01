<script>
export default {
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
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
        }
    }
}

</script>

<template>
    <div class="card" style="width: 18rem;">
        <img :src="`${baseUrl}/storage/${project.cover_image}`" class="card-img-top" :alt="project.name">
        <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p class="card-text">{{ reduceText }}</p>
        </div>
    </div>
</template>

<style scoped></style>