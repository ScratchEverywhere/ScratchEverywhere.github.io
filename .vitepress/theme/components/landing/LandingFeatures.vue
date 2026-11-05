<script setup lang="ts">
import { features } from "../../landing";
import CardGrid from "./CardGrid.vue";
import LandingCard from "./LandingCard.vue";
</script>

<template>
  <CardGrid>
    <LandingCard v-for="feature in features" :key="feature.title">
      <template #title>{{ feature.title }}</template>
      {{ feature.details }}
    </LandingCard>
  </CardGrid>
</template>
