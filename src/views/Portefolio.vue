<script setup lang="ts">

import Parallax from "@/components/Parallax.vue";
import Readme from "@/components/Readme.vue";
import Projects from "@/components/Projects.vue";
import Card from "@/components/Card.vue";
</script>

<template>
  <div class="section">
    <Parallax>
      <template #title>Portefolio</template>
      <template #images>
        <img src="../assets/img/Portefolio.png" class="object" data-value="-3" alt="portefolio">
      </template>
    </Parallax>
  </div>

  <div class="section">
    <Readme>
      <template #title>Résumé</template>
      <template #titlebar-title>Portefolio.md</template>
      <template #content>
        <p class="text-2xl font-bold">Mon portefolio ?</p>
        <p>Mon portefolio est un projet personnel que j'ai réalisé afin de me présenter et présenter mes projets. Il est développé en Vue.js et est hébergé sur GitHub Pages.</p>
        <p>Il est composé de plusieurs sections :</p>
        <ul>
          <li>- Une section "Informations" qui est un README.md qui me présente.</li>
          <li>- Une section "Projets" qui redirige mes projets.</li>
          <li>- Une section "Réseaux" qui présente mes réseaux sociaux.</li>
        </ul>
        <p><strong><u>Compétences :</u></strong> Vue.js, HTML, CSS, JavaScript, TypeScript, Markdown, GitHub Pages.</p>
      </template>
    </Readme>
  </div>

  <div class="section">
    <Projects>
      <template #title>Un site à mon image</template>
      <template #projects-row1>
        <Card>
          <template #title>Responsive</template>
          <template #content>Adapté à tous les écrans, du smartphone à l'ordinateur.</template>
        </Card>
        <Card>
          <template #title>User friendly</template>
          <template #content>Facile à utiliser et à comprendre. N'hésitez pas à faire un tour dessus !</template>
        </Card>
        <Card>
          <template #title>Design</template>
          <template #content>Une interface moderne et épurée mais surtout simple !</template>
        </Card>
      </template>
    </Projects>
  </div>
</template>