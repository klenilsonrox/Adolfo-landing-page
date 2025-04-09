"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Testimonials() {
  const testimonials = [
    {
      name: "Ricardo Almeida",
      avatar: "RA",
      role: "Empresário",
      content:
        "O Dr. Adolfo foi fundamental na resolução de um complexo litígio empresarial. Sua abordagem estratégica e conhecimento profundo do direito empresarial foram decisivos para o resultado positivo.",
    },
    {
      name: "Mariana Costa",
      avatar: "MC",
      role: "Gerente de RH",
      content:
        "Contratamos o Dr. Adolfo para assessoria trabalhista da nossa empresa. Seu trabalho preventivo reduziu significativamente nossos processos e trouxe mais segurança jurídica para nossas operações.",
    },
    {
      name: "Paulo Ribeiro",
      avatar: "PR",
      role: "Cliente Particular",
      content:
        "Precisei de assistência em um processo de divórcio complicado. O Dr. Adolfo conduziu tudo com profissionalismo e empatia, garantindo que meus direitos fossem respeitados em um momento difícil.",
    },
  ]

  return (
    <section id="depoimentos" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Depoimentos</h2>
          <div className="mx-auto h-1 w-20 bg-amber-500"></div>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Veja o que meus clientes têm a dizer sobre os resultados alcançados.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">"{testimonial.content}"</p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${testimonial.avatar}`} />
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{testimonial.name}</p>
                      <p className="text-xs text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
