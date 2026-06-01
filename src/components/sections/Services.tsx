/*
 * ============================================================
 *  SERVIÇOS PRINCIPAIS — cards escuros (estilo Conceito Prime)
 * ------------------------------------------------------------
 *  Grid de cards com ícone vermelho, nome, benefício e botão
 *  "Solicitar este serviço" + seta no círculo. O card central
 *  recebe destaque (glow vermelho + tag "Mais procurado").
 * ============================================================
 */
import { ArrowRight } from 'lucide-react'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { MAIN_SERVICES, whatsappLink } from '../../data/business'

// Índices que recebem a tag de destaque
const FEATURED = new Set([1]) // Motor (mais procurado)

export default function Services() {
  return (
    <section id="servicos" className="relative bg-ink py-20 md:py-28">
      <div className="container-lp">
        <SectionHeading
          kicker="Nossos serviços"
          title={
            <>
              Soluções completas para <span className="hl">cuidar</span> do seu carro.
            </>
          }
          subtitle="Do problema simples ao serviço pesado — tudo executado com técnica, equipamento certo e peça de qualidade."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MAIN_SERVICES.map((service, i) => {
            const featured = FEATURED.has(i)
            return (
              <Reveal key={service.name} delay={(i % 3) * 0.08}>
                <a
                  href={whatsappLink(service.whatsMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
                    featured
                      ? 'border-brand/60 bg-gradient-to-b from-brand/10 to-steel shadow-cta-lg'
                      : 'border-line bg-steel ring-metal hover:border-brand/40'
                  }`}
                >
                  {/* Tag destaque */}
                  {featured && (
                    <span className="absolute right-5 top-5 rounded-full bg-accent px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-ink">
                      Mais procurado
                    </span>
                  )}

                  {/* Ícone */}
                  <div className="mb-5 grid h-14 w-14 place-items-center rounded-xl bg-brand/12 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <service.icon className="h-7 w-7" strokeWidth={2} />
                  </div>

                  <h3 className="font-display text-xl font-bold text-white">{service.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
                    {service.benefit}
                  </p>

                  {/* Botão */}
                  <span className="mt-6 flex items-center justify-between rounded-xl border border-line bg-ink/60 px-4 py-3 text-sm font-semibold text-white transition-colors group-hover:border-brand/50">
                    Solicitar este serviço
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-brand text-white transition-transform group-hover:translate-x-0.5">
                      <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
                    </span>
                  </span>
                </a>
              </Reveal>
            )
          })}
        </div>

        {/* Faixa de garantias (sem inventar — usa dados reais) */}
        <Reveal className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/70">
          {['Orçamento sem compromisso', 'Qualidade no serviço e na peça', 'Atendimento sem fila'].map(
            (t) => (
              <span key={t} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand" />
                {t}
              </span>
            ),
          )}
        </Reveal>
      </div>
    </section>
  )
}
