<script setup>
import field from '../assets/field-soccer.jpg'
import Teams from './Teams.vue';

</script>
<template>
    <div class="flex w-full h-full mt-10">
        <img :src="field" alt="" class="fixed top-0 left-0 z-0 w-full h-full">
        <Teams />
    </div>
</template>
