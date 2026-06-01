/*
 * ============================================================
 *  CTA FINAL — escuro com brilho vermelho (estilo referência)
 * ------------------------------------------------------------
 *  Chamada de fechamento, botão verde de WhatsApp + telefone.
 * ============================================================
 */
import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import CtaButton from '../ui/CtaButton'
import { BUSINESS } from '../../data/business'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      {/* Brilho vermelho */}
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
      <div className="absolute inset-0 bg-grid-dark bg-[size:48px_48px] opacity-20" />

      <div className="container-lp relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <span className="kicker mb-6 justify-center">Atendimento rápido</span>
          <h2 className="hero-title text-shadow-hero text-metal">
            Bora resolver o seu carro <span className="hl-underline">hoje?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
            Manda uma mensagem agora. Em poucos minutos a gente entende o problema
            e te passa um orçamento sem compromisso.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CtaButton label="Falar no WhatsApp" variant="green" size="lg" />
            <span className="flex items-center gap-2 text-white/70">
              <Phone className="h-4 w-4 text-brand" />
              ou ligue <strong className="font-semibold text-white">{BUSINESS.phoneDisplay}</strong>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
