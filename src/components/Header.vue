<script setup>
const links = ['inicio', 'sobre', 'projetos', 'contato'];
</script>

<template>
    <header class="flex items-center justify-around w-full h-[100px] bg-[#222222]">
        <img src="/logo.png" alt="logo" class="h-full">
        <ul class="flex text-white font-bold uppercase text-lg gap-[30px]">
            <li v-for="link in links" :key="link">
               <a
                 :href="`#${link}`" class="relative transition hover:text-green-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] :w-0 after:bg-green-400 after:transition-all hover:after:w-full">
                {{ link }}
            </a>
            </li>
        </ul>
    </header>
</template>