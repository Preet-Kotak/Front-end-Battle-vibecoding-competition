import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        // ── Brand palette (all 6 required colours) ──────────────────────────
        'arctic-powder':        '#f1f6f4',  // primary text
        'mystic-mint':          '#d9e8e2',  // secondary/muted text & borders
        'deep-saffron':         '#ff9932',  // primary accent / CTA
        'forsythia':            '#ffc880',  // secondary accent / glow
        'nocturnal-expedition': '#114c5a',  // dark primary / card bg
        'oceanic-noir':         '#172b36',  // darkest background / page surface

        // ── Semantic alias tokens ────────────────────────────────────────────
        surface: {
          DEFAULT: '#172b36',  // oceanic-noir  – page background
          card:    '#114c5a',  // nocturnal-expedition – card backgrounds
          overlay: '#114c5a',  // nocturnal-expedition – nav overlay / modal bg
          border:  '#d9e8e2',  // mystic-mint   – subtle borders (light on dark)
        },
        accent: {
          DEFAULT: '#ff9932',  // deep-saffron  – primary CTA
          glow:    '#ffc880',  // forsythia     – orb / blur effects
          muted:   '#114c5a',  // nocturnal-expedition – subtle bg
        },
        text: {
          primary:   '#f1f6f4',  // arctic-powder – high contrast on dark
          secondary: '#d9e8e2',  // mystic-mint   – secondary text
          muted:     '#d9e8e2',  // mystic-mint   – muted text
        },
      },

      // ── Animation durations ─────────────────────────────────────────────────
      transitionDuration: {
        micro:      '200ms',
        structural: '300ms',
        carousel:   '400ms',
        entry:      '500ms',
      },
      transitionTimingFunction: {
        'ease-out-custom':    'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out-custom': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },

      // ── Named animations ────────────────────────────────────────────────────
      animation: {
        'orb-pulse':  'orb-pulse 6s ease-in-out infinite',
        'fade-up':    'fade-up 500ms ease-out forwards',
        'code-cycle': 'code-cycle 2.4s ease-in-out',
        'reveal':     'reveal 500ms ease-out forwards',
      },
      keyframes: {
        'orb-pulse': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%':      { opacity: '1',   transform: 'scale(1.08)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'reveal': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },

      // ── Background utilities ─────────────────────────────────────────────────
      backgroundImage: {
        // Hero gradient background with Deep Saffron glow
        'hero-radial': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255,153,50,0.3), transparent)',
        // Bento card glow border with Deep Saffron and Forsythia
        'card-glow':   'linear-gradient(135deg, rgba(255,153,50,0.4), rgba(255,200,128,0.1))',
      },
    },
  },
  plugins: [],
} satisfies Config;
