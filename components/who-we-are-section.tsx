"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useTranslation } from "react-i18next"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

export default function WhoWeAreSection() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text from left
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      )

      // Animate image from right
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white shadow-sm">
      <div className="mx-auto max-w-[1440px] px-3 py-4 flex flex-col items-center justify-between">
        <div className="grid lg:grid-cols-2 gap-36 items-center">
          {/* Text Content */}
          <div ref={textRef} className="space-y-6">
            <div>
              <p className="text-blue-600 text-sm uppercase tracking-wide mb-2">{t("about.whoWeAre.subtitle")}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t("about.whoWeAre.title")}</h2>
              <div className="w-16 m-auto md:m-0 h-1 bg-blue-600 mb-8"></div>
              <p className="text-gray-600 leading-relaxed text-lg">{t("about.whoWeAre.description")}</p>
               <p className="text-gray-600 pt-2 leading-relaxed text-lg">{t("about.whoWeAre.description1")}</p>
            </div>
          </div>

          {/* Team Image */}
          <div ref={imageRef} className="relative">
            <div className="relative">
              <Image
                src="/images/about-office.jpg"
                alt="DolInveste Office"
                width={300} // ajuste conforme necessário
                height={800} // mantém a proporção
                className="w-full max-h-[600px] object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
