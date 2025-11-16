"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import Logo from "@/components/Logo";
import VeterinaryImageCard from "@/components/VeterinaryImageCard";
import { CalendarDays, MapPin, ArrowRight, Heart, Award, Users, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Componente para intentar múltiples extensiones de imagen automáticamente
function ImageWithAutoExtension({ baseName, alt, title, icon, delay }: { baseName: string; alt: string; title: string; icon: React.ReactNode; delay?: number }) {
  const [imageSrc, setImageSrc] = useState(`/images/${baseName}.jpg`);
  const extensions = ['.jpg', '.jpeg', '.png', '.webp', '.JPG', '.JPEG', '.PNG', '.WEBP'];

  useEffect(() => {
    let currentIndex = 0;
    const tryNextExtension = () => {
      if (currentIndex < extensions.length) {
        const testSrc = `/images/${baseName}${extensions[currentIndex]}`;
        const img = new window.Image();
        
        img.onload = () => {
          setImageSrc(testSrc);
        };
        
        img.onerror = () => {
          currentIndex++;
          tryNextExtension();
        };
        
        img.src = testSrc;
      }
    };
    
    tryNextExtension();
  }, [baseName]);

  return (
    <VeterinaryImageCard
      src={imageSrc}
      alt={alt}
      title={title}
      icon={icon}
      delay={delay}
    />
  );
}

const services = [
  // CLÍNICA
  {
    id: "1",
    name: "Consulta General",
    price: 300,
    duration: 30,
    description: "Examen médico completo, diagnóstico y evaluación de salud",
    category: "Clínica",
  },
  {
    id: "2",
    name: "Consulta Preventiva",
    price: 949,
    duration: 45,
    description: "Consulta preventiva completa con análisis y evaluación detallada",
    category: "Clínica",
  },
  {
    id: "3",
    name: "Profilaxis",
    price: 1249,
    duration: 60,
    description: "Limpieza dental profesional con ultrasonido y pulido",
    category: "Clínica",
  },
  {
    id: "4",
    name: "Canalizar",
    price: 350,
    duration: 20,
    description: "Colocación de vía intravenosa para tratamiento o hidratación",
    category: "Clínica",
  },
  {
    id: "5",
    name: "Internamiento",
    price: 890,
    duration: 1440,
    description: "Hospitalización con monitoreo continuo y cuidados especializados",
    category: "Clínica",
  },
  {
    id: "6",
    name: "Muestra de Sangre",
    price: 1149,
    duration: 15,
    description: "Extracción de muestra sanguínea para análisis de laboratorio",
    category: "Clínica",
  },
  {
    id: "7",
    name: "Examen de Laboratorio",
    price: 295,
    duration: 30,
    description: "Análisis clínicos completos para diagnóstico",
    category: "Clínica",
  },
  // ESTÉTICA
  {
    id: "8",
    name: "Estética Pequeño",
    price: 155,
    duration: 60,
    description: "Baño, corte de pelo, corte de uñas y limpieza de oídos para mascotas pequeñas (hasta 10kg)",
    category: "Estética",
  },
  {
    id: "9",
    name: "Estética Mediano",
    price: 230,
    duration: 90,
    description: "Baño, corte de pelo, corte de uñas y limpieza de oídos para mascotas medianas (11-25kg)",
    category: "Estética",
  },
  {
    id: "10",
    name: "Estética Grande",
    price: 320,
    duration: 120,
    description: "Baño, corte de pelo, corte de uñas y limpieza de oídos para mascotas grandes (más de 25kg)",
    category: "Estética",
  },
  // ESTÉTICA PLUS+
  {
    id: "11",
    name: "Estética Plus+ Pequeño",
    price: 210,
    duration: 75,
    description: "Servicio completo plus con tratamientos adicionales para mascotas pequeñas",
    category: "Estética Plus+",
  },
  {
    id: "12",
    name: "Estética Plus+ Mediano",
    price: 300,
    duration: 105,
    description: "Servicio completo plus con tratamientos adicionales para mascotas medianas",
    category: "Estética Plus+",
  },
  {
    id: "13",
    name: "Estética Plus+ Grande",
    price: 724,
    duration: 150,
    description: "Servicio completo plus con tratamientos adicionales para mascotas grandes",
    category: "Estética Plus+",
  },
  // HOTEL
  {
    id: "14",
    name: "Hotel Cuarto Chico",
    price: 330,
    duration: 1440,
    description: "Hospedaje nocturno en cuarto pequeño con cuidados básicos",
    category: "Hotel",
  },
  {
    id: "15",
    name: "Hotel Cuarto Grande",
    price: 400,
    duration: 1440,
    description: "Hospedaje nocturno en cuarto grande con espacio amplio",
    category: "Hotel",
  },
  {
    id: "16",
    name: "Hotel Cuarto Compartido (2)",
    price: 280,
    duration: 1440,
    description: "Hospedaje compartido para 2 mascotas con descuento por compartir espacio",
    category: "Hotel",
  },
  // PENSIÓN
  {
    id: "17",
    name: "Pensión Jaula Chica",
    price: 180,
    duration: 1440,
    description: "Guardería diaria en jaula pequeña para mascotas pequeñas",
    category: "Pensión",
  },
  {
    id: "18",
    name: "Pensión Jaula Grande",
    price: 250,
    duration: 1440,
    description: "Guardería diaria en jaula grande para mascotas medianas y grandes",
    category: "Pensión",
  },
  // VACUNAS
  {
    id: "19",
    name: "Vanguard Plus 5",
    price: 260,
    duration: 15,
    description: "Vacuna múltiple que protege contra 5 enfermedades principales",
    category: "Vacunas",
  },
  {
    id: "20",
    name: "Vanguard Plus 6",
    price: 270,
    duration: 15,
    description: "Vacuna múltiple que protege contra 6 enfermedades principales",
    category: "Vacunas",
  },
  {
    id: "21",
    name: "Vacuna Giardia",
    price: 285,
    duration: 15,
    description: "Protección contra la infección por Giardia",
    category: "Vacunas",
  },
  {
    id: "22",
    name: "Vacuna Bordetella",
    price: 255,
    duration: 15,
    description: "Protección contra Bordetella (tos de las perreras)",
    category: "Vacunas",
  },
  {
    id: "23",
    name: "Vacuna Rabia",
    price: 210,
    duration: 15,
    description: "Vacuna obligatoria contra la rabia (requisito legal)",
    category: "Vacunas",
  },
  {
    id: "24",
    name: "Desparasitante",
    price: 180,
    duration: 15,
    description: "Tratamiento para eliminar parásitos internos y externos",
    category: "Vacunas",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary to-secondary/20 overflow-hidden pt-20">
        {/* Imagen de fondo - doctora */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat" 
          style={{ 
            backgroundImage: "url('/images/doctora.png')",
            backgroundPosition: "center top",
            backgroundSize: "cover"
          }}
        ></div>
        {/* Overlay oscuro para mejorar la legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-primary/80"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-8 flex justify-center">
              <Logo size="lg" showTagline={true} />
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 font-light px-4">
              Cuidado veterinario profesional para tu mejor amigo
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4"
            >
              <Link
                href="/reservar"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg transition-all duration-300 text-base sm:text-lg"
              >
                <CalendarDays className="w-4 h-4 sm:w-5 sm:h-5" />
                Reservar Cita
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About VETSA Section */}
      <section id="sobre-nosotros" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            {/* Logo y título */}
            <div className="text-center mb-16">
              <div className="mb-6 flex justify-center">
                <Logo size="md" showTagline={true} />
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
                Sobre VETSA
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
            </div>

            {/* Contenido principal */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                <h3 className="text-3xl font-display font-bold text-primary mb-6">
                  Tu Clínica Veterinaria de Confianza en Torreón
                </h3>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    En <strong className="text-primary">VETSA</strong> nos dedicamos a brindar atención veterinaria de 
                    excelencia para tus mascotas. Con años de experiencia en Torreón, Coahuila, ofrecemos servicios 
                    integrales que combinan tecnología avanzada con un trato humano y compasivo.
                  </p>
                  <p>
                    Nuestro equipo de veterinarios altamente capacitados está comprometido con la salud y bienestar 
                    de tu mejor amigo, proporcionando diagnósticos precisos y tratamientos efectivos para diversas 
                    condiciones médicas.
                  </p>
                  <p>
                    Desde consultas generales hasta procedimientos quirúrgicos especializados, en VETSA encontrarás 
                    todo lo que tu mascota necesita para vivir una vida plena y saludable.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="aspect-[4/3] relative bg-gradient-to-br from-secondary/20 to-accent/20">
                    <Image
                      src="/images/weimaraner.webp"
                      alt="Veterinaria atendiendo a una mascota en VETSA"
                      fill
                      className="object-cover"
                      priority
                      unoptimized
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (target.parentElement) {
                          target.style.display = 'none';
                          const placeholder = document.createElement('div');
                          placeholder.className = 'absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary/20 to-accent/20';
                          placeholder.innerHTML = `
                            <div class="text-center p-8">
                              <svg class="w-24 h-24 mx-auto mb-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                              </svg>
                              <p class="text-gray-600 font-medium">Veterinaria atendiendo mascota</p>
                              <p class="text-sm text-gray-500 mt-2">Agregar imagen en /public/images/weimaraner.webp</p>
                            </div>
                          `;
                          target.parentElement.appendChild(placeholder);
                        }
                      }}
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-6"
              >
                <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-primary mb-2">Amor y Cuidado</h4>
                  <p className="text-gray-600 text-sm">
                    Tratamos a cada mascota con el cariño y respeto que merecen
                  </p>
                </div>

                <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-primary mb-2">Excelencia Médica</h4>
                  <p className="text-gray-600 text-sm">
                    Profesionales certificados con tecnología de vanguardia
                  </p>
                </div>

                <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-primary mb-2">Atención Personalizada</h4>
                  <p className="text-gray-600 text-sm">
                    Cada mascota recibe un tratamiento único y adaptado
                  </p>
                </div>

                <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-primary mb-2">Disponibilidad</h4>
                  <p className="text-gray-600 text-sm">
                    Horarios flexibles para tu comodidad
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Valores */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-primary to-secondary/20 rounded-2xl p-8 md:p-12 text-white"
            >
              <h3 className="text-3xl font-display font-bold mb-6 text-center">
                Nuestros Valores
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="text-xl font-display font-semibold mb-2">Compromiso</h4>
                  <p className="text-white/80">
                    Con la salud y bienestar de tu mascota
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-display font-semibold mb-2">Profesionalismo</h4>
                  <p className="text-white/80">
                    En cada servicio que ofrecemos
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-display font-semibold mb-2">Compasión</h4>
                  <p className="text-white/80">
                    Hacia los animales y sus familias
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios veterinarios de alta calidad
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
              Nuestra Clínica
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Instalaciones modernas y equipo profesional para el cuidado de tu mascota
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Imagen 1 - Clínica */}
            <VeterinaryImageCard
              src="/images/clinica.webp"
              alt="Instalaciones de la clínica VETSA"
              title="Nuestra Clínica"
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              }
              delay={0}
            />

            {/* Imagen 2 - Perros */}
            <VeterinaryImageCard
              src="/images/perros.png"
              alt="Mascotas felices en VETSA"
              title="Mascotas Felices"
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              }
              delay={0.1}
            />

            {/* Imagen 3 - Gatos - Atención Profesional */}
            <VeterinaryImageCard
              src="/images/gatos.webp"
              alt="Atención profesional a gatos en VETSA"
              title="Atención Profesional"
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
              }
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
                Nuestra Ubicación
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Visítanos en nuestras instalaciones
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="h-96 w-full">
                <iframe
                  src="https://www.google.com/maps?q=Calz+Saltillo+400+941,+Residencial+Campestre+la+Rosita,+27250+Torreón,+Coahuila&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Ubicación de VETSA Veterinaria - Torreón, Coahuila"
                ></iframe>
              </div>
              <div className="p-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-display font-semibold text-primary mb-2">
                      Dirección
                    </h3>
                    <p className="text-gray-600">
                      Calz Saltillo 400 941<br />
                      Residencial Campestre la Rosita<br />
                      27250 Torreón, Coah.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

