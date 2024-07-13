import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        'palette-blue': '#002fff',
        'palette-beige': '#f5f5dc',
        'palette-green': '#00ff40',
        'palette-pink': '#ff9bb9',
        'palette-red': '#ff0700',
        'palette-purple': '#8f00ff',
      },
    },
  },
  plugins: []
};
export default config;
