<script setup>
    import { useWhatsapp } from '@/composable/useWhatsapp'
    const { getLink } = useWhatsapp()
</script>

<template>
  <section id="inicio" class="w-full mt-[10rem] flex items-center">
    <article class="max-w-7xl mx-auto w-full px-8 grid grid-cols-1 md:grid-cols-2 items-center">
      <div class="text-indigo space-y-6">
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-wide">
          IA Topografia
        </h1>

        <h2 class="text-xl md:text-2xl font-bold text-[#57483d]">
          Topografia e Agrimensura de Precisão
        </h2>

        <p class="text-[#57483d] max-w-xl">
          Especialista em levantamentos topográficos, georreferenciamento e soluções técnicas com precisão, agilidade e confiança.
        </p>

        <div class="flex gap-4 pt-4">
          <a :href="getLink()" target="_blank" class="bg-green-500 hover:bg-green-600 text-[#eee3db] font-bold px-6 py-3 rounded-[10px] transition shadow-lg shadow-green-500/30">
            Solicitar Orçamento
          </a>

          <a href="#projetos" class="border border-gray-500 hover:border-gray-400 bg-[#57483d] hover:bg-[#332921] text-[#eee3db] font-semibold px-6 py-3 rounded-[10px] transition shadow-lg shadow-[#332921]/30">
            Ver Projetos
          </a>
        </div>
      </div>

      <div class="flex justify-center md:justify-end">
        <img src="/logo.png" alt="IA Topografia" class="w-64 md:w-80 drop-shadow-2xl"/>
      </div>

    </article>
  </section>
</template>
