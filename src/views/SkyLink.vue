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
        <p class="text-2xl font-bold">Qu'est-ce que SkyLink ?</p>
        <p>
          SkyLink est une application Web que j'ai réalisé (et qui est toujours en cours de développement) durant mon alternance a RTE en troisème année de BUT Informatique.
          Cette application permet aux pilotes et task specialist du STH (Service Travaux Héliportés) de gérer les dossiers de vol et les fichiers de transports de marchandise dangereuse.
        </p>
        <p>
          Le site est développé en HTML, CSS et JavaScript avec le framework python Django et à été un réel défi puisque j'ai été seul sur ce projet du début à la fin.
          J'ai dû mettre en place un serveur d'hébergement et dû développer de manière qualitative et efficace ce site dont je suis très fier.
        </p>
        <p>
          Le site est responsive et s'adapte à tous les écrans.
          Il est utilisable sur ordinateur, tablette et smartphone !
        </p>
        <p><strong><u>Compétences :</u></strong> Python, Django, HTML, CSS, JavaScript, Git, GitHub, Discord, JetBrains, Sqlite, Management, Trello</p>
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