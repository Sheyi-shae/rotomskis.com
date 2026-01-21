"use client"

import { useEffect, useState } from "react"
import { MessageCircle, X } from "lucide-react"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed  bottom-8 right-8 z-40 animate-fade-in">
      {isOpen && (
        <div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 w-80 animate-slide-in-up mb-4">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold text-secondary">Quick Support</h4>
            <button
              onClick={() => setIsOpen(false)}
              className="text-secondary/50 hover:text-secondary transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          <p className="text-secondary/70 mb-4 text-sm">Have questions about global expansion? We&#39;re here to help!</p>
          <a
            href="mailto:info@rotomskis.com"
            className="block w-full px-4 py-2 bg-primary text-white rounded-lg text-center font-semibold hover:shadow-lg transition-all"
          >
            Email Us
          </a>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  )
}
