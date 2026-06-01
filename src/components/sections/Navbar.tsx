/*
 * ============================================================
 *  NAVBAR — barra flutuante (pílula) estilo Conceito Prime
 * ------------------------------------------------------------
 *  Logo à esquerda, links ao centro, CTA vermelho à direita.
 *  Mobile: menu colapsável + WhatsApp sempre acessível.
 * ============================================================
 */
import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '../ui/Logo'
import CtaButton from '../ui/CtaButton'
import WhatsAppIcon from '../ui/WhatsAppIcon'
import { whatsappLink } from '../../data/business'

const NAV_LINKS = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#localizacao', label: 'Contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <nav
        className={`container-lp flex h-16 items-center justify-between rounded-2xl px-4 transition-all duration-300 sm:px-5 ${
          scrolled
            ? 'border border-line bg-ink/80 shadow-glow backdrop-blur-xl'
            : 'border border-transparent bg-ink/40 backdrop-blur-md'
        }`}
      >
        <a href="#topo" aria-label="Vivos Trocão — início">
          <Logo />
        </a>

        {/* Links — desktop */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/75 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <div className="hidden md:block">
          <CtaButton label="Solicitar Orçamento" className="!py-2.5 !text-sm" />
        </div>

        {/* Ações mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green !gap-1.5 !px-3.5 !py-2.5 text-sm"
            aria-label="Falar no WhatsApp"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-steel text-white"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Painel mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="container-lp mt-2 overflow-hidden rounded-2xl border border-line bg-ink/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 p-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-base font-medium text-white/90 transition-colors hover:bg-steel hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-1">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="btn-red w-full"
                >
                  Solicitar Orçamento
                  <span className="btn-arrow">
                    <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
                  </span>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
