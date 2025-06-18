"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useTranslation } from "react-i18next"
gsap.registerPlugin(ScrollTrigger)
export default function SupportSection() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
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
    <section
      ref={sectionRef}
      className="relative py-20 text-white text-center"
      style={{
        backgroundImage: "url('/images/hands-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div ref={contentRef} className="relative z-10 container mx-auto px-4">
        <p className="text-sm uppercase tracking-wide mb-4">{t("support.title")}</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">{t("support.subtitle")}</h2>
        <div className="w-16 h-1 bg-white mx-auto mb-8"></div>
        <p className="text-lg max-w-4xl mx-auto">{t("support.description")}</p>
      </div>
    </section>
  )
}
