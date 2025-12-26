<script setup>
import nivel1 from '@/assets/galeria/nivelamento-1.png'
import nivel2 from '@/assets/galeria/nivelamento-2.png'
import equip1 from '@/assets/galeria/equipamento-1.png'
import equip2 from '@/assets/galeria/equipamento-2.png'
import lev1 from '@/assets/galeria/levantamento-1.png'
import lev2 from '@/assets/galeria/levantamento-2.png'
const galerias = [
    {
        titulo: 'Nivelamento Topográfico',
        descricao: 'Medições precisas para análise de desníveis e planejamento do terreno.',
        fotos: [
            {
                src: nivel1,
                legenda: 'Execução de nivelamento em área urbana'
            },
            {
                src: nivel2,
                legenda: 'Equipamento aplicado em medição de desnível'
            }
        ]
    },
    {
        titulo: 'Equipamentos',
        descricao: 'Equipamentos de alto nivel tecnólogico',
        fotos: [
            {
                src: equip1,
                legenda: 'GPS RTK'
            },
            {
                src: equip2,
                legenda: 'Estação Topografica'
            }
        ]
    },
    {
        titulo: 'Levantamentos topográficos e locações',
        descricao: 'Implantação e marcação precisa para obras e projetos.',
        fotos: [
            {
                src: lev1,
                legenda: 'Levantamento de Construção'
            },
            {
                src: lev2,
                legenda: 'Locação de pontos para execução de obra'
            }
        ]
    },
]
</script>

<template>
    <section id="projetos" class="w-full mt-24 px-6">
        <div class="max-w-7xl mx-auto flex flex-col gap-24 px-6">
            <div v-for="(grupo, index) in galerias" :key="index" class="flex flex-col gap-10">
                <div class="max-w-2xl">
                    <h3 class="text-3xl font-semibold text-[#2f2f2f]">
                        {{ grupo.titulo }}
                    </h3>
                    <p class="text-gray-600 mt-2 leading-relaxed">
                        {{ grupo.descricao }}
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div v-for="(foto, i) in grupo.fotos" :key="i"
                        class="max-w-[450px] mx-auto group relative rounded-2xl shadow-md bg-white overflow-hidden">
                        <div class="aspect-[5/4] bg-gray-50">
                            <img :src="foto.src" :alt="foto.legenda"
                                class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]" />
                        </div>

                        <div class="absolute inset-0
         bg-gradient-to-t from-black/70 via-black/30 to-transparent
         opacity-100 md:opacity-0 md:group-hover:opacity-100
         transition-opacity duration-300
         flex items-end">
                            <p class="text-white text-base font-semibold p-5">
                                {{ foto.legenda }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>
