/*
 * ============================================================
 *  TAMBÉM FAZEMOS — serviços secundários (faixa enxuta)
 * ============================================================
 */
import Reveal from '../ui/Reveal'
import CtaButton from '../ui/CtaButton'
import { SECONDARY_SERVICES } from '../../data/business'

export default function SecondaryServices() {
  return (
    <section className="bg-ink py-16 md:py-20">
      <div className="container-lp">
        <Reveal className="flex flex-col items-center text-center">
          <span className="kicker mb-5">Também fazemos</span>
          <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
            Resolva tudo em um lugar só
          </h2>
        </Reveal>

        <div className="mx-auto mt-9 flex max-w-4xl flex-wrap justify-center gap-3">
          {SECONDARY_SERVICES.map((service, i) => (
            <Reveal key={service.name} delay={i * 0.05}>
              <div className="flex items-center gap-2.5 rounded-full border border-line bg-steel px-5 py-3">
                <service.icon className="h-5 w-5 text-brand" strokeWidth={2} />
                <span className="font-medium text-white">{service.name}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-9 text-center">
          <CtaButton
            label="Tirar dúvida sobre meu carro"
            variant="green"
            message="Olá! Tenho uma dúvida sobre o serviço do meu carro. Vocês conseguem me ajudar?"
          />
        </Reveal>
      </div>
    </section>
  )
}
