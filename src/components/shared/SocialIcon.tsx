interface SocialIconProps {
  href: string
  label: string
  children: React.ReactNode
  className?: string
}

export default function SocialIcon({ href, label, children, className = '' }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex items-center justify-center w-10 h-10 rounded-full text-muted hover:text-yellow hover:bg-yellow/10 transition-colors duration-200 ${className}`}
    >
      {children}
    </a>
  )
}
