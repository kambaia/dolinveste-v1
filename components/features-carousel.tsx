"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards, Autoplay } from "swiper/modules"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Shield, Users, DollarSign, BarChart3, Headphones } from "lucide-react"
import { useTranslation } from "react-i18next"

import "swiper/css"
import "swiper/css/effect-cards"

const features = [
  {
    icon: TrendingUp,
    titleKey: "features.profitability.title",
    descriptionKey: "features.profitability.description",
    color: "text-green-600",
  },
  {
    icon: Shield,
    titleKey: "features.security.title",
    descriptionKey: "features.security.description",
    color: "text-blue-600",
  },
  {
    icon: Users,
    titleKey: "features.support.title",
    descriptionKey: "features.support.description",
    color: "text-purple-600",
  },
  {
    icon: DollarSign,
    titleKey: "Taxas Competitivas",
    descriptionKey: "As menores taxas do mercado para maximizar seus retornos",
    color: "text-yellow-600",
  },
  {
    icon: BarChart3,
    titleKey: "Análises Avançadas",
    descriptionKey: "Relatórios detalhados e insights para otimizar sua estratégia",
    color: "text-red-600",
  },
  {
    icon: Headphones,
    titleKey: "Suporte 24/7",
    descriptionKey: "Atendimento especializado disponível a qualquer momento",
    color: "text-indigo-600",
  },
]

export default function FeaturesCarousel() {
  const { t } = useTranslation()

  return (
    <div className="w-full max-w-sm mx-auto">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="features-swiper"
      >
        {features.map((feature, index) => {
          const IconComponent = feature.icon
          return (
            <SwiperSlide key={index}>
              <Card className="h-64 flex flex-col justify-center">
                <CardHeader className="text-center">
                  <IconComponent className={`h-12 w-12 ${feature.color} mb-4 mx-auto`} />
                  <CardTitle className="text-xl">
                    {feature.titleKey.includes(".") ? t(feature.titleKey) : feature.titleKey}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {feature.descriptionKey.includes(".") ? t(feature.descriptionKey) : feature.descriptionKey}
                  </CardDescription>
                </CardHeader>
              </Card>
            </SwiperSlide>
          )
        })}
      </Swiper>

      <style jsx global>{`
        .features-swiper {
          width: 320px;
          height: 280px;
        }
        .features-swiper .swiper-slide {
          border-radius: 18px;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  )
}
