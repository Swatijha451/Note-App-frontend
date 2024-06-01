/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //colors used in the project 
      colors:{
        primary:"#3377ff",
        secondary:"#ff863e",
        newColor:"#3377ff",
        white2:"ffffff",
        newColor2:""
      },
    },
  },
  plugins: [],
}

