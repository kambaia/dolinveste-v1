"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useTranslation } from "react-i18next"

gsap.registerPlugin(ScrollTrigger)

export default function HowWeServeSection() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(
        titleRef.current,
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

      // Animate cards
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.1,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
              },
            },
          )
        }
      })
    })

    return () => ctx.revert()
  }, [])

  const services = [
    {
      title: t("about.howWeServe.expertise.title"),
      description: t("about.howWeServe.expertise.description"),
    },
    {
      title: t("about.howWeServe.heart.title"),
      description: t("about.howWeServe.heart.description"),
    },
    {
      title: t("about.howWeServe.diligence.title"),
      description: t("about.howWeServe.diligence.description"),
    },
    {
      title: t("about.howWeServe.solutions.title"),
      description: t("about.howWeServe.solutions.description"),
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16">
          <p className="text-gray-600 text-sm uppercase tracking-wide mb-2">{t("about.howWeServe.subtitle")}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{t("about.howWeServe.title")}</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} ref={(el:any) => (cardsRef.current[index] = el)} className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
