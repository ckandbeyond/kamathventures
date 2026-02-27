import { products } from '../../data/products'
import SectionWrapper from '../shared/SectionWrapper'
import ScrollReveal from '../shared/ScrollReveal'
import ProductCard from './ProductCard'

export default function Products() {
  const live = products.filter((p) => p.type === 'live')
  const past = products.filter((p) => p.type === 'past')

  return (
    <SectionWrapper id="products" alternate>
      <ScrollReveal>
        <div className="text-center mb-14">
          <span className="font-hand text-2xl text-yellow">what I'm working on</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-coral mt-2">
            Products
          </h2>
        </div>
      </ScrollReveal>

      {/* Currently Live */}
      <ScrollReveal>
        <h3 className="font-semibold text-light text-lg mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
          Currently Live
        </h3>
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {live.map((product) => (
            <ProductCard key={product.name} product={product} featured />
          ))}
        </div>
      </ScrollReveal>

      {/* Past Highlights */}
      <ScrollReveal>
        <h3 className="font-semibold text-light text-lg mb-6">
          Past Highlights
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {past.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </ScrollReveal>
    </SectionWrapper>
  )
}
