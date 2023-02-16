/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      yellow: "#eca922",
      blue: "#5671f5",
      red: "#dd405d",
      radialGradient: {
        100: "hsl(214, 47%, 23%)",
        200: "hsl(237, 49%, 15%)",
      },
      cyan: {
        100: "hsl(189, 59%, 53%)",
        200: "hsl(189, 58%, 57%)",
      },
      darkText: "hsl(229, 25%, 31%)",
      scoreText: "hsl(229, 64%, 46%)",
      headerOutline: "hsl(217, 16%, 45%)",
      scoreBoard: "#FAFAFA",
      white: "#FFF",
      timerColor: "#101a2c",
    },
    fontFamily: {
      barlow: "'Barlow Semi Condensed', sans-serif",
    },

    extend: {
      backgroundImage: {
        "bg-triangle": "url('./src/images/bg-triangle.svg')",
        rock: "linear-gradient(15deg, rgba(221,64,93,1) 0%, rgba(220,46,78,1) 100%)",
      },
      boxShadow: {
        "3xl": "inset 0px 10px 0px 3px #E2E2E2",
        paper:
          "0 8px 0 0 hsl(231deg 94% 42%), inset 0 6px 3px 0 hsl(240deg 1% 63%)",
        scissor:
          "0 6px 0 0 hsl(40deg 94% 40%), inset 0 6px 3px 0 hsl(240deg 1% 63%)",
        rock: "0 6px 0 0 hsl(350deg 94% 32%), inset 0 6px 3px 0 hsl(240deg 1% 63%)",
        win: "inset 0 5px 6px grey, 0 8px transparent, 0 0 0 50px hsl(0deg 0% 100% / 7%), 0 0 0 100px hsl(0deg 0% 100% / 5%), 0 0 0 150px hsl(0deg 0% 100% / 3%)",
      },
    },
  },
  plugins: [],
};
