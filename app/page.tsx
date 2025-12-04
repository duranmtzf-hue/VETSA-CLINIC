"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, ArrowRight, Calendar, MessageCircle, Stethoscope, Heart, Award, Users, Clock, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const handleReservarClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/reservar");
  };

  return (
    <main className="min-h-screen bg-[#F5F7FB]">
      <Header />
      
      {/* Hero Section - Premium Clinic Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Premium Background - Azul petróleo/marino → blanco/gris claro */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D47A1] via-[#1565C0] to-[#E3F2FD]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-[#F5F7FB] to-transparent opacity-60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(13,71,161,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(21,101,192,0.1),transparent_60%)]"></div>
        
        <div className="container mx-auto px-6 lg:px-16 relative z-10 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-10 lg:space-y-12 order-2 lg:order-1"
            >
              {/* Main Title - Double Weight */}
              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  <span className="block font-black text-white">Urología de</span>
                  <span className="block font-extrabold text-white mt-2">
                    Alta Especialidad
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="text-lg md:text-xl lg:text-2xl font-light text-white/90 leading-tight"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Tecnología de vanguardia y atención personalizada
                </motion.p>
              </div>

              {/* Elegant Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="space-y-3"
              >
                <p className="text-sm md:text-base text-white/80 italic leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
                  Atención de excelencia médica certificada
                </p>
                <p className="text-base md:text-lg text-white/80 leading-snug max-w-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Atención urológica especializada con tecnología de vanguardia y un enfoque personalizado 
                  para tu bienestar integral.
                </p>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg">
                  <span className="text-sm font-semibold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>✓ Urólogo Certificado CONAMEU</span>
                </div>
                <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg">
                  <span className="text-sm font-semibold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>✓ Más de 3000 pacientes atendidos</span>
                </div>
                <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg">
                  <span className="text-sm font-semibold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>✓ Miembro del Colegio Mexicano de Urología</span>
                </div>
              </motion.div>

              {/* Premium CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <button
                  onClick={handleReservarClick}
                  className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-white/95 text-[#0D47A1] font-semibold px-8 py-4 rounded-[20px] shadow-xl hover:shadow-2xl transition-all duration-300 text-base lg:text-lg cursor-pointer transform hover:scale-[1.02]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <Calendar className="w-5 h-5" />
                  <span>Agendar Consulta</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="https://wa.me/528711115149"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-8 py-4 rounded-[20px] shadow-xl hover:shadow-2xl transition-all duration-300 text-base lg:text-lg transform hover:scale-[1.02]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Doctor Image with Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-center justify-center lg:justify-end order-1 lg:order-2"
            >
              <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
                {/* Premium background gradient behind photo */}
                <div className="absolute -top-16 -right-16 w-80 h-80 bg-gradient-to-br from-[#0D47A1]/30 via-[#1565C0]/20 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute -bottom-16 -left-16 w-96 h-96 bg-gradient-to-tr from-[#0D47A1]/25 via-transparent to-transparent rounded-full blur-3xl"></div>
                
                {/* Glassmorphism container */}
                <div className="relative group">
                  {/* Glassmorphism effect */}
                  <div 
                    className="relative aspect-[3/4] lg:aspect-[4/5] rounded-[40px] overflow-hidden"
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1) inset'
                    }}
                  >
                    <Image
                      src="/images/Doctor.jpg"
                      alt="Dr. Héctor Iván Martínez López - Urólogo Certificado en Torreón"
                      fill
                      className="object-cover object-center"
                      priority
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Subtle overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Floating Doctor Label */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-2xl px-6 py-4 shadow-2xl border border-white/50 z-20 min-w-[280px]"
                  >
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#0D47A1] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        🥼 Dr. Misael Rodríguez
                      </div>
                      <div className="text-sm text-[#1A1A1A]/70 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Urólogo de Alta Especialidad
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section with Timeline */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16"
            >
              {/* Left Column - About */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-[#0D47A1] rounded-[16px] flex items-center justify-center">
                    <Stethoscope className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Sobre el Doctor
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg text-[#1A1A1A]/80 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <p>
                    Soy el <strong className="text-[#0D47A1] font-semibold">Dr. Misael Rodríguez</strong>, cirujano urólogo especializado 
                    en el diagnóstico y tratamiento de enfermedades del sistema urinario y reproductor masculino. 
                    Con años de experiencia, brindo atención médica de excelencia en el <strong className="text-[#1A1A1A]">Hospital Andalucía</strong> de Torreón, Coahuila.
                  </p>
                  <p>
                    Mi práctica se enfoca en ofrecer tratamientos de vanguardia que combinan tecnología avanzada 
                    con un enfoque personalizado y compasivo. Desde consultas preventivas hasta procedimientos quirúrgicos 
                    especializados, incluyendo cirugía láser de mínima invasión, me comprometo a proporcionar 
                    la mejor atención para tu salud urológica.
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-4 mt-10 pt-8 border-t border-[#E4E7EF]">
                  <div className="flex items-center gap-2 px-5 py-2.5 bg-[#F5F7FB] rounded-full">
                    <div className="w-2 h-2 bg-[#0D47A1] rounded-full"></div>
                    <span className="text-sm font-semibold text-[#1A1A1A]">Cirujano Urólogo Certificado</span>
                  </div>
                  <div className="flex items-center gap-2 px-5 py-2.5 bg-[#F5F7FB] rounded-full">
                    <MapPin className="w-4 h-4 text-[#0D47A1]" />
                    <span className="text-sm font-semibold text-[#1A1A1A]">Hospital Andalucía, Torreón</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Timeline */}
              <div>
                <h3 className="text-3xl font-bold text-[#1A1A1A] mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Trayectoria Profesional
                </h3>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0D47A1] to-[#1565C0]"></div>
                  
                  {/* Timeline items */}
                  <div className="space-y-8">
                    {[
                      { year: "2014", title: "Médico Cirujano", institution: "UANL" },
                      { year: "2018", title: "Especialidad en Urología", institution: "" },
                      { year: "2020", title: "Certificado CONAMEU", institution: "" },
                      { year: "2021", title: "Alta especialidad en Endourología", institution: "" },
                      { year: "2025", title: "+3000 pacientes atendidos", institution: "" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative pl-16"
                      >
                        {/* Timeline dot */}
                        <div className="absolute left-4 top-2 w-4 h-4 bg-[#0D47A1] rounded-full border-4 border-white shadow-lg"></div>
                        
                        {/* Content */}
                        <div className="bg-white rounded-xl p-5 shadow-md border border-[#E4E7EF] hover:shadow-lg transition-shadow">
                          <div className="text-sm font-bold text-[#0D47A1] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {item.year}
                          </div>
                          <div className="text-base font-semibold text-[#1A1A1A] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {item.title}
                          </div>
                          {item.institution && (
                            <div className="text-sm text-[#1A1A1A]/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                              {item.institution}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatments Section - Redesigned */}
      <section className="py-32 bg-gradient-to-b from-white via-[#F5F7FB] to-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#0056FF] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0056FF] rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0056FF]/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#0056FF]" />
              <span className="text-sm font-semibold text-[#0056FF] uppercase tracking-wide">Tratamientos Especializados</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Nuestros <span className="text-[#0056FF]">Tratamientos</span>
            </h2>
            <p className="text-xl md:text-2xl text-[#1A1A1A]/70 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Diagnósticos oportunos y tratamientos de mínima invasión con tecnología de vanguardia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {[
              { 
                icon: Stethoscope, 
                title: "Consulta de Urología", 
                desc: "Evaluación médica completa y especializada del sistema urinario y reproductor masculino",
                features: ["Diagnóstico preciso", "Evaluación integral", "Plan personalizado", "Tecnología avanzada"]
              },
              { 
                icon: Heart, 
                title: "Salud Masculina Integral", 
                desc: "Evaluación completa de la salud masculina enfocada en bienestar urológico, hormonal y reproductivo",
                features: ["Evaluación integral", "Detección temprana", "Mejora calidad de vida", "Prevención"]
              },
              { 
                icon: Award, 
                title: "Infecciones Urinarias", 
                desc: "Diagnóstico y tratamiento especializado con antibióticos dirigidos y seguimiento personalizado",
                features: ["Diagnóstico preciso", "Tratamiento efectivo", "Alivio rápido", "Prevención"]
              },
              { 
                icon: Users, 
                title: "Hiperplasia Prostática", 
                desc: "Tratamiento integral del crecimiento prostático con medicamentos o procedimientos mínimamente invasivos",
                features: ["Mejora del flujo", "Técnicas avanzadas", "Mínima invasión", "Mejor calidad de vida"]
              },
              { 
                icon: Clock, 
                title: "Cálculos Renales", 
                desc: "Tratamiento avanzado mediante litotricia, ureteroscopia láser o nefrolitotomía percutánea",
                features: ["Mínima invasión", "Recuperación rápida", "Alta efectividad", "Tecnología láser"]
              },
              { 
                icon: Sparkles, 
                title: "Cirugía Láser", 
                desc: "Procedimientos quirúrgicos con tecnología láser de última generación para menor invasión y mejor recuperación",
                features: ["Tecnología láser", "Menor sangrado", "Recuperación rápida", "Resultados duraderos"]
              },
            ].map((treatment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-white to-[#F5F7FB] rounded-[28px] p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#E4E7EF] h-full flex flex-col relative overflow-hidden">
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0056FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[28px]"></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0056FF]/10 to-[#0056FF]/5 rounded-[20px] flex items-center justify-center mb-6 group-hover:from-[#0056FF] group-hover:to-[#0048E6] transition-all duration-500 shadow-md group-hover:shadow-xl">
                      <treatment.icon className="w-8 h-8 text-[#0056FF] group-hover:text-white transition-all duration-500" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4 group-hover:text-[#0056FF] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {treatment.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-[#1A1A1A]/80 leading-relaxed mb-6 text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {treatment.desc}
                    </p>
                    
                    {/* Features */}
                    {treatment.features && (
                      <ul className="space-y-2 mb-6">
                        {treatment.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-[#1A1A1A]/70">
                            <div className="w-1.5 h-1.5 bg-[#0056FF] rounded-full"></div>
                            <span style={{ fontFamily: 'Inter, sans-serif' }}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {/* CTA */}
                    <Link 
                      href="/servicios"
                      className="inline-flex items-center gap-2 text-[#0056FF] hover:text-[#0048E6] font-semibold text-sm transition-colors group/link mt-auto"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      <span>Conocer más</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <Link
              href="/servicios"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#0056FF] to-[#0048E6] hover:from-[#0048E6] hover:to-[#0039CC] text-white font-semibold px-10 py-5 rounded-[24px] shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <span>Ver todos los tratamientos</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-sm text-[#1A1A1A]/60 mt-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Consulta disponibilidad y costos personalizados
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - Google Reviews Style */}
      <section className="py-32 bg-[#F5F7FB]">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Testimonios de Pacientes
            </h2>
            <p className="text-xl text-[#1A1A1A]/70 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Experiencias reales de quienes han confiado en nosotros
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                name: "María G.",
                verified: true,
                text: "Excelente atención, resolvió todas mis dudas y el tratamiento funcionó perfecto."
              },
              {
                name: "Carlos S.",
                verified: true,
                text: "Muy profesional y atento. El mejor urólogo que he conocido. Totalmente recomendado."
              },
              {
                name: "Brenda R.",
                verified: true,
                text: "Excelente servicio. Muy profesional y con excelente trato hacia los pacientes."
              },
              {
                name: "Román H.",
                verified: true,
                text: "Excelente atención, muy profesional. Resolvió mi problema de manera eficiente."
              },
              {
                name: "Ramiro S.",
                verified: true,
                text: "Muy amables y profesionales. La atención fue de primera calidad."
              },
              {
                name: "Tania A.",
                verified: true,
                text: "Excelente trato y muy profesionales. 100% recomendables para cualquier consulta urológica."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-[#E4E7EF] transform hover:scale-[1.02]"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Comment */}
                <p className="text-[#1A1A1A]/80 leading-relaxed mb-4 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-2 pt-4 border-t border-[#E4E7EF]">
                  <span className="font-semibold text-[#1A1A1A] text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    — {testimonial.name}
                  </span>
                  {testimonial.verified && (
                    <div className="w-4 h-4 bg-[#0D47A1] rounded-full flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#F5F7FB]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#0D47A1] to-[#1565C0] rounded-[25px] p-12 md:p-16 text-white shadow-2xl"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                ¿Listo para cuidar tu salud?
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Agenda tu consulta hoy y recibe atención urológica de excelencia
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleReservarClick}
                  className="group inline-flex items-center justify-center gap-3 bg-white text-[#0D47A1] hover:bg-white/95 font-semibold px-10 py-5 rounded-[20px] shadow-xl hover:shadow-2xl transition-all duration-300 text-base cursor-pointer transform hover:scale-[1.02]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <Calendar className="w-5 h-5" />
                  <span>Agendar Consulta</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="https://wa.me/528711115149"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-10 py-5 rounded-[20px] shadow-xl hover:shadow-2xl transition-all duration-300 text-base"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Contactar por WhatsApp</span>
                </a>
              </div>

              <div className="mt-10 pt-10 border-t border-white/20">
                <div className="flex flex-wrap items-center gap-8 text-white/90">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">871 111 5149</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5" />
                    <span className="font-semibold">Hospital Andalucía, Torreón</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-white/80 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <strong>Aceptamos seguros médicos privados.</strong> Contacta para verificar cobertura.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Nuestra Ubicación
              </h2>
              <p className="text-xl text-[#1A1A1A]/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                Hospital Andalucía, Torreón, Coahuila
              </p>
            </div>
            
            <div className="rounded-[25px] overflow-hidden shadow-2xl border border-[#E4E7EF]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.0!2d-103.4542!3d25.5483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDMyJzUzLjkiTiAxMDPCsDI3JzE1LjEiVw!5e0!3m2!1ses!2smx!4v1234567890123!5m2!1ses!2smx"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Ubicación del Hospital Andalucía, Torreón"
              ></iframe>
            </div>
            
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#F5F7FB] rounded-full">
                <MapPin className="w-5 h-5 text-[#0056FF]" />
                <span className="text-[#1A1A1A] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Hospital Andalucía, Piso 2, Consultorio 1, Torreón, Coahuila, México
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
