"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useTranslation } from "react-i18next"
import { Lock, Shield, Server } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)
export default function ServicesSection() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
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
              delay: index * 0.2,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
              },
            },
          )
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const services = [
    {
      icon: <Lock className="h-16 w-16 text-primary mx-auto mb-6" />,
      title: t("services.investment.title"),
      description: t("services.investment.description"),
    },
    {
      icon: <Shield className="h-16 w-16 text-primary mx-auto mb-6" />,
      title: t("services.security.title"),
      description: t("services.security.description"),
    },
    {
      icon: <Server className="h-16 w-16 text-primary mx-auto mb-6" />,
      title: t("services.infrastructure.title"),
      description: t("services.infrastructure.description"),
    },
  ]

  return (
    <section ref={sectionRef} className="bg-white shadow-sm">
      <div className="mx-auto max-w-[1440px] px-3 py-4 flex flex-col items-center justify-between">
        <div className="text-center mb-4">
          <p className="text-gray-600 text-sm uppercase tracking-wide mb-2">{t("services.subtitle")}</p>
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {t("services.title")}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-16">{t("services.description")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el:any) => (cardsRef.current[index] = el)}
              className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              {service.icon}
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
