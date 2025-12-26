<script setup>
import haelison from '@/assets/haelison.png'
</script>

<template>
    <section id="sobre" class="w-full bg-[#f7f7f7] py-24 px-6">
        <div
            class="max-w-7xl mx-auto w-full px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-[5rem] md:gap-[12rem]">
            <div class="flex flex-col gap-6">
                <span class="text-sm uppercase tracking-widest text-gray-500">
                    Sobre
                </span>

                <h2 class="text-4xl font-semibold text-[#2f2f2f] leading-tight">
                    Haelison Vasconcelos
                </h2>

                <p class="text-lg text-gray-600 leading-relaxed">
                    Topógrafo com atuação em levantamentos topográficos, georreferenciamento
                    e regularização fundiária. Trabalha com foco em precisão técnica,
                    responsabilidade legal e entrega de resultados confiáveis para obras,
                    imóveis rurais e urbanos.
                </p>

                <div class="border-l-4 border-[#57483d] pl-4">
                    <p class="text-md font-medium text-gray-800">
                        CRT nº 0000000000
                    </p>
                </div>
            </div>

            <div class="relative">
                <div class="absolute -inset-4 bg-[#57483d]/10 rounded-xl"></div>

                <img :src="haelison" alt="Haelison Silva - Topógrafo"
                    class="relative w-full max-w-[420px] rounded-xl object-cover shadow-xl" />
            </div>
        </div>
    </section>
</template>
