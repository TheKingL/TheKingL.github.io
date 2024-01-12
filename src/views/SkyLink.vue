<script setup lang="ts">

import Parallax from "@/components/Parallax.vue";
import Readme from "@/components/Readme.vue";
import Projects from "@/components/Projects.vue";
import Card from "@/components/Card.vue";
import Galerie from "@/components/Galerie.vue";
</script>

<template>
  <div class="section">
    <Parallax>
      <template #title>SkyLink</template>
      <template #images>
        <img src="../assets/img/SkyLink.png" class="object" data-value="-3" alt="skylink">
      </template>
    </Parallax>
  </div>

  <div class="section">
    <Readme>
      <template #title>Résumé</template>
      <template #titlebar-title>SkyLink.md</template>
      <template #content>

      </template>
    </Readme>
  </div>

  <div class="section">
    <Projects>
      <template #title>Un site utile</template>
      <template #projects-row1>
        <Card>
          <template #title>Responsive</template>
          <template #content>Adapté à tous les écrans, du smartphone à l'ordinateur.</template>
        </Card>
        <Card>
          <template #title>Pour le STH</template>
          <template #content>Les pilotes et task specialist du STH peuvent l'utiliser !</template>
        </Card>
        <Card>
          <template #title>User Friendly</template>
          <template #content>Une interface adaptée aux pilotes et aux task specialist.</template>
        </Card>
      </template>
    </Projects>
  </div>

  <div class="section p-12">
    <Galerie>
      <template #title>SkyLink en images</template>
      <template #images>
        <img src="../assets/img/skylink/menu.JPG" alt="menu">
        <img src="../assets/img/skylink/ddv.JPG" alt="ddv">
        <img src="../assets/img/skylink/notoc.JPG" alt="notoc">
        <img src="../assets/img/skylink/notoclist.JPG" alt="notoclist">
      </template>
    </Galerie>
  </div>
</template>