/*
 * ============================================================
 *  SOBRE — história + FOTO REAL da fachada + estatísticas
 * ------------------------------------------------------------
 *  Foto da fachada (public/oficina-fachada.jpg) com selo de
 *  anos, texto à direita e faixa de números reais embaixo.
 * ============================================================
 */
import { motion } from 'framer-motion'
import { CheckCircle2, MapPin } from 'lucide-react'
import Reveal from '../ui/Reveal'
import CtaButton from '../ui/CtaButton'
import { BUSINESS } from '../../data/business'

const HIGHLIGHTS = [
  'Especialistas em motor, cabeçote e câmbio automático',
  'Equipe em treinamento constante',
  'Qualidade no serviço e na peça',
  'Atendimento sem fila',
]

export default function About() {
  return (
    <section id="sobre" className="bg-ink py-20 md:py-28">
      <div className="container-lp">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Foto real da fachada */}
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-line ring-metal shadow-card">
                <img
                  src="/oficina-fachada.jpg"
                  alt={`Fachada da ${BUSINESS.name} — Centro Automotivo em ${BUSINESS.city}/${BUSINESS.state}`}
                  loading="lazy"
                  width={1500}
                  height={1129}
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
              </div>

              {/* Selo de anos */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="absolute -bottom-5 -right-3 rounded-2xl bg-brand px-5 py-3 text-center shadow-cta-lg sm:-right-5"
              >
                <div className="font-display text-3xl font-black leading-none text-white">20+</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-white/85">
                  anos · desde 2005
                </div>
              </motion.div>

              {/* Tag de localização */}
              <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-ink/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                <MapPin className="h-3.5 w-3.5 text-brand" />
                {BUSINESS.city}/{BUSINESS.state}
              </div>
            </div>
          </Reveal>

          {/* Texto (centralizado no mobile, à esquerda no desktop) */}
          <Reveal delay={0.1} className="text-center lg:text-left">
            <span className="kicker mb-5 justify-center lg:justify-start">Sobre nós</span>
            <h2 className="section-title text-metal">
              <span className="hl">Desde 2005</span> cuidando dos carros de Cabo de Santo Agostinho.
            </h2>
            <div className="mt-5 space-y-4 text-white/65">
              <p>
                A {BUSINESS.name} é um <strong className="text-white">centro automotivo</strong> com
                mais de <strong className="text-white">20 anos</strong> de estrada. Nesse tempo, nos
                especializamos em <strong className="text-white">motor</strong>,{' '}
                <strong className="text-white">cabeçote</strong> e na{' '}
                <strong className="text-white">troca de óleo do câmbio automático</strong> —
                serviços que exigem técnica e atenção aos detalhes.
              </p>
              <p>
                Nossa equipe está sempre em treinamento para acompanhar a tecnologia dos
                carros de hoje. O resultado é o que importa pra você: serviço bem feito,
                peça de qualidade e gente séria, que cumpre o que promete.
              </p>
            </div>

            <ul className="mt-6 grid gap-3 text-left sm:grid-cols-2">
              {HIGHLIGHTS.map((h) => (
                <li
                  key={h}
                  className="mx-auto flex max-w-xs items-start gap-2.5 text-sm text-white/80 lg:mx-0 lg:max-w-none"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <CtaButton label="Conversar com a oficina" variant="green" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
