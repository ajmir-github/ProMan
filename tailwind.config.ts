import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "corporate",
      "synthwave",
      "wireframe",
      "business",
      "night",
    ],
  },
};
export default config;
