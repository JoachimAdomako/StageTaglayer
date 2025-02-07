<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

console.log(route.params.id);

const blog = await fetch('http://localhost:1337/api/weeks')
  .then(prev => prev.json());

const filterBlog = blog.data.filter(item => {
    return item.IdBlog == route.params.id
})
</script>

<template>
<div class="flex flex-col items-center">
    <div v-for = 'filter in filterBlog' class="flex flex-col flex-wrap w-4/6 bg-white p-8 m-4 shadow-lg rounded-2xl">
        <div v-html="filter.Monday"></div>
    </div>
</div>
</template>