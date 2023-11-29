import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "gray-200": "#121214",
        "gray-300": "#202024",
        "white-200": "#bbc6ee",
        "darkbackground": "#030c1d",
        "cyan-800": "#091f3c",
        "gray-400": "#54657b",
        "gray-350": "#0a1629",
        "gray-250": "#99a6cc",
        "green-800": "#279081",
        "cyan-200": "#62729e"
      },
      keyframes: {
        teste: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        }
      },
      animation: {
        'waving': 'teste 2s linear infinite'
      }
    },
  },
  plugins: [],
}
export default config
