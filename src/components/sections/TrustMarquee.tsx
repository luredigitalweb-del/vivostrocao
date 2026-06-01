/*
 * ============================================================
 *  FAIXA EM MOVIMENTO (marquee)
 * ------------------------------------------------------------
 *  Tira animada com as especialidades. Reforço visual de
 *  "fazemos de tudo" logo abaixo do hero. Pausa no hover.
 * ============================================================
 */
import { Wrench } from 'lucide-react'

const ITEMS = [
  'Motor',
  'Cabeçote',
  'Suspensão',
  'Câmbio Automático',
  'Alinhamento',
  'Balanceamento',
  'Freio',
  'Embreagem',
  'Arrefecimento',
  'Troca de Óleo',
  'Escapamento',
  'Limpeza de Bico',
]

export default function TrustMarquee() {
  return (
    <div className="relative border-y border-line bg-brand py-3.5">
      <div className="mask-fade-x flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center whitespace-nowrap will-change-transform hover:[animation-play-state:paused]">
          {/* Lista duplicada para loop contínuo */}
          {[...ITEMS, ...ITEMS].map((item, i) => (
            <span key={i} className="flex items-center gap-3 px-6">
              <Wrench className="h-4 w-4 text-accent" />
              <span className="font-display text-sm font-semibold uppercase tracking-wider text-white">
                {item}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
