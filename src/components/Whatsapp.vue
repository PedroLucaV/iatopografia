<script setup>
import whatsappIcon from '@/assets/wa-whatsapp-icon.svg'
import { useWhatsapp } from '@/composable/useWhatsapp'
const { getLink } = useWhatsapp()
</script>

<template>
  <a
    :href="getLink()"
    target="_blank"
    class="fixed bottom-6 right-6 transition hover:scale-105"
  >
    <img :src="whatsappIcon" class="w-full h-[75px]">
  </a>
</template>
