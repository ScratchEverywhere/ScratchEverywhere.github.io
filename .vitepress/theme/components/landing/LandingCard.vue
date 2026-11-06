<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  href?: string;
  accent?: string;
}>();

const tag = computed(() => (props.href ? "a" : "div"));
</script>

<template>
  <component
    :is="tag"
    class="card"
    :class="{ link: href }"
    :href="href"
    :style="accent ? { '--card-accent': accent } : undefined"
  >
    <h3 class="card-title"><slot name="title" /></h3>
    <slot />
  </component>
</template>

<style scoped>
.card {
  position: relative;
  isolation: isolate;
  padding: 2em;
  border-radius: 1em;
  background: var(--ctp-mocha-mantle);
  overflow: hidden;
  overflow-wrap: anywhere;
}

.card-title {
  margin: 0;
  border: none;
  padding: 0;
  font-size: 1.5em;
  font-weight: 700;
  line-height: 1.33;
}

.link {
  color: inherit;
  text-decoration: none;
  transition:
    transform 0.25s cubic-bezier(0.25, 3, 0.5, 1),
    box-shadow 0.25s ease;
}

.link::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background: var(--card-accent, rgba(0, 0, 0, 0.4));
  clip-path: circle(0% at 2.5em 2.5em);
  transition: clip-path 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.link::after {
  content: "↗";
  position: absolute;
  top: 1.1rem;
  right: 1.4rem;
  font-size: 1.5em;
  font-weight: 700;
  line-height: 1;
  opacity: 0;
  translate: -8px 8px;
  transition:
    opacity 0.2s ease,
    translate 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.link:hover,
.link:focus-visible {
  color: #fff;
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.35);
}

.link:hover::before,
.link:focus-visible::before {
  clip-path: circle(160% at 2.5em 2.5em);
}

.link:hover::after,
.link:focus-visible::after {
  opacity: 0.8;
  translate: 0 0;
}

.link:active {
  transform: translateY(-1px) scale(0.98);
}

.link :deep(.app-icon) {
  transition: transform 0.35s cubic-bezier(0.25, 3, 0.5, 1);
}

.link:hover :deep(.app-icon),
.link:focus-visible :deep(.app-icon) {
  transform: scale(1.3) rotate(-8deg);
}

@media (prefers-reduced-motion: reduce) {
  .link,
  .link::after,
  .link :deep(.app-icon) {
    transition: none;
  }

  .link:hover,
  .link:focus-visible,
  .link:active {
    transform: none;
  }

  .link:hover :deep(.app-icon),
  .link:focus-visible :deep(.app-icon) {
    transform: none;
  }

  .link::before {
    clip-path: none;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  .link:hover::before,
  .link:focus-visible::before {
    clip-path: none;
    opacity: 1;
  }
}
</style>
