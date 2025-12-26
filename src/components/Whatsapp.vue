<script setup>
import whatsappIcon from '@/assets/wa-whatsapp-icon.svg'
import { useWhatsapp } from '@/composable/useWhatsapp'
const { getLink } = useWhatsapp()
</script>
<template>
  <a :href="getLink()" target="_blank" class="fixed bottom-6 right-6 transition hover:scale-105">
    <img :src="whatsappIcon" class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[75px] lg:h-[75px]]">
  </a>
</template>
