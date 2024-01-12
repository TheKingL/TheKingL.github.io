<template>
  <div class="reveal space-y-16">
    <h2 class="flex justify-center items-center text-center md:text-6xl text-4xl font-bold uppercase">
      <slot name="title"></slot>
    </h2>
    <div class="flex flex-col justify-center items-center space-y-16">
      <slot name="images"></slot>
    </div>
  </div>
</template>