/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Assurez-vous que ce chemin couvre bien tous les fichiers React
  ],
  theme: {
    extend: {
      screens: {
        "mobile-lg": "425px", // Ajout de la taille d'écran personnalisée
        "mobile-sm": "320px",
      },
      colors: {
        grayDark: {
          1: "09090B#",
          2: "#191919",
          3: "#222222",
          4: "#2a2a2a",
          5: "#313131",
          6: "#3a3a3a",
          7: "#484848",
          8: "#606060",
          9: "#6e6e6e",
          10: "#7b7b7b",
          11: "#b4b4b4",
          12: "#eeeeee",
        },
        "jm-gray": "#6E6E6E",
        "Button-primary": "#201E1E",
        "Button-color1": "#fe7a2d",
      },
      fontFamily: {
        sans: ["Inter var", "ui-sans-serif", "system-ui"],
        mono: ['"PT Mono"', "monospace"], // Ajout d'Inter et de polices de fallback
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)", // Ombre douce
          "0 0px 65px rgba(255, 255,255, 0.2)", // Ombre plus large
        ],
      },
    },
  },
  plugins: [
    daisyui, // Import du plugin DaisyUI correctement
  ],
};
