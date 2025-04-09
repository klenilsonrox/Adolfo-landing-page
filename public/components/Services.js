"use client"

import { motion } from "framer-motion"
import { Scale, Briefcase, FileText, Building } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Services() {
  const services = [
    {
      icon: <Scale className="h-10 w-10 text-amber-500" />,
      title: "Direito Civil",
      description:
        "Assessoria jurídica em questões familiares, contratos, responsabilidade civil, direitos do consumidor e propriedade.",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-amber-500" />,
      title: "Direito Trabalhista",
      description:
        "Representação de empregados e empregadores em processos trabalhistas, negociações e acordos coletivos.",
    },
    {
      icon: <FileText className="h-10 w-10 text-amber-500" />,
      title: "Direito Tributário",
      description:
        "Consultoria e representação em questões fiscais, planejamento tributário e defesa em processos administrativos.",
    },
    {
      icon: <Building className="h-10 w-10 text-amber-500" />,
      title: "Direito Empresarial",
      description:
        "Assessoria jurídica para empresas, incluindo constituição, contratos comerciais, fusões e aquisições.",
    },
  ]

  return (
    <section id="servicos" className="bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Meus Serviços</h2>
          <div className="mx-auto h-1 w-20 bg-amber-500"></div>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Ofereço atendimento personalizado para resolver seus problemas jurídicos com eficiência e segurança.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader className="flex items-center justify-center pt-6">
                  <div className="mb-4 rounded-full bg-amber-100 p-3">{service.icon}</div>
                  <CardTitle className="text-center text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
