"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useTranslation } from "react-i18next"


gsap.registerPlugin(ScrollTrigger)
export default function SpecialtiesSection() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLDivElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
 
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
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

      gsap.fromTo(
        rightRef.current,
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white shadow-sm">
      <div className="mx-auto max-w-[1440px] px-3 py-4 flex flex-col items-center justify-between">
        <div className="grid lg:grid-cols-2 gap-28 items-center">
          {/* Left Side - Primary Specialty */}
          <div ref={leftRef} className="space-y-6">
            <div>
              <p className="text-primary text-sm uppercase tracking-wide mb-2">{t("specialties.primary.label")}</p>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{t("specialties.primary.title")}</h3>
              <div className="w-16 m-auto md:m-0 h-1 bg-primary mb-6"></div>
              <p className="text-gray-600 leading-relaxed">{t("specialties.primary.description")}</p>
            </div>
            <div className="mt-8">
              <img
                src="/images/project-management.jpg"
                alt="Project Management"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right Side - Secondary Specialty */}
          <div ref={rightRef} className="space-y-6">
            <div className="mb-8">
              <img src="/images/team-work.jpg" alt="Team Work" className="w-full rounded-lg shadow-lg" />
            </div>
            <div className="">
              <p className="text-primary text-sm uppercase tracking-wide mb-2">{t("specialties.secondary.label")}</p>
              <h3 className="text-3xl text-center md:text-left font-bold text-gray-900 mb-4">{t("specialties.secondary.title")}</h3>
              <div className="w-16 m-auto md:m-0 h-1 bg-primary mb-6"></div>
              <p className="text-gray-600 leading-relaxed">{t("specialties.secondary.description")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
