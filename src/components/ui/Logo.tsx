/*
 * Logo — logo oficial da Vivos Trocão (public/logo.png), PNG transparente.
 */
interface LogoProps {
  className?: string
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt="Vivos Trocão — Centro Automotivo"
      width={520}
      height={219}
      className={`h-9 w-auto sm:h-10 ${className}`}
    />
  )
}
