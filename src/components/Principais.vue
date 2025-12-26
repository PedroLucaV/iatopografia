<script setup>
import levantamento from '@/assets/galeria/Levantamento.png'
import topografia from '@/assets/galeria/Topografia.png'
import Planialtimetrico from '@/assets/galeria/Planialtimetrico.png'
const servicos = [
    {
        titulo: 'Topografia',
        foto: topografia,
        descricao: 'Topografia é uma ciência que estuda todas as características presentes na superfície de um território, como o relevo e seus acidentes geográficos naturais ou artificiais desta localidade.'
    },
    {
        titulo: 'Levantamento Topográfico',
        foto: levantamento,
        descricao: 'Compreende os diferentes métodos, instrumentos de medição e o conjunto de operações necessárias para a ostensão das posições de pontos topográficos, dos elementos geométricos.'
    },
    {
        titulo: 'Levantamento Planialtimétrico',
        foto: Planialtimetrico,
        descricao: 'É a junção da palavra plani + altimetria. Plani - Mapa que representa toda superfície terrestre em um plano retangular. Altimetria - é a operação que mede as altitudes de pontos em um terreno.'
    }
]
</script>
<template>
    <section id="servicos" class="w-full py-24 px-6 bg-[#f7f7f7]">
        <div class="max-w-7xl mx-auto flex flex-col gap-12">
            <div class="text-center">
                <h2 class="text-4xl font-bold text-[#2f2f2f]">Principais Serviços</h2>
                <p class="text-gray-600 mt-4 text-lg">
                    Conheça os serviços especializados que oferecemos para garantir precisão e qualidade em todos os
                    projetos.
                </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="(servico, i) in servicos" :key="i"
                    class="flex flex-col p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img :src="servico.foto" class="w-full h-75 object-cover mb-3">
                    <h3 class="text-2xl font-semibold text-[#2f2f2f] mb-4">{{ servico.titulo }}</h3>
                    <p class="text-gray-600 text-base leading-relaxed">{{ servico.descricao }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
