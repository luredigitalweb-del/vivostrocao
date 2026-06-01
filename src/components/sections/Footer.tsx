/*
 * ============================================================
 *  FOOTER — logo, contato, horário, Instagram e direitos.
 * ============================================================
 */
import { Instagram, MapPin, Clock } from 'lucide-react'
import Logo from '../ui/Logo'
import WhatsAppIcon from '../ui/WhatsAppIcon'
import { BUSINESS, whatsappLink } from '../../data/business'

export default function Footer() {
  return (
    <footer className="relative bg-black py-14">
      {/* Acento no topo (vermelho → amarelo da marca) */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand via-accent to-brand" />
      <div className="container-lp">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Marca */}
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-white/50">
              {BUSINESS.segment}. {BUSINESS.yearsExperience} anos de qualidade e
              confiança em {BUSINESS.city}/{BUSINESS.state}.
            </p>
            <a
              href={BUSINESS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-brand-light"
            >
              <Instagram className="h-5 w-5" />@{BUSINESS.instagram}
            </a>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-display text-base font-bold uppercase tracking-wide text-white">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" />
                <span>{BUSINESS.address.full}</span>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-brand-light"
                >
                  <WhatsAppIcon className="h-5 w-5 flex-shrink-0 text-brand" />
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h3 className="font-display text-base font-bold uppercase tracking-wide text-white">
              Horário
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" />
                <span>
                  {BUSINESS.hours.weekdays}
                  <br />
                  {BUSINESS.hours.saturday}
                  <br />
                  {BUSINESS.hours.sunday}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-6 text-center text-xs text-white/40">
          © 2026 {BUSINESS.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
