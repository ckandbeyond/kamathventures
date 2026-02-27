interface MobileMenuProps {
  open: boolean
  links: { id: string; label: string }[]
  activeId: string
  onClose: () => void
}

export default function MobileMenu({ open, links, activeId, onClose }: MobileMenuProps) {
  if (!open) return null

  return (
    <div className="md:hidden bg-dark/98 backdrop-blur-sm border-t border-white/10 px-6 py-4">
      <div className="flex flex-col gap-4">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={onClose}
            className={`text-base font-medium transition-colors duration-200 ${
              activeId === link.id
                ? 'text-yellow'
                : 'text-muted hover:text-light'
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}
