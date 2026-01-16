import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-rose-50 pt-20 text-tertiary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
                  {/* Brand */}
                  <div className="animate-fade-in flex flex-col gap-4" >
                  <div className=" relative">
                      <Image
                          src="/img/logo.jpg"
                          alt="Logo"
                          width={500}
                          height={500}
                          className="w-20 h-20 "
                      />
            
            <p className="text-tertiary/80">Connecting product-first
                              companies with high-growth markets</p>
                      </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-tertiary/80">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-primary transition-colors">
                  My Work
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-primary transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-primary transition-colors">
                  Insights
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-tertiary/80">
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Strategy Consulting
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Market Analysis
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Export Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Global Expansion
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-tertiary/80">
              <li>
                <a href="mailto:hello@strategicexpansion.com" className="hover:text-primary transition-colors">
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

        {/* Divider */}
        <div className="border-t border-tertiary/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-tertiary/60 text-sm">© {currentYear} Augustinas Rotomskis. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0 text-sm text-tertiary/60">
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
