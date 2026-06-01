/*
 * ============================================================
 *  VIVO STROCÃO — Landing Page de Conversão (WhatsApp)
 * ------------------------------------------------------------
 *  Estilo "Conceito Prime": preto + vermelho, Montserrat black,
 *  seções escuras e claras alternadas. Todos os CTAs → WhatsApp.
 * ============================================================
 */
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import TrustMarquee from './components/sections/TrustMarquee'
import Services from './components/sections/Services'
import Process from './components/sections/Process' // seção clara
import WhyChoose from './components/sections/WhyChoose'
import About from './components/sections/About'
import SecondaryServices from './components/sections/SecondaryServices'
import InstagramSection from './components/sections/InstagramSection' // seção clara
import FinalCTA from './components/sections/FinalCTA'
import Location from './components/sections/Location' // seção clara
import Footer from './components/sections/Footer'
import FloatingWhatsApp from './components/sections/FloatingWhatsApp'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustMarquee />
        <Services />
        <Process />
        <WhyChoose />
        <About />
        <SecondaryServices />
        <InstagramSection />
        <FinalCTA />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
