/*
 * CtaButton — botão de conversão padronizado (estilo Conceito Prime).
 * Todo CTA do site leva ao WhatsApp. Variантes:
 *  - red:   primário (pílula vermelha + seta no círculo)
 *  - green: WhatsApp ("Falar no WhatsApp")
 *  - ghost: secundário (contorno)
 */
import { ArrowRight } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'
import { whatsappLink } from '../../data/business'

interface CtaButtonProps {
  message?: string
  label: string
  variant?: 'red' | 'green' | 'ghost'
  size?: 'md' | 'lg'
  /** Mostra a seta no círculo (padrão no vermelho) ou o ícone do WhatsApp (no verde). */
  icon?: 'arrow' | 'whats' | 'none'
  className?: string
}

export default function CtaButton({
  message,
  label,
  variant = 'red',
  size = 'md',
  icon,
  className = '',
}: CtaButtonProps) {
  const base = variant === 'green' ? 'btn-green' : variant === 'ghost' ? 'btn-ghost' : 'btn-red'
  const sizing = size === 'lg' ? 'text-base sm:text-lg px-7 py-4' : ''
  const showIcon = icon ?? (variant === 'green' ? 'whats' : 'arrow')

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`group ${base} ${sizing} ${className}`}
      aria-label={label}
    >
      {showIcon === 'whats' && <WhatsAppIcon className="h-5 w-5" />}
      {label}
      {showIcon === 'arrow' && (
        <span className="btn-arrow">
          <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
        </span>
      )}
    </a>
  )
}
