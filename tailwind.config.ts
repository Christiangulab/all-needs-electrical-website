import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#f97316",
          amber: "#ffb000",
          charcoal: "#171717",
          ink: "#0b0b0d",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(249,115,22,.22), 0 24px 80px rgba(0,0,0,.34)",
        lift: "0 18px 45px rgba(15, 15, 18, .12)",
      },
    },
  },
  plugins: [],
};

export default config;
