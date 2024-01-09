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
  <div class="text-card">
    <h3 class="flex justify-center text-2xl font-bold">
      <slot name="title"></slot>
    </h3>
    <p>
      <slot name="content"></slot>
    </p>
    <button class="btn">
      <span class="material-symbols-outlined"
            v-bind:class="props.href"
            @click="goTo(props.href)">
        arrow_circle_right
      </span>
    </button>
  </div>
</template>