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
      <template #title>Votee</template>
      <template #images>
        <img class="object" data-value="-3" src="../assets/img/Votee.png" alt="Votee">
      </template>
    </Parallax>
  </div>

  <div class="section">
    <Readme>
      <template #title>Résumé</template>
      <template #titlebar-title>Votee.md</template>
      <template #content>
        <p class="text-2xl font-bold">Qu'est-ce que Votee ?</p>
        <p>Dans le cadre du parcours A (RACDV - Réalisation d'applications conception, développement, validation), j'ai dû réaliser (en groupe) un projet consistant à créer un site web de vote.</p>
        <p>C'est là que Votee est né.</p>
        <p>Votee est un outil de décision collective réalisé en 2e année de BUT Informatique.<br>En outre, c'est un site web permettant de poser des questions à une communauté bien précise et que celle-ci y réponde au travers des réponses appelées "Propositions".</p>
        <p>Finalement, la proposition ayant reçu le plus de vote sera celle adoptée.</p>
        <p><strong><u>Compétences :</u></strong> PHP, HTML, CSS, JavaScript, SQL, Git, GitHub, Scrum, Méthodes Agiles, UML, MVC, POO, Twig, API Rest</p>
      </template>
    </Readme>
  </div>

  <div class="section">
    <Projects>
      <template #title>Un système de vote</template>
      <template #projects-row1>
        <Card>
          <template #title>Créez</template>
          <template #content>Créez un sondage en quelques clics. Avec du choix !</template>
        </Card>
        <Card>
          <template #title>Partagez</template>
          <template #content>Partagez le lien du sondage avec les personnes de votre choix.</template>
        </Card>
        <Card>
          <template #title>Visualisez</template>
          <template #content>Visualisez les résultats en temps réel.</template>
        </Card>
      </template>
    </Projects>
  </div>

  <div class="section">
    <Galerie>
      <template #title>Votee en vidéo</template>
      <template #images>
        <iframe class="rounded-xl shadow-xl" height="500" src="https://www.youtube.com/embed/_VFDDNAjTJQ" allowfullscreen></iframe>
      </template>
    </Galerie>
  </div>
</template>