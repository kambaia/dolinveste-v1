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
import MobileMenu from "@/components/mobile-menu"

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <span className="text-2xl font-bold text-gray-900">
              <Image src="/images/logo_dol.png" alt="Logo da empresa" width={130} height={80} />
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              {t("nav.home")}
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              {t("nav.about")}
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              {t("nav.contact")}
            </Link>
          </nav>
         <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <AnimatedHero />

      {/* Features Title and Subtitle */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("features.title")}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("features.subtitle")}</p>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Support Section */}
      <SupportSection />

      {/* Specialties Section */}
      <SpecialtiesSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-white py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
               <span className="text-2xl font-bold text-gray-900">
              <Image src="/images/logo_dol.png" alt="Logo da empresa" width={110} height={80} />
            </span>
              </div>
              <p className="text-gray-600 mb-4">{t("contact.info.description")}</p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{t("contact.info.schedule")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{t("contact.info.weekend")}</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">{t("contact.quickLinks")}</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    {t("contact.about")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    {t("contact.contacts")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">{t("contact.services")}</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    {t("contact.organization")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    {t("contact.management")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">{t("contact.contacts")}</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>{t("contact.info.email")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>{t("contact.info.phone")}</span>
                </div>
                <div className="mt-4">
                  <p className="mb-2">{t("contact.info.social")}</p>
                  <div className="flex space-x-3">
                    <Facebook className="h-5 w-5 text-blue-600 hover:text-blue-700 cursor-pointer" />
                    <Instagram className="h-5 w-5 text-pink-600 hover:text-pink-700 cursor-pointer" />
                    <Twitter className="h-5 w-5 text-blue-400 hover:text-blue-500 cursor-pointer" />
                    <Youtube className="h-5 w-5 text-red-600 hover:text-red-700 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
