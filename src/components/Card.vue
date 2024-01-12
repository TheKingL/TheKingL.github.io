<script setup lang="ts">
  import {useRouter} from "vue-router";

  const router = useRouter();

  const props = defineProps({
    href: String
  });

  const goTo = (href: string) => {
    router.push(href);
  };
</script>

<template>
  <div class="bg-card flex flex-col justify-center items-center space-y-2 p-4 w-full">
    <h3 class="flex justify-center text-2xl font-bold text-white">
      <slot name="title"></slot>
    </h3>
    <p class="text-center">
      <slot name="content"></slot>
    </p>
    <span v-if="props.href"
          class="material-symbols-outlined cursor-pointer text-4xl select-none text-white"
          v-bind:class="props.href"
          @click="goTo(props.href)">
      arrow_circle_right
    </span>
  </div>
</template>