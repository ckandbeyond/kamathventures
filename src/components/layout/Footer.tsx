import SocialIcon from '../shared/SocialIcon'
import { founder } from '../../data/founder'

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/10 text-light/80 py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <img src="/images/logo.svg" alt="Kamath Ventures" className="h-8 w-auto rounded mb-3" />
            <p className="text-sm leading-relaxed text-muted">
              A venture studio that builds software products, offers consulting, and
              invests in startups.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-light mb-3 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              <a href="#products" className="text-sm text-muted hover:text-yellow transition-colors">
                Products
              </a>
              <a href="#about" className="text-sm text-muted hover:text-yellow transition-colors">
                About
              </a>
              <a href="#contact" className="text-sm text-muted hover:text-yellow transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-light mb-3 text-sm uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-3">
              <SocialIcon
                href={`mailto:${founder.email}`}
                label="Email"
                className="text-muted hover:text-yellow hover:bg-yellow/10"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </SocialIcon>
              <SocialIcon
                href={founder.linkedin}
                label="LinkedIn"
                className="text-muted hover:text-yellow hover:bg-yellow/10"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} Kamath Ventures. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
