<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

console.log(route.params.id);

const week = await fetch('http://localhost:1337/api/weeks')
  .then(prev => prev.json());

const selectedWeek = week.data.filter(item => {
    return item.IdBlog == route.params.id
})
</script>

<template>
    <div class="flex flex-col items-center">
      <div v-for="week in selectedWeek" class="flex flex-col w-full bg-white p-8 m-4 shadow-lg rounded-2xl">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="p-4 bg-gray-100 rounded-lg">
            <h3 class="text-lg font-bold mb-2">Monday</h3>
            <div v-html="week.Monday"></div>
          </div>
          <div class="p-4 bg-gray-200 rounded-lg">
            <h3 class="text-lg font-bold mb-2">Tuesday</h3>
            <div v-html="week.Tuesday"></div>
          </div>
          <div class="p-4 bg-gray-100 rounded-lg">
            <h3 class="text-lg font-bold mb-2">Wednesday</h3>
            <div v-html="week.Wednesday"></div>
          </div>
          <div class="p-4 bg-gray-200 rounded-lg">
            <h3 class="text-lg font-bold mb-2">Thursday</h3>
            <div v-html="week.Thursday"></div>
          </div>
          <div class="p-4 bg-gray-100 rounded-lg">
            <h3 class="text-lg font-bold mb-2">Friday</h3>
            <div v-html="week.Friday"></div>
          </div>
        </div>
      </div>
    </div>
  </template>