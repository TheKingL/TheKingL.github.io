<template>
  <div class="section">
    <Parallax>
      <template #title>Loris</template>
      <template #images>
        <img src="../assets/img/parallax/1.png" class="object" data-value="-2" alt="planet1">
        <img src="../assets/img/parallax/2.png" class="object" data-value="6" alt="planet2">
        <img src="../assets/img/parallax/3.png" class="object" data-value="4" alt="planet3">
        <img src="../assets/img/parallax/4.png" class="object" data-value="-6" alt="planet4">
        <img src="../assets/img/parallax/5.png" class="object" data-value="8" alt="planet5">
        <img src="../assets/img/parallax/6.png" class="object" data-value="-4" alt="planet6">
        <img src="../assets/img/parallax/7.png" class="object" data-value="5" alt="planet7">
        <img src="../assets/img/parallax/8.png" class="object" data-value="-9" alt="planet8">
        <img src="../assets/img/parallax/9.png" class="object" data-value="-5" alt="planet9">
      </template>
    </Parallax>
  </div>

  <div class="section">
    <Readme>
      <template #title>Informations</template>
      <template #titlebar-title>README.md</template>
      <template #content>
        <p class="text-2xl font-bold">Qui suis-je ?</p>
        <p>Je m'appelle <strong>Loris</strong>, j'ai 20 ans et je suis actuellement en troisième année de BUT Informatique à l'IUT de Montpellier-Sète.</p>
        <p>Pour ce qui est de moi, je suis un grand passionné d'informatique et de sport. Je passe la plupart de mon temps libre à apprendre de nouvelles technologies, faire des projets informatiques, faire du sport et m'instruire intellectuellement. Avoir une grande culture générale est l'un de mes moteurs de vie, cela passe en outre par essayer d'être polyvalent sur l'ensemble des sujets et tout particulièrement la géographie auquel je voue une passion toute particulière. Cette passion sûrement aussi liée au fait que je voyage assez souvent.</p>
        <p>Avoir un sens dans son travail et dans la vie sont pour moi les deux éléments qui sont des piliers pour toute personne, comme dit précédemment, il faut avoir un moteur de vie, quelque chose qui nous anime au quotidien et nous fait nous lever de notre lit sinon notre santé mentale risque d'en pâtir. A cela vient s'ajouter d'autres valeurs comme la loyauté, l'autonomie, la créativité qui sont aussi très importante et indispensables pour chaque être humain.</p>
        <p>A terme, je souhaiterai m'orienter vers un parcours axé sur la base de données et les intelligences artificielles. Je ne sais pas encore dans quelle école aller ni réellement le parcours exact. J'envisage aussi une école d'ingénieur afin d'acquérir un niveau supérieur au BUT.</p>
        <p>Comme vous l'avez pu comprendre je suis quelqu'un de curieux, loyal, autonome, créatif et qui si je suis motivé par ce que je fais alors je me donne à fond.</p>
      </template>
    </Readme>
  </div>

  <div class="section">
    <Projects>
      <template #title>Projets</template>
      <template #projects-row1>
        <Cards href="Votee">
          <template #title>Votee</template>
          <template #content>Une application web de décision collective (ou démocratie participative).</template>
        </Cards>
        <Cards href="Bingo">
          <template #title>Bingo</template>
          <template #content>Un projet personnel en Java sur le jeu du Bingo mais dans Minecraft !</template>
        </Cards>
        <Cards href="TimeBomb">
          <template #title>TimeBomb</template>
          <template #content>La Code Game Jam 2023 et notre jeu multijoueur phare, TimeBomb !</template>
        </Cards>
      </template>
      <template #projects-row2>
        <Cards href="Peach">
          <template #title>Peach</template>
          <template #content>Projet de la Nuit De L'Info 2023 autour de Sida Info Service Association.</template>
        </Cards>
      </template>
    </Projects>
  </div>

  <div class="section">
    <Socials />
  </div>
</template>

<script setup lang="ts">
import Parallax from "@/components/Parallax.vue";
import Readme from "@/components/Readme.vue";
import Projects from "@/components/Projects.vue";
import Cards from "@/components/Cards.vue";
import Socials from "@/components/Socials.vue";
</script>