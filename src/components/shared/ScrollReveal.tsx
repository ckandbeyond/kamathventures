import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
}

export default function ScrollReveal({ children, className = '' }: ScrollRevealProps) {
  const { ref, isVisible } = useIntersectionObserver(0.15)

  return (
    <div
      ref={ref}
      className={`${isVisible ? 'reveal-visible' : 'opacity-0'} ${className}`}
    >
      {children}
    </div>
  )
}
