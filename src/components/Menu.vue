<script setup>
import { HomeIcon } from '@heroicons/vue/24/solid'
</script>
<template>
  <nav class="fixed bottom-0 w-full h-20 border-t-2 border-gray-800 md:top-0 md:border-0 md:shadow-lg ">
    <div class="m-auto max-w-7xl">
      <a href=""><HomeIcon class="w-5 dark:fill-gray-100 fill-gray-700" /></a>
      <a href="">teams</a>
      <a href="">players</a>
      <ToggleTheme />
    </div>
  </nav>
</template>
