import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        "red-1": '#981829',
        "red-2": '#B9002D',
        "primary": '#C00A35',
        "secondary": '#F0B67F',
        "text-dark": '#120A0B',
        "text-light": '#FFFFFF',
        "bg-beige": '#EEE7E5',
        "bg-light": '#FEFEFE',
        "support-white": '#FFFFFF',
        "support-grey": '#CCCCCC',
        "support-grey-dark": "#393738"
      },
      fontFamily: {
        sans: ['"Bebas Neue"', 'sans-serif'],
        display: ['"Montserrat"', 'sans-serif'],
      },
      keyframes: {
        underlineScroll: {
          '0%': { 'background-position': '0% 100%' },
          '100%': { 'background-position': '100% 100%' },
        },
      },
      animation: {
        underlineScroll: 'underlineScroll 0.2s linear forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;

