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
            <div class="flex flex-col items-center md:items-start gap-6 text-center md:text-left">
                <img src="/logo.png" alt="Logo" class="w-40 md:w-48" />
                <div class="flex gap-4 justify-center md:justify-start">
                    <a href="https://www.instagram.com/iatopografia/" class="transition-transform hover:scale-110">
                        <img :src="instaIcon" class="w-8 h-8 md:w-10 md:h-10" alt="Instagram">
                    </a>
                    <a :href="getLink()" class="transition-transform hover:scale-110">
                        <img :src="whatsappIcon" class="w-8 h-8 md:w-10 md:h-10" alt="Whatsapp">
                    </a>
                </div>
            </div>

            <div class="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
                <h4 class="text-lg font-bold mb-2">Navegação</h4>
                <ul class="flex flex-col gap-2">
                    <li v-for="link in links" :key="link.link">
                        <a :href="`#${link.link}`" class="text-gray-300 hover:text-green-400 transition-colors">
                            {{ link.nome }}
                        </a>
                    </li>
                </ul>
            </div>

            <div class="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
                <h4 class="text-lg font-bold mb-2">Contato</h4>
                <p class="text-gray-300 text-sm">Telefone: (82) 99127-5633</p>
                <p class="text-gray-300 text-sm">Email: contato@email.com</p>
            </div>
        </div>

        <div class="mt-12 text-center text-gray-500 text-sm">
            &copy; 2025. Todos os direitos reservados por IA Topografia.
        </div>
    </footer>
</template>
