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
      <template #title>Peach</template>
      <template #images>
        <img class="object" data-value="-3" src="../assets/img/Peach.png">
      </template>
    </Parallax>
  </div>

  <div class="section">
    <Readme>
      <template #title>Résumé</template>
      <template #titlebar-title>Peach.md</template>
      <template #content>
        <p class="text-2xl font-bold">Qu'est-ce que Peach ?</p>
        <p>Peach est un jeu en JavaScript que j'ai réalisé durant la Nuit De l'Info avec mon équipe.</p>
        <p>La Nuit De l'Info est un évènement national regroupant plusieurs équipes de plusieurs IUT de France pour répondre à des missions données par des entreprises.</p>
        <p>Elle revient chaque année et cette année le défi principal était de créer une application permettant de s'informer sur le SIDA et les maladies qui en découlent.</p>
        <p>"À travers une approche ludique et dédramatisante de la sexualité, nous aimerions aider les plus jeunes à devenir acteurs de leur santé sexuelle." </p>
        <p>Cependant la NDI n'est pas orientée uniquement sur le défi principal, en effet comme cité précédemment une multitude de défis sont proposés avec des lots à gagner par diverses entreprises.</p>
        <p>Dû à la présence d'entreprises, c'est peut-être même l'occasion de décrocher quelques stages et alternances !</p>
        <p><strong><u>Compétences :</u></strong> JavaScript, HTML, CSS, Git, GitHub, Discord, JetBrains, PostgreSQL, ORACLE</p>
      </template>
    </Readme>
  </div>

  <div class="section">
    <Projects>
      <template #title>Un jeu original</template>
      <template #projects-row1>
        <Card>
          <template #title>Intéressant</template>
          <template #content>Grâce à son côté cartoon il est moins lourd de s'informer sur ces Maladies.</template>
        </Card>
        <Card>
          <template #title>Une Histoire</template>
          <template #content>Un réel récit est présent dans le jeu avec des intéractions entre les joueurs, des dialogues et un cadre.</template>
        </Card>
        <Card>
          <template #title>Gain de temps</template>
          <template #content>La centralisation de multiples liens et son calcul d'estimation de besoin font de Peach un gain de temps.</template>
        </Card>
      </template>
    </Projects>
  </div>

  <div class="section p-12">
    <Galerie>
      <template #title>Peach en images</template>
      <template #images>
        <img src="../assets/img/peach/main.png" alt="main">
        <img src="../assets/img/peach/dialogue.png" alt="dialogue">
        <img src="../assets/img/peach/actions.png" alt="actions">
        <img src="../assets/img/peach/score.png" alt="score">
      </template>
    </Galerie>
  </div>
</template>