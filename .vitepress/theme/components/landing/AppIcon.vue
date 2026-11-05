<script setup lang="ts">
import type { IconName } from "../../landing";
import { icons } from "./icons";

defineProps<{ name: IconName }>();
</script>

<template>
  <svg
    class="app-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path v-for="(d, i) in icons[name]" :key="i" :d="d" />
  </svg>
</template>

<style scoped>
.app-icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  vertical-align: -0.125em;
  transition: transform 0.2s ease;
}
</style>
