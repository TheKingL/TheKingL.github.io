<template>
  <div class="m-44 reveal space-y-20">
    <h2 class="flex justify-center text-6xl font-bold">
      <slot name="title"></slot>
    </h2>

    <div class="window">
      <div class="bg-titlebar text-white flex flex-row items-center p-2 w-full">

        <div class="flex flex-row items-center space-x-1">
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