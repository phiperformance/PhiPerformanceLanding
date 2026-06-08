import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#151515",
        "black-deep": "#020202",
        cream: "#FFFCF2",
        gold: "#DDD78D",
        blue: {
          DEFAULT: "#0E34A0",
          muted: "#7C98B3",
        },
      },
      fontFamily: {
        cardo: ["Cardo", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
