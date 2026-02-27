import type { Product } from '../../data/products'
import Button from '../shared/Button'

interface ProductCardProps {
  product: Product
  featured?: boolean
}

export default function ProductCard({ product, featured }: ProductCardProps) {
  if (featured) {
    return (
      <div className="group bg-surface rounded-2xl p-6 border-2 border-white/20 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200">
        {/* Placeholder preview area */}
        <div className="aspect-video rounded-xl bg-gradient-to-br from-yellow/20 to-coral/10 mb-5 flex items-center justify-center overflow-hidden">
          <span className="text-2xl text-coral/60 font-bold">
            {product.name}
          </span>
        </div>

        <h3 className="text-xl font-bold text-dark mb-2">
          {product.name}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-4">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1 rounded-full bg-teal/15 text-teal"
            >
              {tag}
            </span>
          ))}
        </div>

        {product.url && (
          <Button href={product.url} variant="primary" external className="w-full">
            Visit {product.name} &rarr;
          </Button>
        )}
      </div>
    )
  }

  return (
    <div className="group bg-darkalt rounded-xl p-5 border-2 border-white/10 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.15)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-coral/20 flex items-center justify-center shrink-0">
          <span className="font-bold text-coral text-sm">
            {product.name.charAt(0)}
          </span>
        </div>
        <div>
          <h3 className="font-semibold text-light text-base">{product.name}</h3>
          {product.role && (
            <span className="text-xs text-muted">{product.role}</span>
          )}
        </div>
      </div>
      <p className="text-muted text-sm leading-relaxed mb-3">
        {product.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {product.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium px-2 py-0.5 rounded-full bg-white/5 text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
