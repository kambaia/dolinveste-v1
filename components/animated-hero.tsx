"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap/dist/gsap"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

export default function AnimatedHero() {
  const { t } = useTranslation()
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      // Animate title
      tl.fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })

      // Animate subtitle
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5",
      )

      // Animate button
      tl.fromTo(
        buttonRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.3",
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative h-[80vh] flex items-center justify-center text-center text-white bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 container mx-auto px-4">
        <h1 ref={titleRef} className="text-5xl md:text-6xl font-bold mb-4">
          {t("hero.title")}
        </h1>
        <h2 ref={subtitleRef} className="text-3xl md:text-4xl font-bold mb-8">
          {t("hero.subtitle")}
        </h2>
        <div ref={buttonRef}>
          <Button size="lg" className="bg-primary hover:bg-hove_primary text-lg px-8 py-3">
            {t("hero.cta")}
          </Button>
        </div>
      </div>
    </section>
  )
}
