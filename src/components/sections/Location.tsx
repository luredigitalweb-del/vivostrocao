/*
 * ============================================================
 *  LOCALIZAÇÃO — seção CLARA com endereço, horário e mapa
 * ============================================================
 */
import { MapPin, Clock } from 'lucide-react'
import WhatsAppIcon from '../ui/WhatsAppIcon'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { BUSINESS, whatsappLink } from '../../data/business'

const MAPS_QUERY = encodeURIComponent(
  'Vivos Trocão, Antiga Estrada Rodovia, 9902, Charneca, Cabo de Santo Agostinho - PE',
)
const MAPS_EMBED = `https://maps.google.com/maps?q=${MAPS_QUERY}&z=15&output=embed`
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`

export default function Location() {
  return (
    <section id="localizacao" className="bg-paper py-20 md:py-28">
      <div className="container-lp">
        <SectionHeading
          light
          kicker="Onde estamos"
          title={
            <>
              Venha nos visitar, <span className="hl">na Charneca</span>.
            </>
          }
          subtitle="No bairro da Charneca, em Cabo de Santo Agostinho/PE. Fácil de chegar."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Informações */}
          <Reveal className="order-2 lg:order-1">
            <div className="flex h-full flex-col gap-5 rounded-2xl border border-ink-soft/10 bg-paper-2 p-7 shadow-sm">
              <InfoRow icon={MapPin} title="Endereço">
                {BUSINESS.address.street}
                <br />
                {BUSINESS.address.district} — {BUSINESS.address.cityState}
                {BUSINESS.address.zip && (
                  <>
                    <br />
                    CEP {BUSINESS.address.zip}
                  </>
                )}
                <br />
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block font-semibold text-brand hover:underline"
                >
                  Ver rota no Google Maps →
                </a>
              </InfoRow>

              <InfoRow icon={Clock} title="Horário de atendimento">
                {BUSINESS.hours.weekdays}{' '}
                <span className="text-ink-soft/45">{BUSINESS.hours.weekdaysNote}</span>
                <br />
                {BUSINESS.hours.saturday}
                <br />
                {BUSINESS.hours.sunday}
              </InfoRow>

              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green mt-auto w-full"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Chamar no WhatsApp
              </a>
            </div>
          </Reveal>

          {/* Mapa */}
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <div className="h-72 overflow-hidden rounded-2xl border border-ink-soft/10 shadow-sm lg:h-full lg:min-h-[24rem]">
              <iframe
                title={`Localização da ${BUSINESS.name}`}
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '100%' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function InfoRow({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof MapPin
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-4">
      <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="font-bold text-ink">{title}</h3>
        <p className="mt-1 text-ink-soft/70">{children}</p>
      </div>
    </div>
  )
}
