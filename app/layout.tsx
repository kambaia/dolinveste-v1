
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DolInveste - Gestão de Investimentos | Investment Management",
  description:
    "Gerenciamento de investimentos é nosso core business. Tecnologia e inovação para seus investimentos em dólar.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <html lang="pt-PT">
      <body>
         <Providers>{children}</Providers>
      </body>
    </html>
  )
}
