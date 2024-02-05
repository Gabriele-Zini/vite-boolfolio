<script>
export default {
    data() {
        return {
            links: [
                {
                    name:'home',
                    title:'Projects',
                },
                {
                    name:'about',
                    title:'About',
                },
               
            ]
        }

    }
}
</script>

<template>
    <header class="d-flex align-items-center justify-content-end">
        <div class="container">
            <nav class="nav">
                <router-link class="nav-link" v-for="link in links" :to="{ name: link.name }">{{ link.title }}</router-link>
            </nav>
        </div>
    </header>
</template>

<style scoped>
header {
    min-height: 100px;
    background-color: rgb(35, 31, 31);
}
</style>