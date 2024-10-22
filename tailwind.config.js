// tailwind.config.js
module.exports = {
  // Define las rutas donde Tailwind buscará las clases que uses
  content: [
    "./pages/**/*.{vue,js,ts,jsx,tsx}", // Todas las páginas
    "./components/**/*.{vue,js,ts,jsx,tsx}", // Todos los componentes
    // Si tienes más carpetas o archivos donde usas Tailwind, añádelos aquí
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    }, // Puedes extender el tema aquí si necesitas personalizaciones
  },
  plugins: [
    require('tailwindcss-animated'), // Añade el plugin de animaciones
  ],
}
