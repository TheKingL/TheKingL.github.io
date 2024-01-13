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
      <template #title>Bingo</template>
      <template #images>
        <img class="object" data-value="-3" src="../assets/img/Bingo.png">
      </template>
    </Parallax>
  </div>

  <div class="section">
    <Readme>
      <template #title>Résumé</template>
      <template #titlebar-title>Bingo.md</template>
      <template #content>
        <p class="text-2xl font-bold">Qu'est-ce que le Bingo ?</p>
        <p>Le bingo est un jeu de société de chance, où les joueurs doivent remplir une grille de nombre, puis gagnent s'ils sont tirés au sort.</p>
        <p>Ici, ce jeu à été remanié en Java afin d'être jouable sur Minecraft !</p>
        <p>En effet, avec un ami nous nous sommes mis en quête de réaliser ce jeu au travers Minecraft en l'adaptant comme il se doit. Le contenu des cases devient des éléments du jeu et le but est de remplir la grille le plus rapidement dans le temps imparti. Lorsque vous remplissez une ligne, une colonne, une diagonale, vous effectuez un BINGO qui rapporte un certain nombre de points.</p>
        <p>Le jeu est entièrement modulable avec des scénarios qui peuvent être modifiés, une grille plus grande, des équipes, etc.</p>
        <p>Finalement, l'équipe ayant le plus de points à la fin du temps remporte la partie !</p>
        <p><strong><u>Compétences :</u></strong> Java, Spigot, Maven, Git, JetBrains, Gestion d'équipe</p>
      </template>
    </Readme>
  </div>

  <div class="section">
    <Projects>
      <template #title>Un jeu simple</template>
      <template #projects-row1>
        <Card>
          <template #title>Modulable</template>
          <template #content>Une gestion des paramètres du jeu au travers une interface.</template>
        </Card>
        <Card>
          <template #title>Facile</template>
          <template #content>Vous avez juste à installer le jeu et lancer votre serveur.</template>
        </Card>
        <Card>
          <template #title>Unique</template>
          <template #content>Une expérience unique dans laquelle vous n'avez rien à gérer.</template>
        </Card>
      </template>
    </Projects>
  </div>

  <div class="section p-12">
    <Galerie>
      <template #title>Bingo en images</template>
      <template #images>
        <img src="../assets/img/bingo/menu.png" alt="menu">
        <img src="../assets/img/bingo/grid.png" alt="grid">
        <img src="../assets/img/bingo/stats.png" alt="stats">
        <img src="../assets/img/bingo/teams.png" alt="teams">
      </template>
    </Galerie>
  </div>
</template>