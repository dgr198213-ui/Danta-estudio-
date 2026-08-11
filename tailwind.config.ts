import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F4EFE6',
        'paper-deep': '#E9E0D4',
        white: '#FFFDF8',
        ink: '#171717',
        'ink-soft': '#4B4B47',
        burgundy: '#651F2A',
        'burgundy-deep': '#4A1620',
        // Acentos heredados de la historia (no del sistema 2.0 base):
        // brass = el latón del sello real; pastel = el lápiz pastel de los retoques.
        // Se usan con moderación, solo donde tienen justificación narrativa.
        brass: '#A9803E',
        pastel: '#D98C7B',
      },
      fontFamily: {
        display: ['Georgia', 'Times New Roman', 'serif'],
        body: ['var(--font-newsreader)', 'serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
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
