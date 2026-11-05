<script setup lang="ts">
import { badgeUrl, nightlyBuilds } from "../../landing";
import LandingSection from "./LandingSection.vue";

const repo = "ScratchEverywhere/ScratchEverywhere";
const branch = "main";

const nightlyUrl = (workflow: string) => {
  const file = /\.ya?ml$/.test(workflow) ? workflow : `${workflow}.yml`;
  return `https://nightly.link/${repo}/workflows/${file}/${branch}`;
};
</script>

<template>
  <LandingSection title="Nightly builds">
    <ul class="builds">
      <li v-for="build in nightlyBuilds" :key="build.workflow">
        <a class="build" :href="nightlyUrl(build.workflow)">
          <h3 class="build-name">{{ build.name }}</h3>
          <img
            :src="badgeUrl(build.workflow)"
            :alt="`${build.name} Nightly Build`"
            loading="lazy"
          />
        </a>
      </li>
    </ul>
  </LandingSection>
</template>

<style scoped>
.builds {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.builds li {
  margin: 0;
}

.build {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  height: 100%;
  box-sizing: border-box;
  padding: 0.9rem 1rem;
  border: 2px solid var(--ctp-mocha-surface0, #ccd0da);
  border-radius: 0.75em;
  background: var(--ctp-mocha-mantle, #e6e9ef);
  color: var(--ctp-mocha-text, #4c4f69);
  text-decoration: none;
  transition:
    transform 0.2s cubic-bezier(0.25, 3, 0.5, 1),
    border-color 0.15s;
}

.build:hover,
.build:focus-visible {
  border-color: #f9a83a;
  transform: translateY(-2px);
}

.build:active {
  transform: scale(0.97);
}

.build-name {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.2;
}

.build img {
  display: block;
  align-self: flex-start;
  max-width: 100%;
  height: auto;
}

@media (prefers-reduced-motion: reduce) {
  .build {
    transition: border-color 0.15s;
  }

  .build:hover,
  .build:focus-visible,
  .build:active {
    transform: none;
  }
}
</style>
