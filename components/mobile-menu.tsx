"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap/dist/gsap"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"
import { useLanguage } from "@/contexts language-context"

import Link from "next/link"

export default function MobileMenu() {
  const { t } = useTranslation()
  const { currentLanguage, changeLanguage, availableLanguages, isLoading } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden"

      // Animate menu opening
      const ctx = gsap.context(() => {
        gsap.set(menuRef.current, { x: "100%" })
        gsap.set(overlayRef.current, { opacity: 0 })

        const tl = gsap.timeline()
        tl.to(overlayRef.current, { opacity: 1, duration: 0.3 })
        tl.to(menuRef.current, { x: "0%", duration: 0.4, ease: "power3.out" }, "-=0.1")

        // Animate menu items
        itemsRef.current.forEach((item, index) => {
          if (item) {
            gsap.fromTo(item, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.3, delay: 0.1 + index * 0.1 })
          }
        })
      })

      return () => ctx.revert()
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const closeMenu = () => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setIsOpen(false),
      })
      tl.to(menuRef.current, { x: "100%", duration: 0.3, ease: "power3.in" })
      tl.to(overlayRef.current, { opacity: 0, duration: 0.2 }, "-=0.1")
    })
  }

  const handleLanguageChange = async (langCode: string) => {
    await changeLanguage(langCode)
    // Don't close menu immediately to show loading state
    setTimeout(() => {
      closeMenu()
    }, 300)
  }

  if (isLoading) {
    return (
      <Button variant="ghost" size="sm" className="md:hidden" disabled>
        <Menu className="h-6 w-6 opacity-50" />
      </Button>
    )
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(true)} aria-label="Open menu">
        <Menu className="h-6 w-6" />
      </Button>

      {/* Mobile Menu Overlay and Content */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div ref={overlayRef} className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden" onClick={closeMenu} />

          {/* Menu Content */}
          <div ref={menuRef} className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden">
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">D</span>
                  </div>
                  <span className="text-lg font-bold text-gray-900">OLINVESTE</span>
                </div>
                <Button variant="ghost" size="sm" onClick={closeMenu} aria-label="Close menu">
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 px-6 py-8">
                <ul className="space-y-6">
                  <li ref={(el:any) => (itemsRef.current[0] = el)}>
                    <Link
                      href="/"
                      className="block text-lg font-medium text-gray-700 hover:text-primary transition-colors"
                      onClick={closeMenu}
                    >
                      {t("nav.home")}
                    </Link>
                  </li>
                  <li ref={(el:any) => (itemsRef.current[1] = el)}>
                    <Link
                      href="/about"
                      className="block text-lg font-medium text-gray-700 hover:text-primary transition-colors"
                      onClick={closeMenu}
                    >
                      {t("nav.about")}
                    </Link>
                  </li>
                  <li ref={(el:any) => (itemsRef.current[2] = el)}>
                    <Link
                      href="/contact"
                      className="block text-lg font-medium text-gray-700 hover:text-primary transition-colors"
                      onClick={closeMenu}
                    >
                      {t("nav.contact")}
                    </Link>
                  </li>
                </ul>

                {/* Language Switcher */}
                <div ref={(el:any) => (itemsRef.current[3] = el)} className="mt-8 pt-8 border-t">
                  <p className="text-sm font-medium text-gray-500 mb-4">Idioma / Language</p>
                  <div className="space-y-3">
                    {availableLanguages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        disabled={isLoading}
                        className={`flex items-center space-x-3 w-full p-2 rounded-lg transition-colors disabled:opacity-50 ${
                          currentLanguage === lang.code ? "bg-blue-50 text-primary" : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <span className="text-xl">{lang.flag}</span>
                        <span className="font-medium">{lang.name}</span>
                        {currentLanguage === lang.code && <div className="ml-auto w-2 h-2 bg-primary rounded-full" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div ref={(el:any) => (itemsRef.current[4] = el)} className="mt-8 pt-8 border-t">
                  <p className="text-sm font-medium text-gray-500 mb-4">{t("contact.contacts")}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>{t("contact.info.email")}</p>
                    <p>{t("contact.info.phone")}</p>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  )
}
