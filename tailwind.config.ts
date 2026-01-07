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
        // TARGOBANK Brand Colors
        targo: {
          blue: "#003366",
          blueLight: "#0066cc",
          red: "#DC143C",
          gray: "#F5F5F5",
        },
        primary: {
          DEFAULT: "#003366",
          light: "#0066cc",
          dark: "#001f3d",
        },
        secondary: {
          DEFAULT: "#0066cc",
          light: "#3385d6",
          dark: "#004d99",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        handel: ['var(--font-handel-go)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
