/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      scsrGradient: "hsl(39, 89%, 49%) to hsl(40, 84%, 53%)",
      paprGradient: "hsl(230, 89%, 62%) to hsl(230, 89%, 65%)",
      rockGradient: "hsl(349, 71%, 52%) to hsl(349, 70%, 56%)",
      lizardGradient: "hsl(261, 73%, 60%) to hsl(261, 72%, 63%)",
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
    },
    fontFamily: {
      barlow: "'Barlow Semi Condensed', sans-serif",
    },

    extend: {
      backgroundImage: {
        "bg-triangle": "url('./src/images/bg-triangle.svg')",
      },
      boxShadow: {
        "3xl": "inset 0px 10px 0px 3px #E2E2E2",
        "4xl":
          "0 8px 0 0 hsl(231deg 94% 42%), inset 0 6px 3px 0 hsl(240deg 1% 63%)",
        "5xl":
          "0 6px 0 0 hsl(40deg 94% 40%), inset 0 6px 3px 0 hsl(240deg 1% 63%)",
        "6xl":
          "0 6px 0 0 hsl(350deg 94% 32%), inset 0 6px 3px 0 hsl(240deg 1% 63%)",
        "7xl": "1px 6px 3px 25px rgba(0,0,0,0.14)",
      },
    },
  },
  plugins: [],
};
