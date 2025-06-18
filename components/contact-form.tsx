"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useTranslation } from "react-i18next"
import { Mail, CheckCircle, AlertCircle } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

interface FormData {
  fullName: string
  email: string
  subject: string
  message: string
}

export default function ContactForm() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const formRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate form from right
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
          },
        },
      )

      // Animate image from left
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.2,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
          },
        },
      )
    })

    return () => ctx.revert()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Simulate success/error randomly for demo
      const success = Math.random() > 0.3

      if (success) {
        setSubmitStatus("success")
        setFormData({
          fullName: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Team Image */}
          <div ref={imageRef} className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="/images/contact-team.jpg"
                alt="DolInveste Team"
                className="w-full rounded-lg shadow-2xl"
                style={{ maxHeight: "600px", objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef} className="order-1 lg:order-2">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">{t("contact.form.title")}</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="fullName"
                    placeholder={t("contact.form.fullName")}
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder={t("contact.form.email")}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder={t("contact.form.subject")}
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder={t("contact.form.message")}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium"
                >
                  {isSubmitting ? t("contact.form.sending") : t("contact.form.send")}
                </Button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg">
                    <CheckCircle className="h-5 w-5" />
                    <span>{t("contact.form.success")}</span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
                    <AlertCircle className="h-5 w-5" />
                    <span>{t("contact.form.error")}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
