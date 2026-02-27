import { founder } from '../../data/founder'
import SectionWrapper from '../shared/SectionWrapper'
import ScrollReveal from '../shared/ScrollReveal'

export default function About() {
  return (
    <SectionWrapper id="about">
      <ScrollReveal>
        <div className="text-center mb-14">
          <span className="font-hand text-2xl text-yellow">the story so far</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-coral mt-2">
            About
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-5 gap-10 md:gap-14 items-start">
        {/* Photo column */}
        <ScrollReveal className="md:col-span-2">
          <div className="rounded-2xl bg-gradient-to-br from-coral/20 to-yellow/10 p-6 text-center">
            <img
              src="/images/headshot.jpg"
              alt={founder.name}
              className="w-48 h-48 rounded-full mx-auto mb-4 object-cover border-4 border-white/20 shadow-md"
            />
            <p className="text-lg font-bold text-light">{founder.name}</p>
            <p className="text-sm text-muted">{founder.title}</p>
          </div>
        </ScrollReveal>

        {/* Bio column */}
        <ScrollReveal className="md:col-span-3">
          <div className="space-y-5">
            {founder.bio.map((paragraph, i) => (
              <p key={i} className="text-light/80 leading-relaxed">
                {i === 2 ? (
                  <>
                    {paragraph.split('"It Gets Better"')[0]}
                    <a
                      href={founder.bookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow font-medium hover:text-coral transition-colors"
                    >
                      &ldquo;It Gets Better&rdquo;
                    </a>
                    {paragraph.split('"It Gets Better"')[1]}
                  </>
                ) : (
                  paragraph
                )}
              </p>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
