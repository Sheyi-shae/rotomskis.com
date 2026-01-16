"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Check, MailCheck } from "lucide-react"
import HeaderTitle from "./header-title"

export function ContactSection() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setSubmitted(true)
    setIsLoading(false)

    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={24} />,
      title: "Email",
      value: "hello@strategicexpansion.com",
      href: "mailto:hello@strategicexpansion.com",
    },
   
   
  ]

  return (
    <section id="contact" className="py-16 bg-white relative overflow-hidden">
   
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
       <HeaderTitle
                  colouredHeader="Connect"
                  subHeader="contact"
                  subText="Ready to expand your business globally? Get in touch and let's discuss your growth strategy."
                  header="Let's "
              />
                  

        

        {/* Contact Form & Info */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Info */}
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold text-secondary mb-6">Quick Response Guaranteed</h3>

            <div className="space-y-4 mb-8">
              {[
                "We typically respond within 2 hours during business hours",
               
                "We'll develop a customized strategy for your specific needs",
                "No obligation—just expert guidance and insights",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-secondary">{item}</span>
                </div>
              ))}
                          <div  className="flex items-start gap-3">
                  <MailCheck className="text-primary flex-shrink-0 mt-1" size={20} />
                  <a href="mailto:info@rjvpartners.com" className="text-blue-500">{`info@rjvpartners.com`}</a>
                </div>
            </div>

            
          </div>

          {/* Right - Form */}
          <div className="animate-slide-in-right">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-gray-100 p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 animate-scale-in">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Check className="text-primary" size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-secondary mb-2">Message Sent!</h4>
                  <p className="text-secondary/70 text-center">
                    Thank you for reaching out. We'll contact you shortly with a personalized strategy.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formState.firstName}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formState.lastName}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  {/* Company */}
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formState.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />

                  {/* Message */}
                  <textarea
                    name="message"
                    placeholder="Tell us about your expansion goals..."
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  />

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-6 py-3 bg-primary text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>

                  {/* Privacy Note */}
                  <p className="text-xs text-secondary/50 text-center">
                    We respect your privacy. Your information will only be used to contact you about your inquiry.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>

       
      </div>
    </section>
  )
}
