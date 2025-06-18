"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

interface LanguageContextType {
  currentLanguage: string
  changeLanguage: (lang: string) => void
  availableLanguages: { code: string; name: string; flag: string }[]
  isLoading:boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation()
  const [currentLanguage, setCurrentLanguage] = useState("pt")
  const [isLoading, setIsLoading] = useState(true)

  const availableLanguages = [
    { code: "pt", name: "Português", flag: "🇦🇴" },
    { code: "en", name: "English", flag: "🇺🇸" },
  ]

  useEffect(() => {
    const initializeLanguage = async () => {
      const savedLanguage = localStorage.getItem("dolinveste-language")
      const browserLanguage = navigator.language.split("-")[0]
      const initialLanguage = savedLanguage || (["pt", "en"].includes(browserLanguage) ? browserLanguage : "pt")

      await i18n.changeLanguage(initialLanguage)
      setCurrentLanguage(initialLanguage)
      document.documentElement.lang = initialLanguage === "pt" ? "pt-PT" : "en-US"
      setIsLoading(false)
    }

    initializeLanguage()
  }, [i18n])

  const changeLanguage = async (lang: string) => {
    try {
      await i18n.changeLanguage(lang)
      setCurrentLanguage(lang)
      localStorage.setItem("dolinveste-language", lang)
      document.documentElement.lang = lang === "pt" ? "pt-PT" : "en-US"
    } catch (error) {
      console.error("Error changing language:", error)
    }
  }

  const value = {
    currentLanguage,
    changeLanguage,
    availableLanguages,
    isLoading
  }

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-gray-600">
        <span className="animate-pulse text-lg">Carregando idioma...</span>
      </div>
    )
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
