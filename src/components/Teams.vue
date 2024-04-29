<script setup>
const AwayPositionsList = [
    {
        position: 'GL',
        class: 'col-span-3 col-start-4 row-start-10',
        number: 1,
        color: 'bg-gradient-to-br from-blue-700 to-blue-900 border-blue-950',
        name: 'Maria Joaquina'
    },
    {
        position: 'ZE',
        class: 'col-span-3 col-start-2 row-start-9',
        number: 4,
        color: 'bg-gradient-to-br from-blue-700 to-blue-900 border-blue-950',
        name: 'Maria Joaquina'
    },
    {
        position: 'ZD',
        class: 'col-span-3 col-start-6 row-start-9',
        number: 3,
        color: 'bg-gradient-to-br from-blue-700 to-blue-900 border-blue-950',
        name: 'Maria Joaquina'
    },
    {
        position: 'VOL',
        class: 'col-span-3 col-start-4 row-start-8',
        number: 5,
        color: 'bg-gradient-to-br from-blue-700 to-blue-900 border-blue-950',
        name: 'Maria Joaquina'
    },
    {
        position: 'ME',
        class: 'col-span-3 col-start-1 row-start-7',
        number: 10,
        color: 'bg-gradient-to-br from-blue-700 to-blue-900 border-blue-950',
        name: 'Maria Joaquina'
    },
    {
        position: 'MD',
        class: 'col-span-3 col-start-7 row-start-7',
        number: 11,
        color: 'bg-gradient-to-br from-blue-700 to-blue-900 border-blue-950',
        name: 'Maria Joaquina'
    },
    {
        position: 'ATA',
        class: 'col-span-3 col-start-4 row-start-6',
        number: 9,
        color: 'bg-gradient-to-br from-blue-700 to-blue-900 border-blue-950',
        name: 'Maria Joaquina'
    },
]
const HomePositionsList = [
    {
        position: 'GL',
        class: 'col-span-3 col-start-4 row-start-1',
        color: 'bg-gradient-to-br from-gray-700 to-gray-900 border-gray-950',
        number: 1,
        name: 'João Carlos'
    },
    {
        position: 'ZD',
        class: 'col-span-3 col-start-2 row-start-2',
        color: 'bg-gradient-to-br from-gray-700 to-gray-900 border-gray-950',
        number: 4,
        name: 'João Carlos'
    },
    {
        position: 'ZE',
        class: 'col-span-3 col-start-6 row-start-2',
        color: 'bg-gradient-to-br from-gray-700 to-gray-900 border-gray-950',
        number: 3,
        name: 'João Carlos'
    },
    {
        position: 'VOL',
        class: 'col-span-3 col-start-4 row-start-3',
        color: 'bg-gradient-to-br from-gray-700 to-gray-900 border-gray-950',
        number: 5,
        name: 'João Carlos'
    },
    {
        position: 'MD',
        class: 'col-span-3 col-start-1 row-start-4',
        color: 'bg-gradient-to-br from-gray-700 to-gray-900 border-gray-950',
        number: 10,
        name: 'João Carlos'
    },
    {
        position: 'ME',
        class: 'col-span-3 col-start-7 row-start-4',
        color: 'bg-gradient-to-br from-gray-700 to-gray-900 border-gray-950',
        number: 11,
        name: 'João Carlos'
    },
    {
        position: 'ATA',
        class: 'col-span-3 col-start-4 row-start-5',
        color: 'bg-gradient-to-br from-gray-700 to-gray-900 border-gray-950',
        number: 9,
        name: 'João Carlos'
    },
]
</script>
<template>
    <ul class="grid w-full h-[82vh] grid-cols-9 gap-1 grid-rows-10">
        <li v-for="pos in HomePositionsList" :class="pos.class"
            class="flex flex-col items-center justify-center w-full h-full gap-1 text-gray-100 ">
            <span class="p-1 text-sm rounded-full" :class="pos.color">{{ pos.name }}</span>
            <div class="flex flex-col items-center p-1 border-2 rounded-full w-fit" :class="pos.color">
                <span class="text-xs font-semibold">{{ pos.position }} </span>
                <span>({{ pos.number }})</span>
            </div>
        </li>
        <li v-for="pos in AwayPositionsList" :class="pos.class"
            class="flex flex-col items-center justify-center w-full h-full gap-1 text-gray-100 ">
            <div class="flex flex-col items-center p-1 border-2 rounded-full w-fit" :class="pos.color">
                <span class="text-xs font-semibold">{{ pos.position }} </span>
                <span>({{ pos.number }})</span>
            </div>
            <span class="p-1 text-sm rounded-full" :class="pos.color">{{ pos.name }}</span>
        </li>
    </ul>
</template>
