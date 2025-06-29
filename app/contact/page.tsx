"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap/dist/gsap"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import ContactForm from "@/components/contact-form"
import Breadcrumb from "@/components/breadcrumb"
import Header from "@/components/Header"
import Footer from "@/components/footer"

export default function ContactPage() {
  const { t } = useTranslation()
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate hero title
      gsap.fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.3 })
    })

    return () => ctx.revert()
  }, [])

  const breadcrumbItems = [
    { label: t("contact.breadcrumb.home"), href: "/" },
    { label: t("contact.breadcrumb.contact") },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-96 flex items-center justify-center text-center text-white
             bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4 flex justify-center flex-col items-center">
        
          <h1 ref={titleRef} className="text-4xl md:text-5xl font-bold mt-4">
            {t("contact.form.pageTitle")}
          </h1>
            <Breadcrumb items={breadcrumbItems} />
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Footer */}
     <Footer/>
    </div>
  )
}
