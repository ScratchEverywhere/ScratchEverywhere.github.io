<script setup lang="ts">
import { useData } from "vitepress";
import { demo } from "../../landing";
import LandingCommunity from "./LandingCommunity.vue";
import LandingFeatures from "./LandingFeatures.vue";
import LandingHero from "./LandingHero.vue";
import LandingNightly from "./LandingNightly.vue";

const { theme } = useData();
</script>

<template>
  <div class="landing">
    <LandingHero />

    <main id="content" class="landing-content">
      <LandingFeatures />

      <img class="demo" :src="demo" alt="Scratch Everywhere! demo" />

      <LandingNightly />
      <LandingCommunity />

      <hr class="disclaimer-rule" />
      <p class="disclaimer">{{ theme.footer?.message }}</p>
    </main>
  </div>
</template>

<style>
@media (prefers-reduced-motion: no-preference) {
  html:has(.landing) {
    scroll-behavior: smooth;
  }
}
</style>

<style scoped>
.landing {
  min-height: 100vh;
  background: var(--ctp-mocha-base);
  color: var(--ctp-mocha-text);
  font-family: var(--vp-font-family-base);
}

.landing-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2em;
}

.demo {
  display: block;
  width: 100%;
  margin: 2rem auto;
  border-radius: 12px;
  filter: drop-shadow(0 0 32px #885686);
}

.disclaimer-rule {
  margin: 3rem 0 1.5em;
  border: none;
  border-top: 1px solid currentColor;
  opacity: 0.4;
}

.disclaimer {
  margin: 0;
}
</style>
