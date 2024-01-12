<template>
  <div class="w-3/4 reveal space-y-20 p-4">
    <h2 class="flex justify-center items-center text-center md:text-6xl text-4xl font-bold uppercase">
      <slot name="title"></slot>
    </h2>

    <div class="window">
      <div class="bg-titlebar text-white flex flex-row items-center p-2 w-full">

        <div class="flex flex-row absolute items-center space-x-1">
          <div class="close"></div>
          <div class="minimize"></div>
          <div class="zoom"></div>
        </div>

        <div class="flex flex-1 justify-center">
          <div class="text-2l font-bold">
            <slot name="titlebar-title"></slot>
          </div>
        </div>
      </div>

      <div class="p-2 space-y-6 text-white">
        <slot name="content"></slot>
      </div>
    </div>

  </div>
</template>