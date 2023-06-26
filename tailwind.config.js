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
        inter: ['var(--font-inter)']
      },
      backgroundImage: {
        'grain': "url('/public/grain.svg')"
      },
      colors: {
        primary: '#0D031B',
        background: '#08001F'
      },
    },
  },
  plugins: [],
}
