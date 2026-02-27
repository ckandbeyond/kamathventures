import Button from '../shared/Button'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-yellow/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-32 w-80 h-80 bg-coral/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal/8 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Logo */}
        <div className="animate-float mb-8">
          <img
            src="/images/logo.svg"
            alt="Kamath Ventures"
            className="h-16 md:h-20 w-auto rounded-xl"
          />
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-coral leading-tight mb-6">
          Building products<br />people love
        </h1>

        <p className="text-lg md:text-xl text-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Kamath Ventures is a venture studio that builds software products,
          offers consulting, and invests in startups shaping the future.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="#products">Explore My Products</Button>
          <Button href="#contact" variant="outline">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  )
}
