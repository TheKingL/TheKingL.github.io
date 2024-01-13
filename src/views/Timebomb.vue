<script setup lang="ts">

import Parallax from "@/components/Parallax.vue";
import Readme from "@/components/Readme.vue";
import Card from "@/components/Card.vue";
import Projects from "@/components/Projects.vue";
import Galerie from "@/components/Galerie.vue";
</script>

<template>
  <div class="section">
    <Parallax>
      <template #title>TimeBomb</template>
      <template #images>
        <img class="object" data-value="-3" src="../assets/img/Timebomb.png">
      </template>
    </Parallax>
  </div>

  <div class="section">
    <Readme>
      <template #title>Résumé</template>
      <template #titlebar-title>Timebomb.md</template>
      <template #content>
        <p class="text-2xl font-bold">Qu'est-ce que TimeBomb ?</p>
        <p>TimeBomb est un jeu Unity que j'ai réalisé durant la Code Game Jam 2023 avec mon équipe.</p>
        <p>La Code Game Jam est un évènement à l'IUT regroupant plusieurs équipes pour créer un jeu vidéo en 30h seulement.</p>
        <p>Time Bomb est donc un platformer 2D dans lequel 2 joueurs en local s'affrontent.</p>
        <p><strong><u>L'objectif : </u></strong>ne pas avoir la bombe à la fin du chrono. </p>
        <p><strong><u>Fonctionnalités : </u></strong>Un des deux joueurs est choisi aléatoirement pour débuter avec la bombe. Il devra poursuivre son adversaire afin de lui donner la bombe. Le joueur n'ayant pas la bombe doit fuir. Lorsque le chrono est terminé, le joueur qui possède la bombe perd une vie. Une partie est consituée de plusieurs rounds qui durent 30 secondes. Chaque joueur possède 3 vies, le jeu s'arrête quand l'un des deux joueurs n'a plus de vie. </p>
        <p><strong><u>Compétences :</u></strong> Unity, C#, Gestion d'équipe, Git, Github Desktop</p>
      </template>
    </Readme>
  </div>

  <div class="section">
    <Projects>
      <template #title>Un jeu addictif</template>
      <template #projects-row1>
        <Card>
          <template #title>Multijoueur</template>
          <template #content>Grâce à sa gestion locale des joueurs, TimeBomb peut être joué à 2 sur le même clavier.</template>
        </Card>
        <Card>
          <template #title>Évènements</template>
          <template #content>Des évènements peuvent survenir pendant la partie, un objet collectable se trouve au centre de la map.</template>
        </Card>
        <Card>
          <template #title>Temps</template>
          <template #content>Nous abordons le thème Maître du temps sous tous les aspects (chrono, météo, époque)</template>
        </Card>
      </template>
    </Projects>
  </div>

  <div class="section p-12">
    <Galerie>
      <template #title>TimeBomb en images</template>
      <template #images>
        <img src="../assets/img/timebomb/jeu.png" alt="jeu">
        <img src="../assets/img/timebomb/settings.png" alt="settings">
        <img src="../assets/img/timebomb/map.png" alt="map">
        <img src="../assets/img/timebomb/map2.png" alt="map2">
      </template>
    </Galerie>
  </div>
</template>