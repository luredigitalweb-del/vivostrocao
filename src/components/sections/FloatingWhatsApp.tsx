/*
 * ============================================================
 *  12. BOTÃO FLUTUANTE DE WHATSAPP
 * ------------------------------------------------------------
 *  Fixo no canto inferior direito, sempre visível (mobile e
 *  desktop). Aparece após o usuário rolar um pouco para não
 *  competir com o CTA do hero.
 * ============================================================
 */
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WhatsAppIcon from '../ui/WhatsAppIcon'
import { whatsappLink } from '../../data/business'

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-whats px-4 py-4 text-white shadow-whats transition-colors hover:bg-whats-dark sm:px-5"
        >
          {/* Pulso de atenção */}
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-whats/60" />
          <WhatsAppIcon className="h-7 w-7" />
          <span className="hidden font-semibold sm:inline">Fale conosco</span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
