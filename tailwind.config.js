/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-firstplace)'],
        mono: ['var(--font-sf)'],
        serif: ['var(--font-lowres)'],
      },
      backgroundImage: {
        'grain': "url('/public/grain.svg')"
      },
      colors: {
        primary: '#645F81',
        secondary: '#0D031B'
      },
    },
  },
  plugins: [],
}
