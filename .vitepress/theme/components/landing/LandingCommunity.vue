<script setup lang="ts">
import { communityLinks, discord } from "../../landing";
import AppIcon from "./AppIcon.vue";
import LandingCard from "./LandingCard.vue";
import LandingSection from "./LandingSection.vue";
</script>

<template>
  <LandingSection title="Find us on...">
    <div class="community">
      <iframe
        class="discord"
        title="Scratch Everywhere! Discord server"
        :src="discord.widget"
        loading="lazy"
        allowtransparency="true"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      />
      <div class="links">
        <LandingCard
          v-for="item in communityLinks"
          :key="item.link"
          :href="item.link"
          :accent="item.accent"
        >
          <template #title>
            <AppIcon :name="item.icon" /> {{ item.title }}
          </template>
          {{ item.subtitle }}
        </LandingCard>
      </div>
    </div>
  </LandingSection>
</template>

<style scoped>
.community {
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  padding: 1em 0;
}

.discord {
  flex: 1 1 300px;
  width: 100%;
  height: 500px;
  border: none;
}

.links {
  flex: 2 1 300px;
  display: flex;
  flex-direction: column;
  gap: 2em;
}

.links > * {
  flex: 1;
}
</style>
