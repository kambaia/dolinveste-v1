"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useTranslation } from "react-i18next"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const testimonials = [
  {
    name: "Maria Silva",
    role: "Empresária",
    content:
      "A DolInveste transformou minha forma de investir. Em 2 anos, consegui diversificar minha carteira e obter retornos consistentes.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "João Santos",
    role: "Engenheiro",
    content: "Plataforma intuitiva e suporte excepcional. Recomendo para quem quer investir em dólar com segurança.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Ana Costa",
    role: "Médica",
    content: "Excelente rentabilidade e transparência total. A equipe sempre disponível para esclarecer dúvidas.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Carlos Oliveira",
    role: "Advogado",
    content: "Investir nunca foi tão fácil. Interface moderna e resultados que superam minhas expectativas.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export default function TestimonialsCarousel() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("testimonials.title")}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("testimonials.subtitle")}</p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .testimonials-swiper .swiper-pagination-bullet {
          background-color: #16a34a;
        }
        .testimonials-swiper .swiper-button-next,
        .testimonials-swiper .swiper-button-prev {
          color: #16a34a;
        }
      `}</style>
    </section>
  )
}
