<!-- eslint-disable vue/block-lang -->
<script>
import { useRoute } from 'vue-router';

const route = useRoute();
export default {
  async setup() {
    const blog = await fetch('http://localhost:1337/api/blogs')
    .then(prev => prev.json());
    
    return {
      blog,
    }
  },
  name: 'BlogPage',
  methods:{
    goToBlogDetail(number){
      this.$router.push(`blog/${number}`)
    }
  }
}

</script>

<template>
  <div class="flex flex-col items-center">
    <button @click="goToBlogDetail(item.IdNumber)" v-for="item in blog.data" :key="item.id" class="cursor-pointer bg-blue-400 hover:bg-blue-300 p-4 m-4 shadow-lg rounded-2xl w-full flex justify-baseline" >
      <div >
        <p class="text-2xl font-bold">{{ item.Title}}</p>
        <p>{{ item.date }}</p>
      </div>
    </button>
  </div>
</template>