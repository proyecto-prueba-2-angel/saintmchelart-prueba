<template>
  <div class="cookies-container rounded-lg" v-if="!cookieAccepted">
      <p>ESTE SITIO ES PRIVADO Y SU ACCESO ESTÁ LIMITADO A USUARIOS AUTORIZADOS. <br>
          Esta es tu primera visita, por lo que te informamos que este sitio web utiliza Cookies <br>
          y está destinado a empresas y decoradores. <br>
      </p>

      <div class="flex flex-row space-x-6 text-black mt-2">
          <button @click="acceptCookies" class="p-2 bg-gray-100 rounded-md px-4 py-2">Aceptar</button>
          <button @click="denyCookies" class="p-2 bg-gray-100 rounded-md px-4 py-2">Denegar</button>
      </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Cookies from 'js-cookie';

const cookieAccepted = ref(false);

onMounted(() => {
// Comprobar si la cookie de aceptación está establecida
cookieAccepted.value = Cookies.get('cookie_consent') === 'accepted';
});

const acceptCookies = () => {
// Guardar la cookie de aceptación
Cookies.set('cookie_consent', 'accepted', { expires: 1 }); // 1 día
cookieAccepted.value = true; // Ocultar banner
};

const denyCookies = () => {
// No guardes ninguna cookie al denegar
cookieAccepted.value = true; // Ocultar banner
};
</script>

<style scoped>
.cookies-container {
  position: fixed;
  margin: auto;
  width: 400px;
  background: #000000;
  color: #fff;
  padding: 20px;
  padding-bottom: 40px;
  z-index: 9999;
  bottom: 40%; /* Asegúrate de que esto esté en píxeles */
  box-shadow: 2px 6px 9px 1px #000;
  opacity: 0.9;
  
}
</style>
