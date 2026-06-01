/*
 * ============================================================
 *  DADOS DO NEGÓCIO — FONTE ÚNICA DE VERDADE
 * ------------------------------------------------------------
 *  Toda a copy, contatos e CTAs do site puxam daqui.
 *  Para ajustar telefone, endereço, mensagem do WhatsApp etc.,
 *  edite apenas este arquivo.
 * ============================================================
 */
import type { LucideIcon } from 'lucide-react'
import {
  Car,
  Cog,
  Wrench,
  Droplets,
  Gauge,
  Filter,
  Wind,
  Disc3,
  Thermometer,
  Sparkles,
  CircleDot,
} from 'lucide-react'

export const BUSINESS = {
  name: 'Vivos Trocão',
  segment: 'Oficina Mecânica · Centro Automotivo',
  yearsExperience: 20,
  clientsPerMonth: 650,
  city: 'Cabo de Santo Agostinho',
  state: 'PE',
  instagram: 'vivostrocao',
  instagramUrl: 'https://instagram.com/vivostrocao',
  address: {
    street: 'Rod. BR-101 Sul, 3460',
    district: 'Distrito Industrial',
    cityState: 'Cabo de Santo Agostinho/PE',
    zip: '54503-410',
    full: 'Rod. BR-101 Sul, 3460 — Distrito Industrial — Cabo de Santo Agostinho/PE — CEP 54503-410',
  },
  hours: {
    weekdays: 'Segunda a sexta: 08h às 17h',
    weekdaysNote: '(1h de intervalo para almoço)',
    saturday: 'Sábado: 08h às 12h',
    sunday: 'Domingo: fechado',
  },
  phoneDisplay: '(81) 99662-8238',
} as const

/* ---------------- WHATSAPP (canal único de conversão) ---------------- */
const WHATS_NUMBER = '5581996628238'

// Toda conversa começa com esta saudação (rastreio de origem: Google).
const WHATS_GREETING = 'Olá, vim pelo Google!'

/**
 * Gera um link de WhatsApp com mensagem pré-preenchida.
 * Sempre começa com "Olá, vim pelo Google!" — remove qualquer
 * saudação "Olá..." da mensagem recebida para não duplicar.
 */
export function whatsappLink(message?: string): string {
  const raw = message ?? 'Gostaria de um orçamento na Vivos Trocão.'
  const body = raw.replace(/^\s*ol[áa][!,.\s]*/i, '').trim()
  const text = `${WHATS_GREETING} ${body}`.trim()
  return `https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(text)}`
}

/* ---------------- SERVIÇOS PRINCIPAIS (destaque em cards) ---------------- */
export interface Service {
  icon: LucideIcon
  name: string
  benefit: string
  /** Mensagem específica que entra no WhatsApp ao clicar no card. */
  whatsMessage: string
}

export const MAIN_SERVICES: Service[] = [
  {
    icon: CircleDot,
    name: 'Suspensão',
    benefit: 'Carro firme e seguro nas ruas e estradas, sem barulho e sem trepidação.',
    whatsMessage: 'Olá! Quero um orçamento de SUSPENSÃO na Vivos Trocão.',
  },
  {
    icon: Cog,
    name: 'Motor',
    benefit: 'Diagnóstico preciso e reparo completo de motor com peças de qualidade.',
    whatsMessage: 'Olá! Quero um orçamento de serviço de MOTOR na Vivos Trocão.',
  },
  {
    icon: Wrench,
    name: 'Cabeçote',
    benefit: 'Especialistas em cabeçote: serviço bem feito que evita dor de cabeça depois.',
    whatsMessage: 'Olá! Quero um orçamento de CABEÇOTE na Vivos Trocão.',
  },
  {
    icon: Droplets,
    name: 'Óleo de Câmbio Automático',
    benefit: 'Troca correta do óleo do câmbio automático para prolongar a vida do seu carro.',
    whatsMessage: 'Olá! Quero um orçamento de TROCA DE ÓLEO DO CÂMBIO AUTOMÁTICO na Vivos Trocão.',
  },
  {
    icon: Gauge,
    name: 'Alinhamento e Balanceamento',
    benefit: 'Direção alinhada, pneus durando mais e mais economia no dia a dia.',
    whatsMessage: 'Olá! Quero um orçamento de ALINHAMENTO E BALANCEAMENTO na Vivos Trocão.',
  },
  {
    icon: Filter,
    name: 'Troca de Óleo e Filtros',
    benefit: 'Manutenção em dia com óleo e filtros certos para o seu veículo.',
    whatsMessage: 'Olá! Quero um orçamento de TROCA DE ÓLEO E FILTROS na Vivos Trocão.',
  },
]

/* ---------------- SERVIÇOS SECUNDÁRIOS ("Também fazemos") ---------------- */
export interface SecondaryService {
  icon: LucideIcon
  name: string
}

export const SECONDARY_SERVICES: SecondaryService[] = [
  { icon: Wind, name: 'Escapamento' },
  { icon: Disc3, name: 'Freio' },
  { icon: Thermometer, name: 'Arrefecimento' },
  { icon: Sparkles, name: 'Limpeza de Bico' },
  { icon: Car, name: 'Embreagem' },
]
