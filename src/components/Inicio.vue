<script setup>
import { useWhatsapp } from '@/composable/useWhatsapp'
const { getLink } = useWhatsapp()
</script>
<template>
    <section id="inicio" class="w-full py-24 flex items-center">
        <article
            class="max-w-7xl mx-auto w-full px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-[5rem] md:gap-[12rem]">
            <div class="flex justify-center">
                <img src="/logo.png" alt="IA Topografia" class="w-52 sm:w-64 md:w-80 drop-shadow-2xl" />
            </div>
            <div class="space-y-6 text-center md:text-left">
                <h1 class="text-4xl md:text-5xl font-extrabold tracking-wide text-[#57483d]">
                    IA Topografia
                </h1>
                <h2 class="text-xl md:text-2xl font-bold text-[#57483d]">
                    Topografia e Agrimensura de Precisão
                </h2>
                <p class="text-[#57483d] max-w-xl mx-auto md:mx-0">
                    Especialista em levantamentos topográficos, georreferenciamento e soluções técnicas com precisão,
                    agilidade e confiança.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                    <a :href="getLink()" target="_blank"
                        class="bg-green-500 hover:bg-green-600 text-[#eee3db] font-bold px-6 py-3 rounded [10px] transition shadow-lg shadow-green-500/30 text-center">
                        Solicitar Orçamento
                    </a>
                    <a href="#servicos"
                        class="border border-gray-500 hover:border-gray-400 bg-[#57483d] hover:bg-[#332921] text-[#eee3db] font-semibold px-6 py-3 rounded-[10px] transition shadow-lg shadow-[#332921]/30 text-center">
                        Ver Serviços
                    </a>
                </div>
            </div>
        </article>
    </section>
</template>
