"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { ArrowLeft, Sparkles, Calendar, MessageCircle } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "1",
    name: "Consulta de Urología",
    duration: 30,
    description: "Evaluación médica completa y especializada del sistema urinario y reproductor masculino. Incluye historia clínica detallada, exploración física y plan de tratamiento personalizado.",
    category: "Consultas",
    benefits: [
      "Diagnóstico preciso y oportuno",
      "Evaluación integral del paciente",
      "Plan de tratamiento personalizado",
      "Atención con tecnología de vanguardia"
    ],
    indications: [
      "Problemas urinarios",
      "Dolor o molestias urológicas",
      "Prevención y chequeo anual",
      "Seguimiento de tratamientos"
    ]
  },
  {
    id: "2",
    name: "Consulta de Seguimiento",
    duration: 20,
    description: "Consulta médica de seguimiento para pacientes en tratamiento activo. Permite evaluar la evolución, ajustar medicamentos y resolver dudas sobre el tratamiento.",
    category: "Consultas",
    benefits: [
      "Monitoreo de la evolución",
      "Ajuste de tratamiento según respuesta",
      "Resolución de dudas y preocupaciones",
      "Continuidad en la atención"
    ],
    indications: [
      "Pacientes en tratamiento activo",
      "Control post-operatorio",
      "Seguimiento de medicamentos",
      "Evaluación de resultados"
    ]
  },
  {
    id: "3",
    name: "Consulta de Segunda Opinión",
    duration: 45,
    description: "Evaluación médica especializada para casos complejos o cuando se requiere una segunda opinión profesional. Análisis detallado del caso con enfoque multidisciplinario.",
    category: "Consultas",
    benefits: [
      "Análisis exhaustivo del caso",
      "Perspectiva médica especializada",
      "Alternativas de tratamiento",
      "Tranquilidad y confianza"
    ],
    indications: [
      "Casos complejos o complicados",
      "Necesidad de confirmar diagnóstico",
      "Evaluar opciones de tratamiento",
      "Búsqueda de alternativas"
    ]
  },
  {
    id: "4",
    name: "Salud Masculina Integral",
    duration: 30,
    description: "Evaluación completa de la salud masculina enfocada en el bienestar urológico, hormonal y reproductivo. Incluye evaluación de función sexual, hormonal y metabólica.",
    category: "Salud Masculina",
    benefits: [
      "Evaluación integral de la salud",
      "Detección temprana de problemas",
      "Mejora de la calidad de vida",
      "Prevención de enfermedades"
    ],
    indications: [
      "Disfunción eréctil",
      "Problemas de fertilidad",
      "Desequilibrios hormonales",
      "Prevención y bienestar masculino"
    ]
  },
  {
    id: "5",
    name: "Infecciones Urinarias",
    duration: 20,
    description: "Diagnóstico y tratamiento especializado de infecciones del tracto urinario (cistitis, uretritis, prostatitis). Tratamiento con antibióticos dirigidos y seguimiento personalizado.",
    category: "Tratamientos",
    benefits: [
      "Diagnóstico preciso mediante cultivos",
      "Tratamiento dirigido y efectivo",
      "Prevención de complicaciones",
      "Alivio rápido de síntomas"
    ],
    indications: [
      "Dolor al orinar",
      "Ardor o escozor",
      "Orina con mal olor",
      "Sangre en la orina",
      "Urgencia urinaria frecuente"
    ]
  },
  {
    id: "6",
    name: "Hiperplasia Prostática Benigna (HPB)",
    duration: 60,
    description: "Tratamiento integral del crecimiento prostático benigno mediante medicamentos, procedimientos mínimamente invasivos o cirugía según el caso. Mejora significativa de los síntomas urinarios.",
    category: "Tratamientos",
    benefits: [
      "Mejora del flujo urinario",
      "Reducción de síntomas urinarios",
      "Tratamientos mínimamente invasivos",
      "Mejor calidad de vida"
    ],
    indications: [
      "Dificultad para orinar",
      "Flujo urinario débil",
      "Goteo post-miccional",
      "Necesidad de orinar frecuentemente",
      "Despertar varias veces por la noche"
    ]
  },
  {
    id: "7",
    name: "Cálculos Renales (Litiasis Renal)",
    duration: 90,
    description: "Tratamiento avanzado de cálculos renales mediante técnicas de mínima invasión como litotricia extracorpórea, ureteroscopia láser o nefrolitotomía percutánea según el tamaño y ubicación.",
    category: "Cirugía",
    benefits: [
      "Técnicas de mínima invasión",
      "Recuperación más rápida",
      "Alta efectividad",
      "Menor dolor post-operatorio"
    ],
    indications: [
      "Dolor intenso en el costado",
      "Sangre en la orina",
      "Náuseas y vómito",
      "Cálculos que no se expulsan",
      "Infecciones recurrentes"
    ]
  },
  {
    id: "8",
    name: "Cirugía de Próstata",
    duration: 180,
    description: "Procedimientos quirúrgicos especializados para enfermedades prostáticas incluyendo resección transuretral (RTU), enucleación prostática con láser (HoLEP) y prostatectomía radical cuando es necesario.",
    category: "Cirugía",
    benefits: [
      "Tecnología láser de vanguardia",
      "Menor sangrado",
      "Recuperación más rápida",
      "Resultados duraderos"
    ],
    indications: [
      "Hiperplasia prostática severa",
      "Retención urinaria",
      "Cáncer de próstata",
      "Problemas prostáticos complejos"
    ]
  },
  {
    id: "9",
    name: "Vasectomía",
    duration: 30,
    description: "Procedimiento de esterilización masculina seguro y efectivo. Realizado con técnica de mínima invasión, sin puntos y con recuperación rápida. Método anticonceptivo permanente.",
    category: "Cirugía",
    benefits: [
      "Procedimiento ambulatorio",
      "Recuperación rápida",
      "Alta efectividad",
      "Sin puntos de sutura"
    ],
    indications: [
      "Anticoncepción permanente",
      "Planificación familiar",
      "Pacientes que no desean más hijos"
    ]
  },
  {
    id: "10",
    name: "Cirugía Láser de Cálculos Renales",
    duration: 90,
    description: "Fragmentación y extracción de cálculos renales mediante tecnología láser de última generación. Procedimiento endoscópico que permite tratar cálculos de cualquier tamaño con precisión.",
    category: "Cirugía",
    benefits: [
      "Tecnología láser de precisión",
      "Sin incisiones externas",
      "Recuperación rápida",
      "Alta tasa de éxito"
    ],
    indications: [
      "Cálculos renales grandes",
      "Cálculos que no responden a otros tratamientos",
      "Cálculos en ubicaciones complejas",
      "Pacientes que requieren tratamiento inmediato"
    ]
  },
  {
    id: "11",
    name: "Circuncisión Láser",
    duration: 45,
    description: "Circuncisión realizada con tecnología láser para menor invasión, menor sangrado y recuperación más rápida. Procedimiento seguro y efectivo con excelentes resultados estéticos.",
    category: "Cirugía",
    benefits: [
      "Menor sangrado",
      "Recuperación más rápida",
      "Mejor resultado estético",
      "Menor dolor post-operatorio"
    ],
    indications: [
      "Fimosis",
      "Parafimosis",
      "Infecciones recurrentes",
      "Indicación médica o personal"
    ]
  },
  {
    id: "12",
    name: "Cirugía para Incontinencia Urinaria",
    duration: 120,
    description: "Tratamiento quirúrgico especializado de la incontinencia urinaria mediante técnicas modernas como eslinges suburetrales, inyecciones de agentes de volumen o procedimientos reconstructivos.",
    category: "Cirugía",
    benefits: [
      "Mejora significativa de la continencia",
      "Técnicas mínimamente invasivas",
      "Mejor calidad de vida",
      "Resultados duraderos"
    ],
    indications: [
      "Incontinencia de esfuerzo",
      "Incontinencia de urgencia",
      "Pérdida involuntaria de orina",
      "Problemas de control urinario"
    ]
  },
  {
    id: "13",
    name: "Aumento de Pene con Ácido Hialurónico",
    duration: 60,
    description: "Procedimiento estético seguro para aumento del grosor del pene mediante inyección de ácido hialurónico. Resultados naturales y reversibles con mínima recuperación.",
    category: "Estética",
    benefits: [
      "Resultados naturales",
      "Procedimiento ambulatorio",
      "Recuperación rápida",
      "Reversible si se desea"
    ],
    indications: [
      "Aumento del grosor",
      "Mejora de la apariencia",
      "Aumento de la confianza",
      "Indicación estética personal"
    ]
  },
  {
    id: "14",
    name: "Cirugía Oncológica Urológica",
    duration: 240,
    description: "Tratamiento quirúrgico especializado para cáncer de riñón, próstata, vejiga y testículo. Cirugías oncológicas de alta complejidad con técnicas de preservación de función y mínima invasión cuando es posible.",
    category: "Oncología",
    benefits: [
      "Experiencia en cirugía oncológica",
      "Técnicas de preservación de función",
      "Enfoque multidisciplinario",
      "Seguimiento especializado"
    ],
    indications: [
      "Cáncer de próstata",
      "Cáncer de riñón",
      "Cáncer de vejiga",
      "Cáncer testicular",
      "Tumores urológicos"
    ]
  },
  {
    id: "15",
    name: "Tratamiento de Disfunción Eréctil con Ondas de Choque",
    duration: 30,
    description: "Terapia innovadora con ondas de choque de baja intensidad para el tratamiento de disfunción eréctil. Estimula la regeneración vascular y mejora el flujo sanguíneo sin medicamentos ni cirugía.",
    category: "Tratamientos",
    benefits: [
      "Tratamiento no invasivo",
      "Sin efectos secundarios",
      "Mejora del flujo sanguíneo",
      "Resultados duraderos"
    ],
    indications: [
      "Disfunción eréctil",
      "Problemas de erección",
      "Disminución de la rigidez",
      "Pacientes que no responden a medicamentos"
    ]
  },
  {
    id: "16",
    name: "Ultrasonido Urológico",
    duration: 30,
    description: "Estudio ecográfico completo y especializado del sistema urinario y reproductor. Permite evaluar riñones, vejiga, próstata y testículos de forma no invasiva y en tiempo real.",
    category: "Diagnóstico",
    benefits: [
      "Estudio no invasivo",
      "Resultados inmediatos",
      "Sin radiación",
      "Alta precisión diagnóstica"
    ],
    indications: [
      "Evaluación de riñones",
      "Problemas prostáticos",
      "Cálculos renales",
      "Masas o tumores",
      "Chequeo urológico"
    ]
  },
  {
    id: "17",
    name: "Cistoscopia",
    duration: 45,
    description: "Exploración endoscópica directa de la vejiga y uretra mediante cistoscopio flexible o rígido. Permite visualizar el interior del tracto urinario y realizar biopsias o tratamientos.",
    category: "Diagnóstico",
    benefits: [
      "Visualización directa",
      "Diagnóstico preciso",
      "Posibilidad de tratamiento simultáneo",
      "Procedimiento ambulatorio"
    ],
    indications: [
      "Sangre en la orina",
      "Infecciones recurrentes",
      "Tumores de vejiga",
      "Problemas urinarios persistentes"
    ]
  },
  {
    id: "18",
    name: "Uroflujometría",
    duration: 20,
    description: "Estudio funcional no invasivo que mide el flujo urinario. Permite evaluar la función de la vejiga y detectar obstrucciones del tracto urinario inferior.",
    category: "Diagnóstico",
    benefits: [
      "Estudio rápido y simple",
      "No invasivo",
      "Información funcional valiosa",
      "Sin molestias"
    ],
    indications: [
      "Flujo urinario débil",
      "Dificultad para orinar",
      "Evaluación prostática",
      "Problemas de vaciamiento"
    ]
  },
  {
    id: "19",
    name: "Análisis de PSA (Antígeno Prostático Específico)",
    duration: 15,
    description: "Análisis de sangre para medir los niveles de PSA, importante marcador para la detección temprana de cáncer de próstata y seguimiento de enfermedades prostáticas.",
    category: "Diagnóstico",
    benefits: [
      "Detección temprana",
      "Seguimiento de tratamientos",
      "Monitoreo de salud prostática",
      "Análisis rápido"
    ],
    indications: [
      "Chequeo prostático anual",
      "Sospecha de cáncer de próstata",
      "Seguimiento post-tratamiento",
      "Hombres mayores de 50 años"
    ]
  },
  {
    id: "20",
    name: "Perfil Urológico Completo",
    duration: 40,
    description: "Paquete integral de estudios de laboratorio y diagnóstico urológico. Incluye análisis de sangre, orina y estudios funcionales para una evaluación completa de la salud urológica.",
    category: "Diagnóstico",
    benefits: [
      "Evaluación integral",
      "Detección temprana de problemas",
      "Plan de tratamiento completo",
      "Ahorro de tiempo y recursos"
    ],
    indications: [
      "Chequeo urológico completo",
      "Evaluación pre-operatoria",
      "Seguimiento de salud urológica",
      "Búsqueda de diagnóstico"
    ]
  },
];

const categories = ["Todos", "Consultas", "Salud Masculina", "Tratamientos", "Cirugía", "Estética", "Oncología", "Diagnóstico"];

export default function ServiciosPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredServices = selectedCategory === "Todos" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-[#0056FF] via-[#0048E6] to-[#0039CC] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Volver al inicio</span>
            </Link>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>Servicios Especializados</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Nuestros <span className="text-white/90">Tratamientos</span>
            </h1>
            <div className="h-1.5 w-32 bg-white/30 mx-auto rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Diagnósticos oportunos y tratamientos de mínima invasión con tecnología de vanguardia y atención personalizada
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-[#E4E7EF] sticky top-20 z-40 backdrop-blur-md bg-white/95 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-[#0056FF] to-[#0048E6] text-white shadow-lg shadow-[#0056FF]/30"
                    : "bg-[#F5F7FB] text-[#1A1A1A] hover:bg-[#E4E7EF] border border-[#E4E7EF]"
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-gradient-to-b from-white via-[#F5F7FB] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-[#1A1A1A]/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                No hay servicios en esta categoría
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <ServiceCard service={service} />
                </motion.div>
              ))}
            </div>
          )}
          
          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-br from-[#0056FF] to-[#0048E6] rounded-[28px] p-12 text-white shadow-2xl max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                ¿Necesitas más información?
              </h3>
              <p className="text-xl text-white/90 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                Contáctanos para conocer más sobre nuestros tratamientos y agendar una consulta
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/reservar"
                  className="inline-flex items-center justify-center gap-3 bg-white text-[#0056FF] hover:bg-white/95 font-semibold px-8 py-4 rounded-[20px] shadow-xl hover:shadow-2xl transition-all duration-300"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <Calendar className="w-5 h-5" />
                  <span>Agendar Consulta</span>
                </Link>
                <a
                  href="https://wa.me/528711115149"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-8 py-4 rounded-[20px] shadow-xl hover:shadow-2xl transition-all duration-300"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
