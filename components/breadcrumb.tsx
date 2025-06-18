"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap/dist/gsap"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "react-i18next"

interface BreadcrumbProps {
  items: { label: string; href?: string }[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const { t } = useTranslation()
  const breadcrumbRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(breadcrumbRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.5 })
    })

    return () => ctx.revert()
  }, [])

  return (
    <nav ref={breadcrumbRef} className="flex items-center space-x-2 text-white text-sm">
      {items.map((item, index) => (
        <div key={index} className="flex items-center py-4">
          {index > 0 && <ChevronRight className="h-4 w-4 mx-2" />}
          {item.href ? (
            <Link href={item.href} className="hover:text-blue-200 transition-color text-xl">
              {item.label}
            </Link>
          ) : (
            <span className="text-blue-200">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}
