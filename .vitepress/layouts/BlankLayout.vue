<!-- dogo note: as a "vanilla" html writer i hate vitepress and all js component frameworks so much, 
this could've just been a single file change like replacing index.md with index.html but nah -->

<template>
  <iframe
    :src="iframeSrc"
    class="no-vue"
    frameborder="0"
  ></iframe>
</template>

<script setup>
import { computed } from 'vue'
const path = window.location.pathname.replace(/^\/+/, '')
const resolvedPath = path === '' ? 'index' : path
const iframeSrc = computed(() => `/static/${resolvedPath}.htm`)
</script>

<style scoped>
.no-vue {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  border: none;
}
</style>
