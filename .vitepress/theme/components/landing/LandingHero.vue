<script setup lang="ts">
import { withBase } from "vitepress";
import { heroActions, logo, tagline } from "../../landing";
import AppIcon from "./AppIcon.vue";
</script>

<template>
  <header class="hero">
    <div class="hero-main">
      <div class="hero-upper">
        <h1 class="hero-logo">
          <img :src="logo" alt="Scratch Everywhere!" />
        </h1>
        <p class="hero-tagline">{{ tagline }}</p>
      </div>

      <nav class="hero-actions" aria-label="Get started">
        <a
          v-for="action in heroActions"
          :key="action.link"
          class="hero-button"
          :href="withBase(action.link)"
          :data-title="action.text"
          :target="action.link.startsWith('https') ? '_blank' : '_self'"
        >
          <AppIcon :name="action.icon" />
          <span class="sr-only">{{ action.text }}</span>
        </a>
      </nav>
    </div>

    <a class="scroll-arrow" href="#content" aria-label="Scroll down">↓</a>
  </header>
</template>

<style scoped>
.hero {
  --float-distance: 40px;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  min-height: 100svh;
  background: rgb(136, 86, 134);
  text-align: center;
  margin-bottom: 2.5rem;
  z-index: 1;
}

.hero-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: calc(1rem + var(--float-distance)) 0 1rem;
}

.hero::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: 64px;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    rgba(136, 86, 134, 1),
    rgba(136, 86, 134, 0.972) 10%,
    rgba(136, 86, 134, 0.896) 20%,
    rgba(136, 86, 134, 0.784) 30%,
    rgba(136, 86, 134, 0.648) 40%,
    rgba(136, 86, 134, 0.5) 50%,
    rgba(136, 86, 134, 0.352) 60%,
    rgba(136, 86, 134, 0.216) 70%,
    rgba(136, 86, 134, 0.104) 80%,
    rgba(136, 86, 134, 0.028) 90%,
    rgba(136, 86, 134, 0)
  );
}

.hero-upper {
  margin-bottom: 5em;
  animation: float 2.5s ease-in-out infinite;
}

.hero-logo {
  margin: 0;
  line-height: 0;
  display: flex;
  justify-content: center;
}

.hero-logo img {
  height: 35vw;
  max-height: 256px;
  width: auto;
  filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3));
  user-select: none;
}

.hero-tagline {
  margin: 1.25rem 0 0;
  font-size: 1.5em;
  font-weight: 700;
  color: #BAA6BA;
  padding: 0 2rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.hero-button {
  --handle: 10px;

  position: relative;
  box-sizing: border-box;
  display: block;
  width: min(192px, calc(100vw - 3rem));
  aspect-ratio: 1;
  margin: 0.5em;
  border: 10px solid #fff;
  border-radius: 1em;
  padding: 0;
  background: #F9A83A;
  color: #fff;
  font-size: 1.25em;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s cubic-bezier(0.25, 3, 0.5, 1);
}

.hero-button :deep(.app-icon) {
  display: block;
  width: 100%;
  height: 100%;
  padding: 1em;
  box-sizing: border-box;
}

.hero-button::before {
  content: "";
  position: absolute;
  inset: calc(var(--handle) / -2 - 10px);
  pointer-events: none;
  opacity: 0;
  background:
    linear-gradient(#222 0 0) top left / var(--handle) var(--handle) no-repeat,
    linear-gradient(#222 0 0) top right / var(--handle) var(--handle) no-repeat,
    linear-gradient(#222 0 0) bottom left / var(--handle) var(--handle)
    no-repeat,
    linear-gradient(#222 0 0) bottom right / var(--handle) var(--handle)
    no-repeat;
  transition: opacity 0.15s;
}

.hero-button:hover::before,
.hero-button:focus-visible::before {
  opacity: 1;
  animation: pulse 0.5s ease-in-out infinite;
}

.hero-button::after {
  content: attr(data-title);
  position: absolute;
  top: calc(100% + 24px);
  left: 50%;
  translate: -50% 4px;
  padding: 0.3em 0.7em;
  border-radius: 0.5em;
  background: #222;
  color: #fff;
  font-size: 0.8em;
  font-weight: 600;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition:
    opacity 0.15s,
    translate 0.2s;
  z-index: 100;
}

.hero-button:hover::after,
.hero-button:focus-visible::after {
  opacity: 1;
  translate: -50% 0;
}

.hero-button:active {
  transform: scale(0.875);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

.scroll-arrow {
  margin-bottom: 1.5rem;
  color: rgba(0, 0, 0, 0.25);
  font-size: 4rem;
  line-height: 1;
  text-decoration: none;
  transition:
    opacity 0.2s,
    scale 0.2s;
}

.scroll-arrow:hover,
.scroll-arrow:focus-visible {
  color: var(--ctp-mocha-text);
  scale: 1.2;
}

@keyframes float {
  50% {
    transform: translateY(calc(var(--float-distance) * -1));
  }
}

@keyframes pulse {
  50% {
    transform: scale(1.06);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-upper,
  .hero-button:hover::before,
  .hero-button:focus-visible::before {
    animation: none;
  }
}
</style>
