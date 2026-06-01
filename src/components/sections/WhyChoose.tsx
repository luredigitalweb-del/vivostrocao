/*
 * ============================================================
 *  DIFERENCIAIS — "Por que escolher a Vivos Trocão?"
 * ------------------------------------------------------------
 *  Versão minimalista: cards sóbrios, ícone discreto, bastante
 *  respiro. Hover sutil (borda + leve elevação). Sem excessos.
 * ============================================================
 */
import { motion } from 'framer-motion'
import { Building2, Wrench, Users, ShieldCheck } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const ITEMS = [
  { icon: Building2, title: 'Estrutura maior', text: 'Mais espaço para receber o seu veículo com agilidade. Nada de carro parado na rua esperando vaga.' },
  { icon: Wrench, title: 'Mais equipamentos', text: 'Capacidade técnica para serviços que muitas oficinas não fazem — diagnóstico e reparo no mesmo lugar.' },
  { icon: Users, title: 'Equipe treinada', text: 'Mecânicos com cursos e treinamentos constantes. Mais gente qualificada, atendimento sem fila.' },
  { icon: ShieldCheck, title: 'Qualidade garantida', text: 'Compromisso com a qualidade no serviço e na peça. Serviço sério, feito pra durar.' },
]

export default function WhyChoose() {
  return (
    <section id="diferenciais" className="bg-graphite py-20 md:py-28">
      <div className="container-lp">
        <SectionHeading
          kicker="Diferenciais"
          title={
            <>
              Por que escolher a <span className="hl">Vivos Trocão?</span>
            </>
          }
          subtitle="Não é oficina de fundo de quintal. É um centro automotivo de verdade."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group bg-graphite p-8 transition-colors duration-300 hover:bg-steel"
            >
              <div className="mb-6 text-brand">
                <item.icon className="h-8 w-8" strokeWidth={1.6} />
              </div>
              <h3 className="font-display text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/55">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
