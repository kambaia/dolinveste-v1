"use client"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, Clock } from "lucide-react"
import LanguageSwitcher from "@/components/language-switcher"
import AnimatedHero from "@/components/animated-hero"
import ServicesSection from "@/components/services-section"
import SupportSection from "@/components/support-section"
import SpecialtiesSection from "@/components/specialties-section"
import ContactSection from "@/components/contact-section"
import "@/lib/i18n"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/footer"

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      
       <Header/>
      {/* Hero Section */}
      <AnimatedHero />
      {/* Services Section */}
      <ServicesSection />

      {/* Support Section */}
      <SupportSection />

      {/* Specialties Section */}
      <SpecialtiesSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer/>
    </div>
  )
}
