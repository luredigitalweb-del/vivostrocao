/*
 * ============================================================
 *  INSTAGRAM — seção CLARA (acompanhe a oficina)
 * ------------------------------------------------------------
 *  Texto + botão à esquerda, mockup de iPhone à direita
 *  mostrando o print real do perfil @vivostrocao.
 * ============================================================
 */
import { Instagram } from 'lucide-react'
import Reveal from '../ui/Reveal'
import Iphone16Pro from '../ui/Iphone16Pro'
import { BUSINESS } from '../../data/business'

// Números reais do perfil (do print enviado)
const IG_STATS = [
  { value: '56', label: 'posts' },
  { value: '733', label: 'seguidores' },
  { value: '19+', label: 'anos' },
]

export default function InstagramSection() {
  return (
    <section className="overflow-hidden bg-paper py-20 md:py-28">
      <div className="container-lp grid items-center gap-12 lg:grid-cols-2">
        {/* Texto */}
        <Reveal className="text-center lg:text-left">
          <span className="kicker mb-5 justify-center lg:justify-start">Acompanhe</span>
          <h2 className="section-title text-ink">
            Nos siga nas <span className="hl">redes sociais</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-lg text-ink-soft/70 lg:mx-0">
            Veja os trabalhos do dia a dia, dicas de cuidados com o carro e as
            novidades da oficina direto no nosso Instagram.
          </p>

          {/* Stats reais do perfil */}
          <div className="mx-auto mt-7 flex max-w-sm items-center justify-center gap-6 lg:mx-0 lg:justify-start">
            {IG_STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-extrabold text-ink">{s.value}</div>
                <div className="text-xs uppercase tracking-wide text-ink-soft/55">{s.label}</div>
              </div>
            ))}
          </div>

          <a
            href={BUSINESS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-brand to-brand-dark px-6 py-3.5 font-semibold text-white shadow-cta transition-transform hover:-translate-y-0.5"
          >
            <Instagram className="h-5 w-5" />
            Seguir @{BUSINESS.instagram}
          </a>
        </Reveal>

        {/* Mockup de iPhone com o print do perfil */}
        <Reveal delay={0.15} className="flex justify-center lg:justify-end">
          <Iphone16Pro
            src="/instagram-perfil.jpg"
            className="h-auto w-[260px] sm:w-[300px]"
          />
        </Reveal>
      </div>
    </section>
  )
}
