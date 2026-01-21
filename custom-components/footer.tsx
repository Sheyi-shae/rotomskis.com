import Image from "next/image"
import { Mail, Phone, Linkedin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative  bg-[#5C0120]/[0.04] text-tertiary">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[400px] overflow-hidden h-[600px] bg-[#5C0120]/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20">
        {/* Top */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Brand / Identity */}
          <div className="lg:col-span-5 space-y-2">
            <div className="flex items-center gap-4">
              <Image
                src="/img/logo.jpg"
                alt="Augustinas Rotomskis"
                width={50}
                height={50}
                className="rounded-sm"
              />
              <div>
                <p className="font-semibold text-lg text-tertiary">
                  Augustinas Rotomskis
                </p>
                <p className="text-sm text-tertiary/70">
                  Global Strategic Integrator
                </p>
              </div>
            </div>

            <p className="text-tertiary/80 max-w-md leading-relaxed text-justify">
              Connecting product-first companies with high-growth markets across
              the Anglosphere, DACH region, and Africa.
            </p>

            {/* Contact details */}
            <div className="space-y-2 text-primary">
              <a
                href="mailto:hello@strategicexpansion.com"
                className="flex items-center gap-3 text-sm text-tertiary/80 hover:text-primary transition-colors"
              >
                <Mail size={16} />
                info@rotomskis.com
              </a>

              <a
                href="#"
                target="_blank"
                className="flex items-center gap-3 text-sm text-tertiary/80 hover:text-primary transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-4 flex flex-col md:items-center space-y-4">
            <h4 className="font-semibold mr-20 text-tertiary mb-4">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-tertiary/80">
              <li>Strategy Consulting</li>
              <li>Interim Management</li>
              <li>Sales Outsourcing</li>
              <li>Platform Engineering</li>
            </ul>
          </div>

          {/* Navigation / Thinking */}
          {/* Contact */}
          <div className="animate-fade-in lg:col-span-3 space-y-4" style={{ animationDelay: "0.3s" }}>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-3 text-sm text-tertiary/80">
              <li>
                <a href="mailto:info@rotomskis.com" className="hover:text-primary transition-colors">
                  Email
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
             
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-tertiary/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-tertiary/60">
            © {currentYear} Augustinas Rotomskis. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs text-tertiary/60">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
