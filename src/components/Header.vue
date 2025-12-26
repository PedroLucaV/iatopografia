<script setup>
import { ref } from 'vue'

const links = ['inicio', 'sobre', 'projetos', 'contato']
const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <header class="w-full bg-[#57483d]">
    <div class="flex items-center justify-between h-[100px] px-6 md:px-12">
      <!-- Logo -->
      <img src="/logo.png" alt="logo" class="h-[70%]" />

      <!-- Menu desktop -->
      <ul class="hidden md:flex text-white font-bold uppercase text-lg gap-8">
        <li v-for="link in links" :key="link">
          <a
            :href="`#${link}`"
            class="relative transition hover:text-green-400
                   after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                   after:w-0 after:bg-green-400 after:transition-all
                   hover:after:w-full">
            {{ link }}
          </a>
        </li>
      </ul>

      <!-- Botão hamburguer (mobile) -->
      <button
        @click="toggleMenu"
        class="md:hidden text-white focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Menu mobile -->
    <div
      v-show="menuOpen"
      class="md:hidden bg-[#57483d] border-t border-white/20"
    >
      <ul class="flex flex-col items-center gap-6 py-6 text-white font-bold uppercase">
        <li v-for="link in links" :key="link">
          <a
            @click="menuOpen = false"
            :href="`#${link}`"
            class="transition hover:text-green-400"
          >
            {{ link }}
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
