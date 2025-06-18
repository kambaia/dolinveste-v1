"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap/dist/gsap"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, Clock } from "lucide-react"
import LanguageSwitcher from "@/components/language-switcher"
import MobileMenu from "@/components/mobile-menu"
import Breadcrumb from "@/components/breadcrumb"
import HowWeServeSection from "@/components/how-we-serve-section"
import WhoWeAreSection from "@/components/who-we-are-section"
import InspirationSection from "@/components/inspiration-section"
import Header from "@/components/Header"
import Footer from "@/components/footer"
import ContactSection from "@/components/contact-section"

export default function AboutPage() {
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

  const breadcrumbItems = [{ label: t("about.breadcrumb.home"), href: "/" }, { label: t("about.breadcrumb.about") }]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-96 flex items-center justify-center text-center text-white
             bg-[url('/images/hero-bg.jpg')] bg-cover bg-top bg-no-repeat"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4 flex justify-center flex-col items-center">
          <h1 ref={titleRef} className="text-4xl md:text-5xl font-bold mt-4">
            {t("about.pageTitle")}
          </h1>
          <Breadcrumb items={breadcrumbItems} />

        </div>
      </section>



      {/* Who We Are Section */}
      <WhoWeAreSection />
      {/* How We Serve Section */}
      <HowWeServeSection />
      {/* Inspiration Section */}
      <InspirationSection />
      <ContactSection />

      {/* Footer */}
      <Footer />

    </div>
  )
}
