/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        soshi: {
          blush: '#FCE4EC',
          blushLight: '#FFF0F5',
          cream: '#FFF8F5',
          creamDark: '#F7EDE7',
          roseGold: '#C58B83',
          roseGoldDark: '#A66E66',
          charcoal: '#292329',
          charcoalLight: '#4F464E',
          charcoalMuted: '#786F77',
          rosePink: '#D66D91',
          rosePinkHover: '#C2577C',
          rosePinkLight: '#FBE8EF',
          gold: '#D4AF37',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(41, 35, 41, 0.05)',
        'card': '0 10px 30px -4px rgba(197, 139, 131, 0.12)',
        'hover': '0 20px 40px -6px rgba(214, 109, 145, 0.16)',
        'luxury': '0 25px 50px -12px rgba(41, 35, 41, 0.15)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
