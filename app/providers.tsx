"use client"


import { LanguageProvider } from "@/contexts language-context"
import "@/lib/i18n"

export function Providers({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>
}
