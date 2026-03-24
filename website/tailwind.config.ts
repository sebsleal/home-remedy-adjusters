import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          950: '#05191a',
          900: '#082326',
          850: '#0c2d31',
          800: '#11383d',
        },
        charcoal: '#171d21',
        'off-white': '#f4f1e8',
        ivory: '#d9d1c1',
        gold: {
          DEFAULT: '#d8b779',
          soft: '#bc9a5f',
          light: '#e2c48a',
        },
        danger: '#DC2626',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.12em',
        heading: '0.06em',
        wide: '0.04em',
      },
      backgroundSize: {
        '300%': '300%',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(216,183,121,0.4)' },
          '50%': { boxShadow: '0 0 0 14px rgba(216,183,121,0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1) translateX(0)' },
          '100%': { transform: 'scale(1.08) translateX(-1%)' },
        },
        wobble: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '20%': { transform: 'rotate(-12deg)' },
          '40%': { transform: 'rotate(12deg)' },
          '60%': { transform: 'rotate(-6deg)' },
          '80%': { transform: 'rotate(6deg)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        gradientShift: 'gradientShift 10s ease infinite',
        float: 'float 5s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2.5s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        marquee: 'marquee 35s linear infinite',
        kenBurns: 'kenBurns 18s ease-in-out infinite alternate',
        wobble: 'wobble 2s ease-in-out infinite',
        fadeInDown: 'fadeInDown 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
}

export default config
