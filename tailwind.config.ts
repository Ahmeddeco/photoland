import { heroui } from '@heroui/theme'
import type { Config } from "tailwindcss"
import { withUt } from "uploadthing/tw"

export default withUt({
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(button|card|divider|drawer|input|ripple|spinner|modal|form).js"
  ],
  theme: {

    extend: {
      backgroundImage: {
        hero: "url('/images/mainSlider_bg.webp')"
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem'
        },
        center: true
      },
    }
  },
  plugins: [require("tailwindcss-animate"),
  heroui({
    prefix: "heroui", // prefix for themes variables
    addCommonColors: true, // override common colors (e.g. "blue", "green", "pink").
    defaultTheme: "light", // default theme from the themes object
    defaultExtendTheme: "light", // default theme to extend on custom themes
    layout: {}, // common layout tokens (applied to all themes)
    themes: {
      light: {
        layout: {}, // light theme layout tokens
        colors: {
          default: '#D4D4D8', // zinc-300
          foreground: '#27272A', // zinc-800
          background: '#E4E4E7', // zinc-200
          focus: '#F6CC44',
          primary: '#F7B750',
          secondary: '#28B4FF',
          success: '#90E540',
          warning: '#FFC02D',
          danger: '#DB3A2A',
          content4: '#52525B' // zinc-600
        }, // light theme colors
      },
      dark: {
        layout: {

        }, // dark theme layout tokens
        colors: {
          default: '#18181B', // zinc-900
          background: '#27272A', // zinc-800
          foreground: '#E4E4E7', // zinc-200
          focus: '#F7B750',
          primary: '#F6CC44',
          secondary: '#025687',
          success: '#90E540',
          warning: '#FFC02D',
          danger: '#93121A',
          content4: '#A1A1AA' // zinc-400
        }, // dark theme colors
      },
      // ... custom themes
    },
  }),],
}) satisfies Config 
