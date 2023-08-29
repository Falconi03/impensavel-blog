import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8fcb9b",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        writting: {
          "0%": { transform: " translate(0px,0px)" },
          "5%": { transform: "translate(30px,-40px)" },
          "15%": { transform: "translate(0px,0px)" },
          "20%": { transform: "translate(30px,-40px)" },
          "25%": { transform: "translate(0px,0px)" },
          "30%": { transform: "translate(30px,-40px)" },
          "35%": { transform: "translate(0px,0px)" },
          "40%": { transform: "translate(30px,-40px)" },
          "45%": { transform: "translate(0px,0px)" },
          "50%": { transform: "translate(30px,-40px) rotate(180deg)" },
          "60%": { transform: "translate(0px,0px) rotate(180deg)" },
          "65%": { transform: "translate(30px,-40px) rotate(180deg)" },
          "70%": { transform: "translate(0px,0px) rotate(180deg)" },
          "75%": { transform: "translate(30px,-40px) rotate(180deg)" },
          "80%": { transform: "translate(0px,0px) rotate(180deg)" },
          "85%": { transform: "translate(30px,-40px) rotate(180deg)" },
          "90%": { transform: "translate(0px,0px) rotate(180deg)" },
          "95%": { transform: "translate(30px,-40px) rotate(180deg)" },
          "100%": { transform: "translate(0px,0px)  rotate(180deg)" },
        },
        typing: {
          "0%": { width: " 0" },
          "50%": { width: " 100%" },
          "100%": { width: " 0" },
        },
        jelloHorizontal: {
          "0%": { transform: "scale3d(1, 1, 1)" },
          "30%": { transform: "scale3d(1.25, 0.75, 1)" },
          "40%": { transform: "scale3d(0.75, 1.25, 1)" },
          "50%": { transform: "scale3d(1.15, 0.85, 1)" },
          "65%": { transform: "scale3d(0.95, 1.05, 1)" },
          "75%": { transform: "scale3d(1.05, 0.95, 1)" },
          "100%": { transform: "scale3d(1, 1, 1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
