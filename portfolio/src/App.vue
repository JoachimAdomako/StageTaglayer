<!-- eslint-disable vue/block-lang -->
<script>
import NavComponent from './components/navigation.vue'
export default {
  name: 'App',
  data() {
    return {
      message: 'Hello world',
    }
  },
  components: {
    NavComponent,
  },
}
</script>

<template>
  <div class="container mx-auto p-4">
    <Suspense>
      <div id="app">
        <NavComponent class="mb-10"/>
        <router-view />
      </div>
      <template v-slot:fallback>
        <span class="pi pi-spin pi-spinner"></span>
      </template>
    </Suspense>
  </div>
</template>

<style>
body,html {
  background-color: #DBEAFE;
  padding: 6px;
}
</style>
