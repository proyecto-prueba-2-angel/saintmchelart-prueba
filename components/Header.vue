<template>
    <div class="header1 mx-auto">
        <header class="hidden lg:block mb-8 z-30">
            <!-- Versión desktop -->
            <div class="inside1 px-4 pb-8 my-2">
                <div class="flex flex-row items-center space-x-2 text-xl">
                    <a>
                        <img src="/DEFLOG.jpg" alt="Logo Grupo Saint Michel Art">
                    </a>
                    <a>
                        <h1 class="hover:border-b hover:border-black">Grupo Saint Michel Art</h1>
                    </a>
                </div>
                <nav class="my-2 flex flex-row justify-between">
                    <ul class="w-2/3 flex flex-row items-center space-x-4 text-md">
                        <li><a href="#" class="text-zinc-700 hover:text-black hover:underline hover:underline-offset-8">Contacto</a></li>
                        <li><a href="#" class="text-zinc-700 hover:text-black hover:border-b hover:border-black">Presentaciones</a></li>
                        <li><a href="#" class="text-zinc-700 hover:text-black hover:border-b hover:border-black">Quienes somos</a></li>
                        <li><a href="#" class="text-zinc-700 hover:text-black hover:border-b hover:border-black">Información y Reseñas</a></li>
                    </ul>
                    <div class=" flex space-x-1">
                        <button class="mx-auto p-2 text-lg rounded-md bg-zinc-500 border-zinc-500 border hover:bg-gray-400 transition duration-300 text-white">Login</button>
                        <button class="mx-auto p-2 text-lg rounded-md bg-zinc-500 border-zinc-500 border hover:bg-gray-400 transition duration-300 text-white">Register</button>

                        <!-- Botón de música -->
                        <button id="music-button" @click="toggleMusic" :class="{'music-on': isMusicPlaying, 'music-off': !isMusicPlaying}" class="p-2 rounded-md transition duration-300 text-black relative inline-block">
                            🔊
                        </button>

                        <!-- Audio -->
                        <audio id="background-music" loop ref="audio">
                            <source src="https://www.saintmichelart.es//MUSICA/SUPER.mp3" type="audio/mpeg">
                            Tu navegador no soporta la etiqueta de audio.
                        </audio>
                    </div>
                </nav>
            </div>
        </header>

        <!-- Header para móvil -->
<header class="header1 lg:hidden mb-8 z-30">
    <div class="inside1 px-4 pb-12 my-2">
        <div class="flex flex-row items-center space-x-2 text-xl">
            <a>
                <img src="/DEFLOG.jpg" alt="Logo Grupo Saint Michel Art" class="h-10 w-10">
            </a>
            <a>
                <h1 class="hover:border-b hover:border-black">Grupo Saint Michel Art</h1>
            </a>
            <button @click="toggleMenu" class="ml-auto p-2 rounded-md border-gray-900 text-black">
                ☰
            </button>
        </div>

        <!-- Transición de despliegue -->
        <transition name="slide">
            <nav v-if="isMenuOpen" class="flex flex-col space-y-4 mt-4 transition-all duration-500 ease-in-out z-40 bg-white p-4 shadow-lg rounded-lg">
                <a href="#" class="text-zinc-700 hover:text-black text-lg">Contacto</a>
                <a href="#" class="text-zinc-700 hover:text-black text-lg">Presentaciones</a>
                <a href="#" class="text-zinc-700 hover:text-black text-lg">Quienes somos</a>
                <a href="#" class="text-zinc-700 hover:text-black text-lg">Información y Reseñas</a>
                
                <!-- Botones Login, Register, y Música en móviles -->
                <div class="flex flex-col space-y-2 mt-4">
                    <button class="w-full p-3 text-lg rounded bg-gray-600 hover:bg-gray-500 transition duration-300 text-white">Login</button>
                    <button class="w-full p-3 text-lg rounded bg-gray-600 hover:bg-gray-500 transition duration-300 text-white">Register</button>

                    <!-- Botón de música en móviles -->
                    <button id="music-button" @click="toggleMusic" :class="{'music-on': isMusicPlaying, 'music-off': !isMusicPlaying}" class="w-10 h-10 flex items-center justify-center rounded-md bg-white border border-black text-black hover:bg-gray-100 transition duration-300">
                        🔊
                    </button>
                </div>
            </nav>
        </transition>
    </div>
</header>

    </div>
</template>

<script setup>
import { ref } from 'vue';

// Referencias para el audio y estado
const audio = ref(null);
const isMusicPlaying = ref(false);
const isMenuOpen = ref(false); // Estado para controlar la visibilidad del menú

const toggleMusic = () => {
    isMusicPlaying.value = !isMusicPlaying.value; // Cambiar el estado de la música
    if (isMusicPlaying.value) {
        audio.value.play();
    } else {
        audio.value.pause();
    }
};

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value; // Cambiar el estado del menú
};
</script>

<style scoped>
.header1 {
    width: 100%;
    max-width: 1078px;
    height: 136px;
    background-color: rgb(255, 255, 255);
    z-index: 50;
}

.music-off {
    position: relative;
    display: inline-block;
}

.music-off::after {
    content: ""; 
    position: absolute; 
    top: 80%; 
    left: 20%;
    width: 100%; 
    height: 1px; 
    background-color: black; 
    transform: rotate(-45deg); 
    transform-origin: left; 
}

.music-on {
    text-decoration: none;
}

/* Transiciones para el menú */
.slide-enter-active, .slide-leave-active {
    transition: all 0.5s ease-in-out;
}

.slide-enter, .slide-leave-to {
    opacity: 0;
    transform: translateY(-100%);
}

.z-40 {
    z-index: 40;
}
</style>
