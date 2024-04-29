<script setup>
const positionsList = [
    {
        position: 'GL',
        class: 'col-span-3 col-start-4 row-start-2',
        number: 1,
        name: 'João Carlos'
    },
    {
        position: 'ZD',
        class: 'col-span-3 col-start-2 row-start-3',
        number: 4,
        name: 'João Carlos'
    },
    {
        position: 'ZE',
        class: 'col-span-3 col-start-6 row-start-3',
        number: 3,
        name: 'João Carlos'
    },
    {
        position: 'VOL',
        class: 'col-span-3 col-start-4 row-start-4',
        number: 5,
        name: 'João Carlos'
    },
    {
        position: 'MD',
        class: 'col-span-3 col-start-2 row-start-5',
        number: 10,
        name: 'João Carlos'
    },
    {
        position: 'ME',
        class: 'col-span-3 col-start-6 row-start-5',
        number: 11,
        name: 'João Carlos'
    },
    {
        position: 'ATA',
        class: 'col-span-3 col-start-4 row-start-6',
        number: 9,
        name: 'João Carlos'
    },
]
const width = window.innerWidth
const height = window.innerHeight
</script>
<template>
    <ul class="grid w-full h-full grid-cols-9 gap-2 grid-rows-9">
        <li v-for="pos in positionsList" :class="pos.class"
            class="flex flex-col justify-center w-full h-full pl-4 text-gray-100 border-2 rounded-full bg-gradient-to-br from-gray-700 border-gray-950 to-gray-900">
            <span class="text-xs font-semibold">{{ pos.position }} ({{ pos.number }})</span>
            <span class="text-sm">{{ pos.name }}</span>
        </li>
    </ul>
    {{ width }}
    {{ height }}
</template>
