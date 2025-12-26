<script setup>
const links = [
    { nome: 'Inicio', link: "inicio" },
    { nome: 'Sobre', link: "sobre" },
    { nome: 'Por que escolher', link: "porque-escolher" },
    { nome: 'Serviços', link: "servicos" }
];
import whatsappIcon from '@/assets/wa-whatsapp-icon.svg'
import instaIcon from '@/assets/insta-logo.svg'
import { useWhatsapp } from '@/composable/useWhatsapp'
const { getLink } = useWhatsapp()
</script>

<template>
    <footer class="w-full bg-gray-900 text-white py-16 px-6">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

            <div class="flex flex-col gap-6">
                <img src="/logo.png" alt="Logo" class=" w-[200px]" />
                <div class="flex gap-4">
                    <a href="https://www.instagram.com/iatopografia/" class="text-gray-300 hover:text-green-400 transition-colors">
                    <img :src="instaIcon" class="w-10 h-10" alt="">
                    </a>
                    <a :href="getLink()" class="text-gray-300 hover:text-green-400 transition-colors">
                    <img :src="whatsappIcon" class="w-10 h-10" alt="">
                    </a>
                </div>
            </div>

            <div class="flex flex-col gap-4">
                <h4 class="text-lg font-bold mb-2">Navegação</h4>
                <ul class="flex flex-col gap-2">
                    <li v-for="link in links" :key="link.link">
                        <a :href="`#${link.link}`" class="text-gray-300 hover:text-green-400 transition-colors">
                            {{ link.nome }}
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Bloco 3: Contato -->
            <div class="flex flex-col gap-4">
                <h4 class="text-lg font-bold mb-2">Contato</h4>
                <p class="text-gray-300 text-sm">Telefone: (82) 99127-5633</p>
                <p class="text-gray-300 text-sm">Email: contato@topografia.com</p>
            </div>

        </div>

        <!-- Linha de copyright -->
        <div class="mt-12 text-center text-gray-500 text-sm">
            &copy; 2025. Todos os direitos reservados por IA Topografia.
        </div>
    </footer>
</template>
