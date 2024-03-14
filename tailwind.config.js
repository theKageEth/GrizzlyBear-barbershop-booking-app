import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            foreground: "#11181C",
            primary: {
              foreground: "#000000",
              DEFAULT: "##4EF1C0",
            },
            secondary: { DEFAULT: "#DB4EF1", foreground: "#000000" },
            content1: { DEFAULT: "#E8BD17", foreground: "#000000" },
          },
        },
        dark: {
          colors: {
            background: "#000000",
            foreground: "#ECEDEE",
            primary: {
              foreground: "#000000",
              DEFAULT: "#4EF1C0",
            },
            secondary: { DEFAULT: "#DB4EF1", foreground: "#000000" },
          },
        },
      },
    }),
  ],
};
