<template>
  <div class="parallax">
    <!-- A title that can be text or html balise -->
    <h2 class="object parallax-text md:text-9xl text-4xl" data-value="3">
      <slot name="title"></slot>
    </h2>

    <!-- image(s) with a data-value that can be negative or positive -->
    <slot name="images"></slot>
  </div>
</template>