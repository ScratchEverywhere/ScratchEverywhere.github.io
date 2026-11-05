<template>
  <div class="card-grid"><slot /></div>
</template>

<style scoped>
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  padding: 1em 0;
}

.card-grid > :slotted(*) {
  flex: 1 1 300px;
}
</style>
