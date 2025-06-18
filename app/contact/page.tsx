"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap/dist/gsap"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, Clock } from "lucide-react"
import LanguageSwitcher from "@/components/language-switcher"
import MobileMenu from "@/components/mobile-menu"
import ContactForm from "@/components/contact-form"
import Breadcrumb from "@/components/breadcrumb"

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
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">DOLINVESTE</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              {t("nav.home")}
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              {t("nav.about")}
            </Link>
            <Link href="/contact" className="text-blue-600 font-medium">
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
      <section
        ref={heroRef}
        className="relative h-96 flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/images/contact-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
          <h1 ref={titleRef} className="text-4xl md:text-5xl font-bold mt-4">
            {t("contact.form.pageTitle")}
          </h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Footer */}
      <footer className="bg-white py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">D</span>
                </div>
                <span className="text-xl font-bold text-gray-900">DOLINVESTE</span>
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
                  <Link href="/contact" className="hover:text-blue-600">
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
