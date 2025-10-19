 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {
      backgroundImage: {
        'banner-image': "url('/images/banner.png')", 
      },
     },
   },
   plugins: [],
 }