/*
 * ============================================================
 *  HERO — dobra principal (estilo Conceito Prime)
 * ------------------------------------------------------------
 *  Centralizado, fundo escuro com brilho vermelho + foto sutil,
 *  headline gigante (Montserrat black) com palavra sublinhada,
 *  pill badge, dois botões e linha de prova social com pontos.
 * ============================================================
 */
import { motion } from 'framer-motion'
import { Zap, Wrench, ChevronDown } from 'lucide-react'
import CtaButton from '../ui/CtaButton'
import { BUSINESS } from '../../data/business'

const TRUST = [
  `${BUSINESS.yearsExperience} anos de experiência`,
  `+${BUSINESS.clientsPerMonth} clientes/mês`,
  'Equipe treinada',
]

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink"
    >
      {/* ---------- Fundo: brilho vermelho + textura (sem foto) ---------- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-graphite via-ink to-ink" />
        {/* Brilho vermelho central pulsante */}
        <div className="absolute inset-0 bg-hero-glow animate-glow-pulse" />
        {/* Halos vermelhos laterais */}
        <div className="absolute -left-32 top-1/4 h-[30rem] w-[30rem] rounded-full bg-brand/15 blur-[130px]" />
        <div className="absolute -right-32 bottom-1/4 h-[30rem] w-[30rem] rounded-full bg-brand/10 blur-[130px]" />
        {/* Grade técnica */}
        <div className="absolute inset-0 bg-grid-dark bg-[size:54px_54px] opacity-40" />
        {/* Vinheta inferior */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      {/* ---------- Conteúdo ---------- */}
      <div className="container-lp relative z-10 py-28 text-center md:py-32">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="mx-auto flex max-w-4xl flex-col items-center"
        >
          {/* Pill badge */}
          <motion.span
            variants={fadeUp}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm"
          >
            <Zap className="h-4 w-4 text-accent" />
            {BUSINESS.yearsExperience} anos em {BUSINESS.city}/{BUSINESS.state}
          </motion.span>

          {/* Headline — texto metálico + palavra em destaque itálica */}
          <motion.h1 variants={fadeUp} className="hero-title text-metal text-shadow-hero">
            Seu carro merece o{' '}
            <span className="hl-underline whitespace-nowrap">melhor serviço</span>{' '}
            de Cabo de Santo Agostinho.
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg text-white/70 sm:text-xl">
            <strong className="font-semibold text-white">{BUSINESS.yearsExperience} anos</strong>{' '}
            especializados em motor, cabeçote, câmbio automático e suspensão.
            Qualidade no serviço e na peça — e gente séria que entrega o que promete.
          </motion.p>

          {/* Botões */}
          <motion.div
            variants={fadeUp}
            className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
          >
            <CtaButton label="Solicitar Orçamento" size="lg" className="w-full sm:w-auto" />
            <a href="#servicos" className="btn-ghost px-7 py-4 text-base sm:text-lg">
              Ver nossos serviços
            </a>
          </motion.div>

          {/* Prova social — pontos vermelhos */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3"
          >
            {TRUST.map((t) => (
              <span key={t} className="flex items-center gap-2 text-sm font-medium text-white/75">
                <span className="h-2 w-2 rounded-full bg-brand" />
                {t}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Ícone decorativo girando */}
      <motion.div
        className="pointer-events-none absolute -right-16 bottom-10 z-[1] hidden text-brand/10 lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
      >
        <Wrench className="h-72 w-72" strokeWidth={0.8} />
      </motion.div>

      {/* Indicador de rolagem */}
      <motion.a
        href="#servicos"
        aria-label="Ver serviços"
        className="absolute bottom-5 left-1/2 z-[2] -translate-x-1/2 text-white/40"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <ChevronDown className="h-7 w-7" />
      </motion.a>
    </section>
  )
}
