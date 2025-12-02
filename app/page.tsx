"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, ArrowRight, Calendar, MessageCircle, Stethoscope, Heart, Award, Users, Clock, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F7FB]">
      <Header />
      
      {/* Hero Section - Premium Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F5F7FB] to-white"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-10"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-[#E4E7EF] shadow-sm"
              >
                <div className="w-2 h-2 bg-[#0056FF] rounded-full"></div>
                <span className="text-sm font-semibold text-[#1A1A1A]">Urólogo Certificado</span>
              </motion.div>

              {/* Main Title */}
              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.3 }}
                  className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#1A1A1A] leading-[1.1] tracking-tight"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  <span className="block">Urología de</span>
                  <span className="block text-[#0056FF]">Alta Especialidad</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-2xl md:text-3xl font-light text-[#1A1A1A]/80 leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Tecnología que cuida de ti
                </motion.p>
              </div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-4 max-w-xl"
              >
                <p className="text-lg md:text-xl text-[#1A1A1A]/70 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Atención urológica especializada con tecnología de vanguardia y un enfoque personalizado 
                  para tu bienestar integral. Experiencia, dedicación y excelencia médica en cada consulta.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link
                  href="/reservar"
                  className="group inline-flex items-center justify-center gap-3 bg-[#0056FF] hover:bg-[#0048E6] text-white font-semibold px-10 py-5 rounded-[20px] shadow-lg hover:shadow-xl transition-all duration-300 text-base"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <Calendar className="w-5 h-5" />
                  <span>Agendar Consulta</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://wa.me/528711115149"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-10 py-5 rounded-[20px] shadow-lg hover:shadow-xl transition-all duration-300 text-base"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Doctor Image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-center justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-lg">
                <div className="relative aspect-[3/4] rounded-[30px] overflow-hidden shadow-2xl bg-white">
                  <Image
                    src="/images/Doctor.jpg"
                    alt="Dr. Misael Rodríguez - Urólogo en Torreón"
                    fill
                    className="object-cover object-center"
                    priority
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-[25px] p-10 md:p-14 shadow-lg border border-[#E4E7EF]"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-[#0056FF] rounded-[16px] flex items-center justify-center">
                  <Stethoscope className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Sobre el Doctor
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-[#1A1A1A]/80 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                <p>
                  Soy el <strong className="text-[#0056FF] font-semibold">Dr. Misael Rodríguez</strong>, cirujano urólogo especializado 
                  en el diagnóstico y tratamiento de enfermedades del sistema urinario y reproductor masculino. 
                  Con años de experiencia, brindo atención médica de excelencia en el <strong className="text-[#1A1A1A]">Hospital Andalucía</strong> de Torreón, Coahuila.
                </p>
                <p>
                  Mi práctica se enfoca en ofrecer tratamientos de vanguardia que combinan tecnología avanzada 
                  con un enfoque personalizado y compasivo. Desde consultas preventivas hasta procedimientos quirúrgicos 
                  especializados, incluyendo cirugía láser de mínima invasión, me comprometo a proporcionar 
                  la mejor atención para tu salud urológica.
                </p>
                <p>
                  En mi consultorio encontrarás un ambiente profesional y acogedor, donde cada paciente recibe 
                  atención personalizada y tratamientos adaptados a sus necesidades específicas.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-4 mt-10 pt-8 border-t border-[#E4E7EF]">
                <div className="flex items-center gap-2 px-5 py-2.5 bg-[#F5F7FB] rounded-full">
                  <div className="w-2 h-2 bg-[#0056FF] rounded-full"></div>
                  <span className="text-sm font-semibold text-[#1A1A1A]">Cirujano Urólogo Certificado</span>
                </div>
                <div className="flex items-center gap-2 px-5 py-2.5 bg-[#F5F7FB] rounded-full">
                  <MapPin className="w-4 h-4 text-[#0056FF]" />
                  <span className="text-sm font-semibold text-[#1A1A1A]">Hospital Andalucía, Torreón</span>
                </div>
              </div>

              {/* More Info Link */}
              <div className="mt-8 pt-6 border-t border-[#E4E7EF]">
                <Link
                  href="/sobre-mi"
                  className="inline-flex items-center gap-2 text-[#0056FF] hover:text-[#0048E6] font-semibold transition-colors group"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <span>Más información</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-24 bg-[#F5F7FB]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Nuestros Tratamientos
            </h2>
            <p className="text-xl text-[#1A1A1A]/70 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Servicios urológicos especializados con tecnología de vanguardia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              { icon: Stethoscope, title: "Consulta de Urología", desc: "Evaluación completa del sistema urinario y reproductor" },
              { icon: Heart, title: "Salud Masculina", desc: "Evaluación integral de la salud masculina y bienestar urológico" },
              { icon: Award, title: "Infecciones Urinarias", desc: "Diagnóstico y tratamiento de infecciones del tracto urinario" },
              { icon: Users, title: "Crecimiento Prostático", desc: "Tratamiento de hiperplasia prostática benigna (HPB)" },
              { icon: Clock, title: "Cálculos Renales", desc: "Tratamiento de litiasis renal mediante técnicas avanzadas" },
              { icon: Sparkles, title: "Cirugía Láser", desc: "Procedimientos quirúrgicos con tecnología láser de mínima invasión" },
            ].map((treatment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-[20px] p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#E4E7EF] group"
              >
                <div className="w-14 h-14 bg-[#0056FF]/10 rounded-[16px] flex items-center justify-center mb-6 group-hover:bg-[#0056FF] transition-colors">
                  <treatment.icon className="w-7 h-7 text-[#0056FF] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {treatment.title}
                </h3>
                <p className="text-[#1A1A1A]/70 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {treatment.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 text-[#0056FF] hover:text-[#0048E6] font-semibold text-lg transition-colors group"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <span>Ver todos los tratamientos</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              ¿Qué opinan nuestros pacientes?
            </h2>
            <p className="text-xl text-[#1A1A1A]/70 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Conoce la experiencia de algunos de nuestros pacientes que han confiado en nosotros
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                name: "Carlos Sanchez",
                verified: true,
                date: "29 dic 2024",
                text: "ES MUY PERO MUY MUY BUEN DOCTOR HE IDO CON EL UN PAR DE VESES ES UN SUPER DOCTOR"
              },
              {
                name: "Brenda Rodriguez Carrillo",
                verified: true,
                date: "18 oct 2022",
                text: "Excelente"
              },
              {
                name: "Román Hernán",
                verified: true,
                date: "13 sep 2020",
                text: "excelente atención...! v muv profesional... gracias"
              },
              {
                name: "Ramiro Siman",
                verified: true,
                date: "11 jun 2020",
                text: "Son muy amables, y me atendieron muy profecionalmente"
              },
              {
                name: "Tania Cristel Armenta",
                verified: true,
                date: "8 jun 2020",
                text: "Excelente trato también para cuestiones de muieres. muv profesionales 100% recomendables"
              },
              {
                name: "Bren Arizbeth Padilla",
                verified: true,
                date: "8 oct 2021",
                text: "Excelente atención y muy profesional"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-[20px] p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#E4E7EF]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#0056FF]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#0056FF] font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[#1A1A1A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {testimonial.name}
                      </span>
                      {testimonial.verified && (
                        <div className="w-5 h-5 bg-[#25D366] rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-[#1A1A1A]/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Paciente Verificado
                    </p>
                  </div>
                </div>
                {testimonial.date && (
                  <p className="text-xs text-[#1A1A1A]/50 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {testimonial.date}
                  </p>
                )}
                <p className="text-[#1A1A1A]/80 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {`"${testimonial.text}"`}
                </p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
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
              className="bg-gradient-to-br from-[#0056FF] to-[#002D6E] rounded-[25px] p-12 md:p-16 text-white shadow-2xl"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                ¿Listo para cuidar tu salud?
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Agenda tu consulta hoy y recibe atención urológica de excelencia
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/reservar"
                  className="group inline-flex items-center justify-center gap-3 bg-white text-[#0056FF] hover:bg-white/95 font-semibold px-10 py-5 rounded-[20px] shadow-xl hover:shadow-2xl transition-all duration-300 text-base"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <Calendar className="w-5 h-5" />
                  <span>Agendar Consulta</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
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
