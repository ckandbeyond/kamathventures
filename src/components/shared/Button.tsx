interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'outline'
  className?: string
  external?: boolean
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  external,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(255,206,49,0.4)] hover:shadow-[2px_2px_0px_0px_rgba(255,206,49,0.4)] hover:translate-x-[2px] hover:translate-y-[2px]'

  const variants = {
    primary:
      'bg-yellow text-dark border-2 border-dark',
    outline:
      'border-2 border-yellow text-yellow hover:bg-yellow/10',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return <button className={classes}>{children}</button>
}
