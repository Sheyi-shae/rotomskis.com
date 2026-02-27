'use client'


import { AlertTriangle, CheckCircle, Shield, Mail, Phone, AlertCircle } from 'lucide-react'

export default function ScamWarrantyPage() {
  return (
    <>
  
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-background via-background to-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Warning Icon and Message */}
              <div className="space-y-6 animate-slide-in-left">
                <div className="flex items-center gap-4">
                  
                  <h1 className="text-4xl md:text-5xl font-bold text-secondary">Scam &amp; Fraud Awareness</h1>
                </div>
                <p className="text-justify text-foreground/80 leading-relaxed">
                Like many global companies, Rotomskis Joint Ventures name, logos, and the identities of its people may from time to time be used as part of a scam or fraud. These instances are uncommon, disappointing, and extremely unfortunate.


                              </p>
                <div className="flex justify-center">
                  <a
                    href="#report"
                    className="bg-primary w-full text-center text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
                  >
                    Report a Scam
                  </a>
                 
                </div>
              </div>

              {/* Right: Illustration */}
              <div className="relative animate-slide-in-right">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-3xl" />
                <div className="relative bg-white/50 backdrop-blur rounded-2xl p-12 border border-primary/10">
                  <Shield className="w-24 h-24 text-primary mx-auto mb-6" />
                  <p className="text-center text-secondary font-semibold text-lg">
                    Trust and Security at Every Step
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Warning Signs Section */}
        <section className=" bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary mb-4">Common Scam Red Flags</h2>
              <p className="text-lg text-foreground/70">Learn how to identify and avoid fraudulent communications</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Unsolicited Money Requests */}
              <div className="bg-gradient-to-br from-red-50 to-red-50/50 rounded-xl p-8 border border-red-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">Unsolicited Money Requests</h3>
                <p className="text-foreground/70 mb-4">
                  Anyone claiming to be from Rotomskis Joint Ventures asking for money or investment opportunities is likely fraudulent.
                </p>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li className="flex gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Requests for wire transfers or payments</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Investment opportunities requiring deposits</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Claims of unusual investment returns</span>
                  </li>
                </ul>
              </div>

              {/* Imposter Websites & Emails */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-50/50 rounded-xl p-8 border border-orange-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">Imposter Communications</h3>
                <p className="text-foreground/70 mb-4">
                  Scammers create fake websites, email addresses, and text messages to impersonate legitimate employees.
                </p>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li className="flex gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Emails not from @rotomskis.com domain</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Fake job offers and employment scams</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Unsolicited calls or text messages</span>
                  </li>
                </ul>
              </div>

              {/* Identity Verification */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-50/50 rounded-xl p-8 border border-blue-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">How to Verify</h3>
                <p className="text-foreground/70 mb-4">
                  Legitimate communications from Rotomskis Joint Ventures follow strict protocols.
                </p>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li className="flex gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Always use @rotomskis.com email domain</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Contact your nearest office directly</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Request official verification details</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Information Section */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {/* Investment Policy */}
              <div className="bg-white rounded-xl p-8 border border-border hover:shadow-lg transition-shadow animate-slide-in-up">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <AlertTriangle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary mb-3">Conservative Investment Policy</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      Rotomskis Joint Ventures maintains a conservative investment policy. Any communication claiming to be from Augustinas Rotomskis or Rotomskis Joint Ventures that solicits money or offers an investment opportunity should be treated as potentially fraudulent.
                    </p>
                  </div>
                </div>
              </div>

              {/* Employment Scams */}
              <div className="bg-white rounded-xl p-8 border border-border hover:shadow-lg transition-shadow animate-slide-in-up">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <AlertTriangle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary mb-3">Employment Scams</h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      We've become aware of scams involving false offers of employment. These scams use imposter websites, email addresses, and text messages to appear legitimate. Always verify any employment opportunity directly through official channels.
                    </p>
                    <p className="text-sm text-primary font-semibold">
                      🛡️ Legitimate job offers will only come through official Rotomskis channels
                    </p>
                  </div>
                </div>
              </div>

              {/* Email Verification */}
              <div className="bg-white rounded-xl p-8 border border-border hover:shadow-lg transition-shadow animate-slide-in-up">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary mb-3">Email Domain Verification</h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      Our people will always use the <span className="font-semibold bg-primary/10 px-2 py-1 rounded">@rotomskis.com</span> email domain. If you receive communication from any other domain claiming to represent us, it is not legitimate.
                    </p>
                    <div className="bg-muted/50 rounded-lg p-4 border border-border">
                      <p className="text-sm font-semibold text-secondary mb-2">Legitimate email domains:</p>
                      <p className="text-sm text-foreground/70 font-mono bg-white px-3 py-2 rounded">
                        someone@rotomskis.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Communication Advice */}
              <div className="bg-white rounded-xl p-8 border border-border hover:shadow-lg transition-shadow animate-slide-in-up">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary mb-3">Unsolicited Communication Warning</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      It's best not to engage with unsolicited voice calls or mobile texts. Scammers commonly use these methods to establish contact and build false credibility. If you're unsure about a communication's authenticity, don't respond and contact us directly using verified contact information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Verification Section */}
        <section id="contact-us" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary mb-4">How to Verify &amp; Report</h2>
              <p className="text-lg text-foreground/70">
                If you have doubts about the authenticity of a communication, follow these steps
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Verification Steps */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 border border-primary/10">
                <h3 className="text-2xl font-bold text-secondary mb-6">Verify Communication</h3>
                <ol className="space-y-4">
                  {[
                    'Check the sender email domain (@rotomskis.com)',
                    'Contact your nearest office directly',
                    'Request official verification details',
                    'Ask for written confirmation',
                    'Never share sensitive information via email',
                  ].map((step, idx) => (
                    <li key={idx} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {idx + 1}
                      </span>
                      <span className="text-foreground/80 pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Report a Scam */}
              <div id="report" className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 border border-red-200">
                <h3 className="text-2xl font-bold text-secondary mb-6">Report Suspicious Activity</h3>
                <p className="text-foreground/70 mb-6">
                  If you suspect a scam or fraud, please contact us immediately:
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:info@rotomskis.com"
                    className="flex items-center gap-3 p-4 bg-white rounded-lg border border-red-200 hover:bg-red-50/50 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-secondary">Email</p>
                      <p className="text-sm text-foreground/60">info@rotomskis.com</p>
                    </div>
                  </a>
                  <p className="text-sm text-foreground/60 pt-4 border-t border-red-200">
                    We also encourage anyone affected by or suspicious of a scam to contact their local authorities.
                  </p>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-6">
              <p className="text-foreground/80">
                <span className="font-bold text-primary">Important:</span> Rotomskis Joint Ventures will never request sensitive personal or financial information via unsolicited email, phone call, or text message. If you receive such a request, it is not legitimate.
              </p>
            </div>
          </div>
        </section>

        
      </main>
   
    </>
  )
}
