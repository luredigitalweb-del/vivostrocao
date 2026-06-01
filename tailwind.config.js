/** @type {import('tailwindcss').Config} */

/*
 * ============================================================
 *  IDENTIDADE VISUAL CENTRALIZADA — VIVO STROCÃO
 * ------------------------------------------------------------
 *  Paleta automotiva profissional (fallback — Instagram
 *  @vivostrocao inacessível via ferramenta na geração).
 *  Para ajustar a marca depois de conferir o Instagram,
 *  basta editar os HEX abaixo. Tudo no site usa estes tokens.
 * ============================================================
 */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Bases escuras (estilo Conceito Prime)
        ink: '#0A0A0A',       // fundo principal escuro
        graphite: '#101010',  // seção escura alternada
        steel: '#161616',     // cards escuros
        line: '#262626',      // bordas sutis

        // Bases claras (seções de contraste)
        paper: '#F4F4F3',     // fundo de seção clara
        'paper-2': '#FFFFFF', // cards claros
        'ink-soft': '#1A1A1A',// texto escuro em fundo claro

        // Acento da marca (CTA / destaques)
        brand: {
          DEFAULT: '#E10600', // vermelho puro forte
          dark: '#B80500',
          light: '#FF2A1F',
        },

        // Amarelo da logo (detalhes / destaques pontuais)
        accent: {
          DEFAULT: '#FFC400',
          dark: '#E0A800',
          light: '#FFD740',
        },

        // WhatsApp (canal de conversão)
        whats: {
          DEFAULT: '#22C55E',
          dark: '#16A34A',
        },
      },
      fontFamily: {
        // Título display: Montserrat black (robusto, moderno)
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        // Texto corrido (limpo, moderno)
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        cta: '0 10px 30px -8px rgba(225, 6, 0, 0.55)',
        'cta-lg': '0 20px 60px -12px rgba(225, 6, 0, 0.6)',
        whats: '0 10px 30px -8px rgba(34, 197, 94, 0.5)',
        card: '0 12px 40px -12px rgba(0,0,0,0.7)',
        glow: '0 0 0 1px rgba(255,255,255,0.06), 0 24px 60px -20px rgba(0,0,0,0.9)',
      },
      backgroundImage: {
        'grid-dark':
          'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
        'brand-radial':
          'radial-gradient(60% 60% at 50% 0%, rgba(225,6,0,0.18) 0%, transparent 70%)',
        'hero-glow':
          'radial-gradient(80% 50% at 50% 40%, rgba(225,6,0,0.22) 0%, transparent 65%)',
        'shine':
          'linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shine: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'marquee-slow': 'marquee 45s linear infinite',
        float: 'float 6s ease-in-out infinite',
        shine: 'shine 6s linear infinite',
        'glow-pulse': 'glow-pulse 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
