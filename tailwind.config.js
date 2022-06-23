/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    colors: {
      radialGradient: "#1f3756 to #141539",
      white: "#fff",
      softWhite: "hsl(217, 16%, 45%)",
      purple: "#1f3756",
      pink: "#141539",
      scoreText: "hsl(229, 64%, 46%)",
      black: "#000",
      yellow: "#ffc82c",
      gray: "#8492a6",
    },

    extend: {
      backgroundImage: {
        "bg-triangle": "url('./src/images/bg-triangle.svg')",
      },
      boxShadow: {
        "3xl": "inset 0px 10px 0px 3px #E2E2E2",
        paper:
          "0 8px 0 0 hsl(231deg 94% 42%), inset 0 6px 3px 0 hsl(240deg 1% 63%)",
        rock: "0 8px 0 0 hsl(231deg 94% 42%), inset 0 6px 3px 0 hsl(240deg 1% 63%)",
        scsr: "0 8px 0 0 hsl(231deg 94% 42%), inset 0 6px 3px 0 hsl(240deg 1% 63%)",
      },
    },
  },
  plugins: [],
};
