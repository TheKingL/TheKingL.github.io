<template>
  <div class="reveal">
    <h2 class="flex justify-center text-6xl font-bold">
      <slot name="title"></slot>
    </h2>

    <div class="cards">
      <slot name="projects-row1"></slot>
      <slot name="projects-row2"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>