<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <section class="landing-section">
    <h2>{{ title }}</h2>
    <hr />
    <slot />
  </section>
</template>

<style scoped>
.landing-section {
  margin-top: 3rem;
}

h2 {
  margin: 0;
  border: none;
  padding: 0;
  font-size: 2em;
  font-weight: 700;
  letter-spacing: normal;
  line-height: 1.25;
}

hr {
  margin: 0.5em 0 1.5em;
  border: none;
  border-top: 1px solid currentColor;
  opacity: 0.4;
}
</style>
