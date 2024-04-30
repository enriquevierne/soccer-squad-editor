<script setup>
const AwayPositionsList = [
    {
        position: 'GL',
        class: 'col-span-1 col-start-5 row-start-10 md:col-span-1 md:col-start-8 md:row-start-6',
        number: 1,
        color: 'bg-gradient-to-br from-blue-700 to-blue-900 border-blue-950',
        name: 'William'
    },
    {
        position: 'ZE',
        class: 'col-span-1 col-start-3 row-start-9 md:col-span-1 md:col-start-7 md:row-start-7',
        number: 4,
        color: 'bg-gradient-to-br from-blue-700 to-blue-900 border-blue-950',
        name: 'Lucas'
    },
    {
        position: 'ZD',
        class: 'col-span-1 col-start-7 row-start-9 md:col-span-1 md:col-start-7 md:row-start-4',
        number: 3,
        color: 'bg-gradient-to-br from-blue-700 to-blue-900 border-blue-950',
        name: 'Valdemar'
    },
    {
        position: 'VOL',
        class: 'col-span-1 col-start-5 row-start-8 md:col-span-1 md:col-start-7 md:row-start-6',
        number: 5,
        color: 'bg-gradient-to-br from-blue-700 to-blue-900 border-blue-950',
        name: 'Eduardo'
    },
    {
        position: 'ME',
        class: 'col-span-1 col-start-1 row-start-7 md:col-span-1 md:col-start-6 md:row-start-3',
        number: 10,
        color: 'bg-gradient-to-br from-blue-700 to-blue-900 border-blue-950',
        name: 'Macarrão'
    },
    {
        position: 'MD',
        class: 'col-span-1 col-start-9 row-start-7 md:col-span-1 md:col-start-6 md:row-start-9',
        number: 11,
        color: 'bg-gradient-to-br from-blue-700 to-blue-900 border-blue-950',
        name: 'Maicão'
    },
    {
        position: 'ATA',
        class: 'col-span-1 col-start-5 row-start-6 md:col-span-1 md:col-start-6 md:row-start-6',
        number: 9,
        color: 'bg-gradient-to-br from-blue-700 to-blue-900 border-blue-950',
        name: 'Jorge'
    },
]
const HomePositionsList = [
    {
        position: 'GL',
        class: 'col-span-1 col-start-5 row-start-1 md:col-span-1 md:col-start-2 md:row-start-6',
        color: 'bg-gradient-to-br from-gray-700 to-gray-900 border-gray-950',
        number: 1,
        name: 'Murilo'
    },
    {
        position: 'ZC',
        class: 'col-span-1 col-start-5 row-start-2 md:col-span-1 md:col-start-3 md:row-start-6',
        color: 'bg-gradient-to-br from-gray-700 to-gray-900 border-gray-950',
        number: 4,
        name: 'Ivan'
    },
    {
        position: 'ALA',
        class: 'col-span-1 col-start-3 row-start-3 md:col-span-1 md:col-start-3 md:row-start-8',
        color: 'bg-gradient-to-br from-gray-700 to-gray-900 border-gray-950',
        number: 11,
        name: 'Matheus'
    },
    {
        position: 'ALA',
        class: 'col-span-1 col-start-7 row-start-3 md:col-span-1 md:col-start-3 md:row-start-3',
        color: 'bg-gradient-to-br from-gray-700 to-gray-900 border-gray-950',
        number: 3,
        name: 'Digão'
    },
    {
        position: 'ME',
        class: 'col-span-1 col-start-8 row-start-4 md:col-span-1 md:col-start-4 md:row-start-4',
        color: 'bg-gradient-to-br from-gray-700 to-gray-900 border-gray-950',
        number: 5,
        name: 'Zinho'
    },
    {
        position: 'MD',
        class: 'col-span-1 col-start-2 row-start-4 md:col-span-1 md:col-start-4 md:row-start-7',
        color: 'bg-gradient-to-br from-gray-700 to-gray-900 border-gray-950',
        number: 10,
        name: 'Gustavinho'
    },
    {
        position: 'ATA',
        class: 'col-span-1 col-start-5 row-start-5 md:col-span-1 md:col-start-5 md:row-start-6',
        color: 'bg-gradient-to-br from-gray-700 to-gray-900 border-gray-950',
        number: 9,
        name: 'Enrique'
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
            <span class="p-1 text-sm rounded-full" :class="pos.color">{{ pos.name }}</span>
            <div class="flex flex-col items-center p-1 border-2 rounded-full w-fit" :class="pos.color">
                <span class="text-xs font-semibold">{{ pos.position }} </span>
                <span>({{ pos.number }})</span>
            </div>
        </li>
    </ul>
</template>
