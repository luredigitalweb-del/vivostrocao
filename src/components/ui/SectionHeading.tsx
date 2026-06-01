/*
 * SectionHeading — cabeçalho de seção (estilo Conceito Prime):
 * kicker "— RÓTULO —" vermelho + título Montserrat grande.
 * Suporta tema claro (light) para as seções de contraste.
 */
import Reveal from './Reveal'
import type { ReactNode } from 'react'

interface SectionHeadingProps {
  kicker: string
  title: ReactNode
  subtitle?: ReactNode
  align?: 'center' | 'left'
  light?: boolean
  className?: string
}

export default function SectionHeading({
  kicker,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center'
  const wrap = isCenter ? 'mx-auto max-w-3xl items-center text-center' : 'max-w-3xl items-start text-left'
  const titleColor = light ? 'text-ink' : 'text-metal'
  const subColor = light ? 'text-ink-soft/70' : 'text-white/60'

  return (
    <Reveal className={`flex flex-col ${wrap} ${className}`}>
      <span className={`kicker mb-5 ${isCenter ? '' : 'kicker-left'}`}>{kicker}</span>
      <h2 className={`section-title ${titleColor}`}>{title}</h2>
      {subtitle && <p className={`mt-5 text-lg ${subColor}`}>{subtitle}</p>}
    </Reveal>
  )
}
