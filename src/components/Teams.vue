<script setup>
const AwayPositionsList = [
  {
    position: "GK",
    class: "col-span-1 col-start-5 row-start-10 md:col-span-1 md:col-start-11 md:row-start-3",
    color: "bg-gradient-to-br from-blue-700 to-blue-900 border-blue-950",
    name: "Carlos",
  },
  {
    position: "ZE",
    class: "col-span-1 col-start-3 row-start-9 md:col-span-1 md:col-start-10 md:row-start-4",
    color: "bg-gradient-to-br from-blue-700 to-blue-900 border-blue-950",
    name: "Matheus",
  },
  {
    position: "ZD",
    class: "col-span-1 col-start-7 row-start-9 md:col-span-1 md:col-start-10 md:row-start-2",
    color: "bg-gradient-to-br from-blue-700 to-blue-900 border-blue-950",
    name: "Valdemar",
  },
  {
    position: "ME",
    class: "col-span-1 col-start-1 row-start-7 md:col-span-1 md:col-start-8 md:row-start-2",
    color: "bg-gradient-to-br from-blue-700 to-blue-900 border-blue-950",
    name: "Jorge",
  },
  {
    position: "MD",
    class: "col-span-1 col-start-9 row-start-7 md:col-span-1 md:col-start-8 md:row-start-4",
    color: "bg-gradient-to-br from-blue-700 to-blue-900 border-blue-950",
    name: "Luan",
  },
  {
    position: "ATA",
    class: "col-span-1 col-start-5 row-start-6 md:col-span-1 md:col-start-7 md:row-start-3",
    color: "bg-gradient-to-br from-blue-700 to-blue-900 border-blue-950",
    name: "Enrique",
  },
];
const HomePositionsList = [
  {
    position: "GL",
    class: "col-span-1 col-start-5 row-start-1 md:col-span-1 md:col-start-1 md:row-start-3",
    color: "bg-gradient-to-br from-gray-700 to-gray-900 border-gray-950",
    name: "William",
  },
  {
    position: "ZC",
    class: "col-span-1 col-start-5 row-start-2 md:col-span-1 md:col-start-2 md:row-start-3",
    color: "bg-gradient-to-br from-gray-700 to-gray-900 border-gray-950",
    name: "Ivan",
  },
  {
    position: "ALA",
    class: "col-span-1 col-start-3 row-start-3 md:col-span-1 md:col-start-3 md:row-start-2",
    color: "bg-gradient-to-br from-gray-700 to-gray-900 border-gray-950",
    name: "Lucas",
  },
  {
    position: "ALA",
    class: "col-span-1 col-start-7 row-start-3 md:col-span-1 md:col-start-3 md:row-start-4",
    color: "bg-gradient-to-br from-gray-700 to-gray-900 border-gray-950",
    name: "Digão",
  },
  {
    position: "ME",
    class: "col-span-1 col-start-8 row-start-4 md:col-span-1 md:col-start-4 md:row-start-1",
    color: "bg-gradient-to-br from-gray-700 to-gray-900 border-gray-950",
    name: "William",
  },
  {
    position: "MD",
    class: "col-span-1 col-start-2 row-start-4 md:col-span-1 md:col-start-4 md:row-start-5",
    color: "bg-gradient-to-br from-gray-700 to-gray-900 border-gray-950",
    name: "Macarrão",
  },
  {
    position: "ATA",
    class: "col-span-1 col-start-5 row-start-5 md:col-span-1 md:col-start-5 md:row-start-3",
    color: "bg-gradient-to-br from-gray-700 to-gray-900 border-gray-950",
    name: "Maicão",
  },
];
</script>
<template>
  <ul class="z-50 grid w-full h-[90vh] grid-cols-11 grid-rows-5 gap-4 p-4">
    <li v-for="player in HomePositionsList" :class="player.class, player.color" class="flex flex-col items-center justify-center gap-1 p-2 text-gray-100 rounded-full">
      <span class="">{{ player.name }}</span>
      <span class="">{{ player.position }} </span>
    </li>
    <li v-for="player in AwayPositionsList" :class="player.class, player.color" class="flex flex-col items-center justify-center gap-1 text-gray-100">
      <span class="">{{ player.name }}</span>
      <span class="">{{ player.position }} </span>
    </li>
  </ul>
</template>
