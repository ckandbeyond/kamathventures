interface SectionWrapperProps {
  children: React.ReactNode
  id?: string
  className?: string
  alternate?: boolean
}

export default function SectionWrapper({
  children,
  id,
  className = '',
  alternate,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 px-6 ${alternate ? 'bg-darkalt' : 'bg-dark'} ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  )
}
