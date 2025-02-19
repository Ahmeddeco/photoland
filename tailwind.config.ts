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
          default: '#E4E4E7', // zinc-200
          foreground: '#27272A', // zinc-800
          background: '#F4F4F5', // zinc-100
          focus: '#F6CC44',
          primary: '#F7B750',
          secondary: '#28B4FF',
          success: '#90E540',
          warning: '#FFC02D',
          danger: '#DB3A2A'
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
        }, // dark theme colors
      },
      // ... custom themes
    },
  }),],
}) satisfies Config 
