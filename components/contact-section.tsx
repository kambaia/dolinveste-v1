"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

gsap.registerPlugin(ScrollTrigger)

export default function ContactSection() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 80, scale: 0.9 }, // Começa mais embaixo, menor e invisível
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gray-100">
      <div ref={contentRef} className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{t("contact.title")}</h2>
        <div className="w-16 h-1 bg-[#2D2A8C] mx-auto mb-8"></div>
        <Button size="lg" className="bg-[#2D2A8C] hover:bg-blue-700 text-lg px-8 py-3">
          {t("contact.cta")}
        </Button>
      </div>
    </section>
  )
}
