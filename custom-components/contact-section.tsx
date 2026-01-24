"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Check, MailCheck } from "lucide-react"
import HeaderTitle from "./header-title"
import { ConnectSection } from "./connect-section"

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
    <section id="contact" className="mt-14 pb-16 bg-white relative overflow-hidden">
   
    

        
<ConnectSection/>
    
 
    </section>
  )
}
