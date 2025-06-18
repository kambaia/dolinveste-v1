"use client"

import { useState, useRef, useEffect } from "react"
import { gsap } from "gsap/dist/gsap"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/contexts language-context"


export default function LanguageSwitcher() {
  const { currentLanguage, changeLanguage, availableLanguages } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      gsap.fromTo(
        dropdownRef.current,
        { opacity: 0, y: -10, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.2, ease: "power2.out" }
      )
    }
  }, [isOpen])

  const currentLang = availableLanguages.find((lang: any) => lang.code === currentLanguage)

  const handleLanguageChange = (langCode: string) => {
    changeLanguage(langCode)
    setIsOpen(false)
  }

  const getFlag = (code: string) => {
    return code === "pt" ? "/logos/angola.svg" : "/logos/usa.svg"
  }

  return (
    <div className="relative hidden md:block">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 hover:bg-gray-100"
      >
        <img
          src={getFlag(currentLang?.code || "en")}
          alt={currentLang?.code === "pt" ? "Bandeira de Angola" : "Bandeira dos EUA"}
          className="w-6 h-4"
        />
        <span className="font-medium">{currentLang?.code.toUpperCase()}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />

          {/* Dropdown */}
          <div
            ref={dropdownRef}
            className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border z-20"
          >
            <div className="py-2">
              {availableLanguages.map((lang: any) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`flex items-center space-x-3 w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                    currentLanguage === lang.code ? "bg-blue-50 text-blue-600" : "text-gray-700"
                  }`}
                >
                  <span className="font-medium">{lang.name}</span>
                  <img
                    src={getFlag(lang.code)}
                    alt={`Bandeira de ${lang.code.toUpperCase()}`}
                    className="w-6 h-4"
                  />
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
