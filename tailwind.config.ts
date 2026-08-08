import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#EDE3CC',
        'paper-dark': '#E2D3AC',
        ink: '#24201B',
        'ink-soft': '#4A4238',
        burgundy: '#7A1F2B',
        'burgundy-deep': '#5C1620',
        brass: '#A9803E',
        pastel: '#D98C7B',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-newsreader)', 'serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      keyframes: {
        draw: {
          to: { strokeDashoffset: '0' },
        },
      },
      animation: {
        draw: 'draw 1.8s ease forwards 1.1s',
      },
    },
  },
  plugins: [],
};

export default config;
