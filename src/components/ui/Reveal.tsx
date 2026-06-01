/*
 * Reveal — wrapper de animação de entrada (scroll reveal) com Framer Motion.
 * Sutil: fade + leve subida. Respeita prefers-reduced-motion automaticamente
 * via configuração do navegador (Framer Motion).
 */
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  /** Atraso em segundos para efeito de cascata. */
  delay?: number
  className?: string
}

export default function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  )
}
