/*
 * CarDrive — carrinho vermelho que percorre a linha dos passos.
 *  - horizontal (desktop): anda da esquerda p/ a direita.
 *  - vertical (mobile): desce pela linha da esquerda.
 * Rodas girando, farol aceso e brilho na base. Só anda quando
 * `run` = true; depois faz loop. Decorativo.
 */
import { motion } from 'framer-motion'

/** Roda com raios que giram (mostra o movimento). */
function Wheel({ cx, run }: { cx: number; run: boolean }) {
  return (
    <motion.g
      style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
      animate={run ? { rotate: 360 } : { rotate: 0 }}
      transition={{ duration: 0.45, repeat: Infinity, ease: 'linear' }}
    >
      <circle cx={cx} cy={22} r="5" fill="#141414" />
      <circle cx={cx} cy={22} r="2.2" fill="#6b6b6b" />
      <rect x={cx - 0.55} y={18} width="1.1" height="8" rx="0.5" fill="#7d7d7d" />
      <rect x={cx - 4} y={21.45} width="8" height="1.1" rx="0.5" fill="#7d7d7d" />
    </motion.g>
  )
}

function CarSvg({ run }: { run: boolean }) {
  return (
    <svg
      width="58"
      height="27"
      viewBox="0 0 66 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_5px_9px_rgba(255,196,0,0.45)]"
    >
      <ellipse cx="64" cy="15.5" rx="7" ry="3.2" fill="#FFFFFF" opacity="0.45" />
      <path d="M16 14 L22 5 H40 L48 14 Z" fill="#FFC400" />
      <path d="M23.5 13 L27 7 H31 V13 Z" fill="#0A0A0A" opacity="0.55" />
      <path d="M33 13 V7 H38.5 L42 13 Z" fill="#0A0A0A" opacity="0.55" />
      <rect x="4" y="12.5" width="56" height="9.5" rx="4.5" fill="#FFC400" />
      <rect x="4" y="18" width="56" height="4" rx="2" fill="#E0A800" />
      <circle cx="58.5" cy="15.5" r="1.6" fill="#FFFFFF" />
      <Wheel cx={18} run={run} />
      <Wheel cx={46} run={run} />
    </svg>
  )
}

interface CarDriveProps {
  run?: boolean
  /** vertical = versão mobile (desce pela linha) */
  vertical?: boolean
}

export default function CarDrive({ run = true, vertical = false }: CarDriveProps) {
  const carTransition = run
    ? {
        duration: 4.6,
        repeat: Infinity,
        ease: 'linear' as const,
        repeatDelay: 0.8,
      }
    : { duration: 0.2 }

  /* ---------------- VERTICAL (mobile) ---------------- */
  if (vertical) {
    return (
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-3 top-0 z-20 -translate-x-1/2 -translate-y-1/2 lg:hidden"
        initial={{ top: '-3%', opacity: 0 }}
        animate={run ? { top: '103%', opacity: 1 } : { top: '-3%', opacity: 0 }}
        transition={run ? { top: carTransition, opacity: { duration: 0.3 } } : carTransition}
      >
        {/* Brilho na base */}
        <span className="absolute left-1/2 top-1/2 h-12 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/40 blur-md" />
        {/* Carro apontando para baixo */}
        <div className="rotate-90">
          <CarSvg run={run} />
        </div>
      </motion.div>
    )
  }

  /* ---------------- HORIZONTAL (desktop) ---------------- */
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute top-2 z-20 hidden -translate-y-[86%] lg:block"
      initial={{ left: '-7%', opacity: 0 }}
      animate={run ? { left: '107%', opacity: 1 } : { left: '-7%', opacity: 0 }}
      transition={run ? { left: carTransition, opacity: { duration: 0.3 } } : carTransition}
    >
      {/* Rastro de velocidade */}
      <span className="absolute right-full top-1/2 mr-1.5 flex -translate-y-1/2 flex-col gap-1">
        <span className="block h-[3px] w-6 rounded-full bg-accent/55" />
        <span className="block h-[3px] w-3.5 rounded-full bg-accent/30" />
        <span className="block h-[3px] w-8 rounded-full bg-accent/45" />
      </span>
      {/* Brilho pulsante na base */}
      <motion.span
        className="absolute -bottom-1 left-1/2 h-3 w-11 -translate-x-1/2 rounded-full bg-accent/55 blur-md"
        animate={{ opacity: [0.4, 0.9, 0.4], scaleX: [0.85, 1.1, 0.85] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Balanço (suspensão) */}
      <motion.div
        animate={{ y: [0, -1.5, 0] }}
        transition={{ duration: 0.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <CarSvg run={run} />
      </motion.div>
    </motion.div>
  )
}
