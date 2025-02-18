import { heroui } from '@heroui/theme'
import type { Config } from "tailwindcss"
import { withUt } from "uploadthing/tw"

export default withUt({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(avatar|button|card|drawer|form|input|select|skeleton|toggle|user|ripple|spinner|modal|listbox|divider|popover|scroll-shadow).js"
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        center: true
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
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
            background: "#ffffff",
            foreground: "#2a2b31",
            primary: '#F6CC44',
            secondary: '#42A6FF',
            success: '#89E047',
            warning: '#FFBB3D',
            danger: '#FF518B',
          }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            background: "#2a2b31",
            foreground: "#ffffff",
            primary: '#F6CC44',
            secondary: '#42A6FF',
            success: '#89E047',
            warning: '#FFBB3D',
            danger: '#FF518B',
          }, // dark theme colors
        },
        // ... custom themes
      },
    }),
  ],
}) satisfies Config 
