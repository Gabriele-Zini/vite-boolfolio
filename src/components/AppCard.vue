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
    computed:  {
        
    }
}

</script>

<template>
    <div class="card" style="width: 18rem;">
        <img :src="`${baseUrl}/storage/${project.cover_image}`" class="card-img-top" :alt="project.name">
        <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p class="card-text">{{ project.description ? project.description : 'No description' }}.</p>
        </div>
    </div>
</template>

<style scoped></style>