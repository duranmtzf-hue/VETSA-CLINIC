"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "1",
    name: "Consulta de Urología",
    price: 800,
    duration: 30,
    description: "Consulta inicial con evaluación completa del sistema urinario y reproductor",
    category: "Consultas",
  },
  {
    id: "2",
    name: "Consulta de Seguimiento",
    price: 600,
    duration: 20,
    description: "Consulta de seguimiento para pacientes en tratamiento",
    category: "Consultas",
  },
  {
    id: "3",
    name: "Consulta de Segunda Opinión",
    price: 1000,
    duration: 45,
    description: "Evaluación especializada para casos complejos o segunda opinión médica",
    category: "Consultas",
  },
  {
    id: "4",
    name: "Salud Masculina",
    price: 1200,
    duration: 30,
    description: "Evaluación integral de la salud masculina y bienestar urológico",
    category: "Salud Masculina",
  },
  {
    id: "5",
    name: "Infecciones Urinarias",
    price: 2000,
    duration: 20,
    description: "Diagnóstico y tratamiento de infecciones del tracto urinario",
    category: "Tratamientos",
  },
  {
    id: "6",
    name: "Crecimiento Prostático",
    price: 15000,
    duration: 60,
    description: "Tratamiento de hiperplasia prostática benigna (HPB)",
    category: "Tratamientos",
  },
  {
    id: "7",
    name: "Cálculos Renales",
    price: 12000,
    duration: 90,
    description: "Tratamiento de litiasis renal mediante técnicas avanzadas",
    category: "Cirugía",
  },
  {
    id: "8",
    name: "Cirugía de Próstata",
    price: 30000,
    duration: 180,
    description: "Procedimientos quirúrgicos para enfermedades prostáticas",
    category: "Cirugía",
  },
  {
    id: "9",
    name: "Vasectomía",
    price: 4000,
    duration: 30,
    description: "Esterilización masculina mediante procedimiento quirúrgico",
    category: "Cirugía",
  },
  {
    id: "10",
    name: "Cirugía Láser de Cálculos Renales",
    price: 15000,
    duration: 90,
    description: "Fragmentación y extracción de cálculos renales con tecnología láser",
    category: "Cirugía",
  },
  {
    id: "11",
    name: "Circuncisión Láser",
    price: 5000,
    duration: 45,
    description: "Circuncisión realizada con tecnología láser para menor invasión",
    category: "Cirugía",
  },
  {
    id: "12",
    name: "Cirugía para Incontinencia Urinaria",
    price: 25000,
    duration: 120,
    description: "Tratamiento quirúrgico de la incontinencia urinaria",
    category: "Cirugía",
  },
  {
    id: "13",
    name: "Agrandamiento de Miembro con Ácido Hialurónico",
    price: 20000,
    duration: 60,
    description: "Procedimiento estético con ácido hialurónico para aumento de pene",
    category: "Estética",
  },
  {
    id: "14",
    name: "Cirugía para Cáncer de Riñón, Próstata y Vejiga",
    price: 50000,
    duration: 240,
    description: "Tratamiento quirúrgico oncológico urológico especializado",
    category: "Oncología",
  },
  {
    id: "15",
    name: "Tratamiento para Disfunción Eréctil con Ondas de Choque",
    price: 12000,
    duration: 30,
    description: "Terapia con ondas de choque para el tratamiento de disfunción eréctil",
    category: "Tratamientos",
  },
  {
    id: "16",
    name: "Ultrasonido Urológico",
    price: 1200,
    duration: 30,
    description: "Estudio ecográfico completo del sistema urinario y reproductor",
    category: "Diagnóstico",
  },
  {
    id: "17",
    name: "Cistoscopia",
    price: 3500,
    duration: 45,
    description: "Exploración endoscópica de la vejiga y uretra",
    category: "Diagnóstico",
  },
  {
    id: "18",
    name: "Uroflujometría",
    price: 800,
    duration: 20,
    description: "Estudio funcional del flujo urinario",
    category: "Diagnóstico",
  },
  {
    id: "19",
    name: "Análisis de PSA",
    price: 500,
    duration: 15,
    description: "Antígeno prostático específico para detección temprana",
    category: "Diagnóstico",
  },
  {
    id: "20",
    name: "Perfil Urológico Completo",
    price: 1500,
    duration: 40,
    description: "Paquete completo de estudios de laboratorio urológico",
    category: "Diagnóstico",
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
      
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/10 opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Volver al inicio</span>
            </Link>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white mb-6 leading-tight">
              Nuestros Tratamientos
            </h1>
            <div className="h-1.5 w-32 bg-amber-400 mx-auto rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
              Servicios urológicos especializados con tecnología de vanguardia y atención personalizada
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-slate-200 sticky top-20 z-40 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
