<!-- eslint-disable vue/block-lang -->
<script>
export default {
    name: 'NavigatinonComponent'
}
</script>

<template>
<section>
            <div>
                <h3 class="text-3xl font-bold">
                    Portfolio
                </h3>
            </div>
            <nav class="flex justify-center items-center">
                <router-link to="/" class="mr-4 text-blue-500">Home</router-link>
                <router-link to="/blog" class="mr-4 text-blue-500">Stage</router-link>
                <router-link to="/about" class="mr-4 text-blue-500">About me</router-link>
                <router-link to="/contact" class="text-blue-500">Contact</router-link>
            </nav>
         </section>
</template>