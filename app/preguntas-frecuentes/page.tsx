"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, ChevronDown, MessageCircle, Calendar } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "¿Qué es la urología y cuándo debo consultar a un urólogo?",
    answer: "La urología es la especialidad médica que se encarga del diagnóstico y tratamiento de enfermedades del sistema urinario (riñones, uréteres, vejiga, uretra) y del sistema reproductor masculino. Debes consultar a un urólogo si experimentas síntomas como dolor al orinar, sangre en la orina, problemas de próstata, disfunción eréctil, infertilidad masculina, o cualquier molestia relacionada con el tracto urinario."
  },
  {
    question: "¿La circuncisión láser es adecuada tanto para adultos como para niños?",
    answer: "Sí, la circuncisión láser es una opción muy eficaz y segura tanto para adultos como para niños. Al ser un procedimiento menos invasivo que la circuncisión tradicional, la recuperación es más rápida y el riesgo de complicaciones es menor. Si tienes dudas, podemos hablar sobre el procedimiento y decidir lo mejor para ti o tu hijo."
  },
  {
    question: "¿Cuáles son los síntomas comunes de los problemas urinarios y cómo se tratan?",
    answer: "Los síntomas de problemas urinarios incluyen dolor al orinar, necesidad frecuente de orinar, incontinencia urinaria, sangre en la orina, o dolor en la parte baja del abdomen. Dependiendo de lo que esté ocurriendo, el tratamiento puede ser médico, como medicamentos o fisioterapia pélvica, o incluso cirugía para problemas más graves."
  },
  {
    question: "¿Qué es la litiasis urinaria y qué tipo de cirugía se recomienda?",
    answer: "La litiasis urinaria, o piedras en los riñones, es la formación de cristales en el tracto urinario. Dependiendo de su tamaño y ubicación, podemos tratarla con medicamentos, o en algunos casos, se requiere un procedimiento como la litotricia (ondas de choque) para romper las piedras. En otros casos, es necesario realizar una cirugía láser o laparoscópica para extraerlas."
  },
  {
    question: "¿Cómo puedo prevenir las infecciones urinarias recurrentes?",
    answer: "Para evitar infecciones urinarias recurrentes, te recomiendo mantenerte bien hidratado, orinar con frecuencia, limpiar adecuadamente la zona genital y evitar productos irritantes. También, en algunos casos, puedo recetar un tratamiento preventivo, si es necesario."
  },
  {
    question: "¿Qué tratamientos ofrecen para la disfunción eréctil?",
    answer: "Ofrecemos diversos tratamientos para la disfunción eréctil, incluyendo terapia con ondas de choque, medicamentos orales, inyecciones, y en casos más complejos, procedimientos quirúrgicos. El tratamiento se adapta a cada paciente según su condición específica."
  },
  {
    question: "¿Aceptan seguros médicos?",
    answer: "Sí, aceptamos la mayoría de los seguros médicos privados. Te recomendamos contactarnos antes de tu cita para verificar la cobertura de tu seguro y los procedimientos que están incluidos."
  },
  {
    question: "¿Cuánto tiempo tarda la recuperación después de una cirugía urológica?",
    answer: "El tiempo de recuperación varía según el procedimiento. Las cirugías de mínima invasión (láser, laparoscópica) generalmente tienen una recuperación más rápida, de 1 a 2 semanas, mientras que procedimientos más complejos pueden requerir de 4 a 6 semanas. Durante tu consulta, te proporcionaré información detallada sobre el tiempo de recuperación esperado."
  },
  {
    question: "¿Qué debo llevar a mi primera consulta?",
    answer: "Para tu primera consulta, te recomendamos traer: estudios previos relacionados con tu condición (si los tienes), lista de medicamentos que estás tomando, información sobre tu historial médico, y cualquier pregunta que desees hacer. También es importante traer una identificación oficial y tu tarjeta de seguro médico (si aplica)."
  },
  {
    question: "¿Ofrecen consultas de segunda opinión?",
    answer: "Sí, ofrecemos consultas de segunda opinión para casos complejos o cuando los pacientes desean confirmar un diagnóstico o explorar opciones de tratamiento adicionales. Estas consultas incluyen una evaluación detallada de tu caso y una discusión sobre las mejores opciones de tratamiento disponibles."
  }
];

export default function PreguntasFrecuentesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#F5F7FB]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0056FF] via-[#002D6E] to-[#0056FF] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors group"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Volver al inicio</span>
            </Link>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Preguntas Frecuentes
            </h1>
            <div className="h-1.5 w-32 bg-white/30 mx-auto rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Encuentra respuestas a las preguntas más comunes sobre urología y nuestros tratamientos
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-[20px] shadow-md hover:shadow-lg transition-all duration-300 border border-[#E4E7EF] overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#F5F7FB] transition-colors"
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-[#1A1A1A] pr-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-6 h-6 text-[#0056FF] flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <p className="text-[#1A1A1A]/80 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-16 bg-gradient-to-br from-[#0056FF] to-[#002D6E] rounded-[25px] p-12 text-white text-center shadow-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                ¿Tienes más preguntas?
              </h2>
              <p className="text-xl text-white/90 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                Estamos aquí para ayudarte. Agenda una consulta y resuelve todas tus dudas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/reservar"
                  className="inline-flex items-center justify-center gap-3 bg-white text-[#0056FF] hover:bg-white/95 font-semibold px-10 py-5 rounded-[20px] shadow-xl hover:shadow-2xl transition-all duration-300"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <Calendar className="w-5 h-5" />
                  <span>Agendar Consulta</span>
                </Link>
                <a
                  href="https://wa.me/528711115149"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-10 py-5 rounded-[20px] shadow-xl hover:shadow-2xl transition-all duration-300"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Contactar por WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

