<script setup>
import whatsappIcon from '@/assets/wa-whatsapp-icon.svg'
const phone = '5582999999999'
const message = 'Olá! Gostaria de solicitar um orçamento.'
</script>

<template>
  <a
    :href="`https://wa.me/${phone}?text=${encodeURIComponent(message)}`"
    target="_blank"
    class="fixed bottom-6 right-6 transition hover:scale-105"
  >
    <img :src="whatsappIcon" class="w-full h-[75px]">
  </a>
</template>
