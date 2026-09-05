/** Local build only; no browser-side Tailwind compiler. */
export default {
  content: ['./index.html', './App.tsx', './components/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'], grotesk: ['Space Grotesk', 'sans-serif'] },
      colors: {
        zinc: { 850: '#1f1f22', 950: '#09090b' },
        emerald: { 50: '#f7f7f6', 100: '#efefec', 200: '#e4e5e4', 300: '#d8dadc', 400: '#c2c6cb', 500: '#a5a8ad', 600: '#858a91', 700: '#646a72', 800: '#444950', 900: '#272c32', 950: '#171a1d' },
      },
    },
  },
  plugins: [],
};
