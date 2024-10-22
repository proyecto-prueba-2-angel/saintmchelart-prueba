<template>
  <div class="bg-[rgb(255,252,245)] flex flex-col justify-center items-center">
    <Header class="relative my-2 p-2 mb-14" />
    <Cookies class="shadow-md" />

    <!-- Slider con flechas dentro de la imagen -->
    <div class="relative max-w-[1078px] overflow-hidden z-10 sm:z-20"> <!-- El z-index varía según el tamaño de la pantalla -->
      <div
          class="flex transition-transform duration-1000 ease-in-out gap-[20%]"
          :style="{ transform: `translateX(-${currentImage * (100 + gap)}%)` }"
        >

        <img
          v-for="(image, index) in sliderImages"
          :key="index"
          :src="image"
          alt="Imagen del slider"
          class="w-full h-auto flex-shrink-0  shadow-2xl"
        />

        </div>

        <!-- Flecha izquierda -->
        <button
          @click="prevImage"
          class="absolute left-0 top-1/2 transform -translate-y-1/2 ml-4 sm:ml-8 bg-opacity-50 text-4xl font-bold text-black hover:text-white transition duration-300 p-2 z-20"
        >
          &#10094;
        </button>

        <!-- Flecha derecha -->
        <button
          @click="nextImage"
          class="absolute right-0 top-1/2 transform -translate-y-1/2 mr-4 sm:mr-8 bg-opacity-50 text-4xl font-bold text-black hover:text-white transition duration-300 p-2 z-20"
        >
          &#10095;
        </button>
      </div>


  <!-- Galería de imágenes -->
<div class="flex lg:flex-row flex-col gap-5 my-6 mx-auto max-w-[1078px]">
  <div class="block lg:w-1/3 w-full mx-auto h-auto cursor-pointer" @click="openModal(0)">
    <img class=" shadow-2xl w-full h-80 object-cover" src="/C1.jpg" alt="Imagen C1" />
    <div class="space-y-1 p-4 text-sm">
      <div class="w-full lg:w-4/5 mx-auto my-8">
        <p><b>Reference: </b>Abstracto Caja -30</p>
        <p><b>Size: </b>120X120</p>
        <a href="" class="font-semibold hover:underline underline-offset-4 decoration-double decoration-black text-blue-600 text-lg">Price</a>
        <p><b>Technique: </b>Mixto</p>
      </div>
      <p class="mt-4 border-black border-2 rounded-lg p-4 text-xs">En este cuadro abstracto, trazos enérgicos y expresivos se entrelazan con símbolos misteriosos.</p>
    </div>
  </div>

  <div class="block lg:w-1/3 w-full mx-auto h-auto cursor-pointer" @click="openModal(1)">
    <img class="w-full h-80 object-cover shadow-2xl" src="/2.png" alt="Imagen 2" />
    <div class="space-y-1 p-4 text-sm">
      <div class="w-full lg:w-4/5 mx-auto my-10">
        <p><b>Reference: </b>Abstracto Caja -31</p>
        <p><b>Size: </b>120X100</p>
        <a href="" class="font-semibold hover:underline underline-offset-4 decoration-double decoration-black text-blue-600 text-lg">Price</a>
        <p><b>Technique: </b>Mixta</p>
      </div>
      <p class="mt-4 border-black border-2 rounded-lg p-4 text-xs">Incisiones meticulosas en la materia viva, danzan con un ritmo lineal cautivador.</p>
    </div>
  </div>

  <div class="block lg:w-1/3 w-full mx-auto h-auto cursor-pointer" @click="openModal(2)">
    <img class="w-full h-80 object-cover shadow-2xl" src="/20L.jpg" alt="Imagen 20L" />
    <div class="space-y-1 p-4 text-sm">
      <div class="w-full lg:w-4/5 mx-auto my-10">
        <p><b>Reference: </b>Figurativo Caja -33</p>
        <p><b>Size: </b>120X100</p>
        <a href="" class="font-semibold hover:underline underline-offset-4 decoration-double decoration-black text-blue-600 text-lg">Price</a>
        <p><b>Technique: </b>Mixto</p>
      </div>
      <p class="mt-4 border-black border-2 rounded-lg p-4 text-xs">Captura la esencia de la tranquilidad costera en un instante fresco y sereno.</p>
    </div>
  </div>
</div>

<!-- Modal -->
<transition name="modal">
  <div v-if="isModalOpen" class="animate-fade-down animate-duration-[400ms] fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white rounded-lg shadow-lg overflow-hidden w-11/12 md:w-3/4 lg:w-1/2">
      <div class="flex justify-between items-center p-4 border-b">
        <h2 class="text-xl font-bold">{{ currentImageIndex.title }}</h2>
        <button @click="closeModal" class="text-gray-500 hover:text-gray-900 text-6xl">&times;</button>
      </div>
      <div class="p-4 flex justify-center">
        <img 
          :src="currentImageIndex.src" 
          :alt="currentImageIndex.title" 
          class="w-auto h-auto max-h-[75vh] object-contain" 
        />
      </div>
    </div>
  </div>
</transition>


    <div class="mt-52 bg-gray-900 text-white mb-12 p-2 rounded-md">
      
      <button v-if="!mostrarFormulario" @click="toggleFormulario">
        VER MÁS CUADROS...
      </button>

      <div v-if="mostrarFormulario" class="block space-x-1">
        <input type="password" placeholder="Contraseña" class="text-black" />
        <button class="bg-gray-100 text-black border-black border-2 px-2">Ingresar</button>
        <button class="bg-red-500 text-white border-red-500 border-2 px-2" @click="toggleFormulario">Cancelar</button>
      </div>
    </div>
 
  </div>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isModalOpen = ref(false);
const currentImageIndex = ref({});
const images = [
  { src: '/C1.jpg', title: 'Abstracto Caja -30' },
  { src: '/2.png', title: 'Abstracto Caja -31' },
  { src: '/20L.jpg', title: 'Figurativo Caja -33' }
];

// Imágenes del slider
const sliderImages = [
  '/A.png', // Imágenes del slider
  '/B.png'
];

const openModal = (index) => {
  currentImageIndex.value = images[index]; // Asignar el objeto de imagen correspondiente
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const mostrarFormulario = ref(false);
const toggleFormulario = () => {
  mostrarFormulario.value = !mostrarFormulario.value;
};

const currentImage = ref(0);
const gap = 20; // Aumentar el espacio en porcentaje entre las imágenes
let autoSlideInterval = null;

// Duplicar el array para simular un slider infinito
const visibleImages = [...Array(2).fill(sliderImages).flat()]; // Usa el array de imágenes del slider

// Función para avanzar a la siguiente imagen
const nextImage = () => {
  stopAutoSlide(); // Detener el auto slide al hacer clic
  currentImage.value = (currentImage.value + 1) % visibleImages.length;
};

// Función para retroceder a la imagen anterior
const prevImage = () => {
  stopAutoSlide(); // Detener el auto slide al hacer clic
  currentImage.value = (currentImage.value - 1 + visibleImages.length) % visibleImages.length;
};

// Detener el movimiento automático cuando el usuario interactúa
const stopAutoSlide = () => {
  clearInterval(autoSlideInterval);
};

// Limpiar el intervalo cuando el componente se desmonta
onBeforeUnmount(() => {
  stopAutoSlide();
});
</script>

<!-- <style scoped>
.fondo {
  background-color: rgb(255, 252, 245);
}

.slider1 {
  max-width: 1078px;
  position: relative;
}

.slider-track {
  display: flex;
  transition: transform 1s ease-in-out;
  gap: 20%; /* Aumenta el espacio entre las imágenes */
}

img {
  transition: opacity 1s ease-in-out;
}

.galeria1 {
  max-width: 1078px;
}

.img-container {
  display: flex;
  flex-direction: column; /* Para que el texto aparezca debajo de la imagen */
  align-items: center; /* Centra la imagen y el texto */
  max-width: 100%; /* Asegura que el contenedor no se alargue demasiado */
}

.caracteristicas {
  margin-top: 10px; /* Añade un pequeño espacio entre la imagen y el texto */
  width: 100%; /* Asegúrate de que el texto ocupe todo el ancho */
  text-align: center; /* Alinea el texto al centro si es necesario */
}

@media (min-width: 1024px) { /* Para pantallas más grandes */
  .img-container {
    width: 30%; /* Ajusta el ancho de las imágenes en pantallas grandes */
  }
}

.modal-image {
  max-width: 50%;
  height: auto;
}
</style> -->
