<!-- eslint-disable vue/block-lang -->
<script>
export default {
    name: 'HomeComponent',
    data() {
        return {}
    },
    methods:{
        goToBlog(){
            this.$router.push('/blog')
        }
    }
}
</script>

<template>
    <div >

        <!-- Introduction Section -->
        <section class="text-center my-8 mt-15 mx-auto">
            <h1 class="text-5xl font-bold">I'm <span class="text-blue-600">Joachim </span> Adomako</h1>
            <p class="text-xl text-wrap mt-7">Welcome to my portfolio! Here you will find information about my projects, skills, and experience. <br/> Feel free to explore and learn more about what I do. 
                If you have any questions or would like to get in touch,<br/> please visit the Contact section.
            </p>
        </section>

        <!-- image -->
<!--          <section class="fixed bottom-0 right-0 m-0">
            <div class="flex justify-center items-center">
                <img src="../assets/portfolio-picture.jpg" alt="hero" class="w-xl">
            </div>
         </section> -->

        <!-- Projects Section -->
    <!--     <section class="my-8">
            <h2 class="text-3xl font-semibold">Projects</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div v-for="project in projects" :key="project.name" class="border p-4 rounded shadow">
                    <h3 class="text-2xl font-bold">{{ project.name }}</h3>
                    <p class="mt-2">{{ project.description }}</p>
                </div>
            </div>
        </section> -->

        <!--Blog -->
        <section class="flex justify-center items-center my-10 mt-30">
            <div>
                <button class="text-2xl bg-blue-600 text-white px-4 py-4 rounded cursor-pointer" @click="goToBlog">
                    Go to my blog <span class="pi pi-chevron-right" style="font-size: 1.2rem;"></span>
                </button>
            </div>
        </section>


    </div>
</template>
