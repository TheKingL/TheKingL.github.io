<template>
  <div class="reveal space-y-16 p-4">
    <h2 class="flex justify-center items-center text-center md:text-6xl text-4xl font-bold uppercase">
      <slot name="title"></slot>
    </h2>

    <div class="grid md:grid-cols-3 md:grid-rows-2 gap-8 p-16 w-full grid-cols-1 grid-rows-8">
      <slot name="projects-row1"></slot>
      <slot name="projects-row2"></slot>
    </div>
  </div>
</template>