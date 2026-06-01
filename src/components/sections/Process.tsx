/*
 * ============================================================
 *  COMO FUNCIONA — seção CLARA com animação sincronizada
 * ------------------------------------------------------------
 *  Quando entra na tela, o carrinho percorre a linha (horizontal
 *  no desktop, vertical no mobile), ela "pinta" de vermelho e
 *  cada passo surge no momento em que o carro passa por ele.
 * ============================================================
 */
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import CtaButton from '../ui/CtaButton'
import CarDrive from '../ui/CarDrive'

const STEPS = [
  { n: '01', title: 'Chama no WhatsApp', text: 'Conta o que está acontecendo com o seu carro. Atendimento rápido e direto.' },
  { n: '02', title: 'Diagnóstico preciso', text: 'Avaliamos o problema com os equipamentos certos, sem achismo.' },
  { n: '03', title: 'Orçamento transparente', text: 'Você recebe um orçamento claro antes de qualquer serviço.' },
  { n: '04', title: 'Serviço bem feito', text: 'Resolvemos com peça de qualidade e no prazo combinado.' },
]

// Momento (s) em que cada passo surge — calibrado com a passagem do carro
const STEP_DELAY = [0.75, 1.73, 2.71, 3.69]

export default function Process() {
  // Gatilho confiável (funciona mesmo no mobile, onde a seção é alta):
  // dispara assim que ~12% da grade entra na tela.
  const gridRef = useRef<HTMLDivElement>(null)
  const run = useInView(gridRef, { once: true, amount: 0.12 })

  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="container-lp">
        <SectionHeading
          light
          kicker="Como trabalhamos"
          title={
            <>
              Um processo que respeita <span className="hl">você e seu carro</span>.
            </>
          }
          subtitle="Quatro etapas claras, do primeiro contato ao carro pronto pra rodar."
        />

        {/* Dispara a animação quando a área dos passos entra na tela */}
        <div
          ref={gridRef}
          className="relative mt-16 grid grid-cols-1 gap-y-12 pl-10 lg:grid-cols-4 lg:gap-x-8 lg:pl-0"
        >
          {/* ---- Desktop: linha horizontal ---- */}
          <div className="absolute left-0 right-0 top-2 hidden h-px bg-ink-soft/15 lg:block" />
          <motion.div
            className="absolute left-0 right-0 top-2 hidden h-[2px] origin-left bg-brand lg:block"
            initial={{ scaleX: 0 }}
            animate={run ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 4.6, ease: 'linear' }}
          />
          <CarDrive run={run} />

          {/* ---- Mobile: linha vertical ---- */}
          <div className="absolute bottom-2 left-3 top-2 w-px bg-ink-soft/15 lg:hidden" />
          <motion.div
            className="absolute bottom-2 left-3 top-2 w-[2px] origin-top bg-brand lg:hidden"
            initial={{ scaleY: 0 }}
            animate={run ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 4.6, ease: 'linear' }}
          />
          <CarDrive run={run} vertical />

          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              className="relative lg:pt-12"
              initial={{ opacity: 0, y: 24, scale: 0.92 }}
              animate={run ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.92 }}
              transition={{ delay: STEP_DELAY[i], duration: 0.5, type: 'spring', stiffness: 230, damping: 15 }}
            >
              {/* Ponto na linha — desktop (horizontal) */}
              <motion.span
                className="absolute left-0 top-2 hidden h-3 w-3 -translate-y-1/2 rounded-full bg-brand ring-4 ring-paper lg:block"
                initial={{ scale: 0 }}
                animate={run ? { scale: [0, 1.6, 1] } : { scale: 0 }}
                transition={{ delay: STEP_DELAY[i], duration: 0.45 }}
              />
              {/* Ponto na linha — mobile (vertical) */}
              <motion.span
                className="absolute -left-[34px] top-2.5 h-3 w-3 -translate-y-1/2 rounded-full bg-brand ring-4 ring-paper lg:hidden"
                initial={{ scale: 0 }}
                animate={run ? { scale: [0, 1.6, 1] } : { scale: 0 }}
                transition={{ delay: STEP_DELAY[i], duration: 0.45 }}
              />

              {/* Número com "pulinho" ao surgir */}
              <motion.span
                className="inline-block font-display text-3xl font-extrabold text-brand"
                initial={{ scale: 1 }}
                animate={run ? { scale: [1, 1.25, 1] } : { scale: 1 }}
                transition={{ delay: STEP_DELAY[i], duration: 0.4 }}
              >
                {s.n}
              </motion.span>
              <h3 className="mt-3 font-display text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft/65">{s.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <CtaButton label="Começar agora pelo WhatsApp" variant="green" size="lg" />
        </div>
      </div>
    </section>
  )
}
