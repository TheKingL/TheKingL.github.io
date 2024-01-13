<template>
  <div class="reveal space-y-16 p-4">
    <h2 class="flex justify-center items-center text-center md:text-6xl text-4xl font-bold uppercase">
      Réseaux
    </h2>

    <div class="flex md:flex-row flex-col justify-center items-center gap-8">
      <div class="flex flex-col items-center justify-center bg-card p-4 m-4 h-full space-y-8">
        <h3 class="text-2xl font-bold uppercase text-center">Rejoignez-moi</h3>
        <div class="flex flex-col items-center justify-center">
          <p>sur mes réseaux sociaux</p>
          <p>pour plus d'informations</p>
          <p>et de projets en cours</p>
          <p>ou à venir...</p>
        </div>
      </div>

      <ul class="socials">
        <li class="li" style="--i:6;--clr:#49d749;"><a href="https://github.com/TheKingL">
          <span class="material-symbols-outlined">hub</span>
          Github</a></li>
        <li class="li" style="--i:5;--clr:#0a66c2;"><a href="https://www.linkedin.com/in/loris-c-8a9661230/">
          <span class="material-symbols-outlined">link</span>
          Linkedin</a></li>
        <li class="li" style="--i:4;--clr:#e5d812;"><a href="mailto:loris.cazaux@gmail.com">
          <span class="material-symbols-outlined">mail</span>
          Mail</a></li>
        <li class="li" style="--i:3;--clr:#FF0000;"><a href="#" download="cv">
          <span class="material-symbols-outlined">download</span>
          CV</a></li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>