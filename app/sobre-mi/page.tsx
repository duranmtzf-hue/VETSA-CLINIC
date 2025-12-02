"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Heart, Award, Users, Clock, GraduationCap, Building2, Shield, CheckCircle2, Stethoscope, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SobreMiPage() {
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
              Sobre el Doctor
            </h1>
            <div className="h-1.5 w-32 bg-white/30 mx-auto rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Conoce más sobre mi experiencia, formación y compromiso con tu salud urológica
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Doctor Info Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Dr. Misael Rodríguez
                  </h2>
                  <p className="text-xl text-[#0056FF] font-semibold mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Cirujano Urólogo Certificado
                  </p>
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
                    atención personalizada y tratamientos adaptados a sus necesidades específicas. Tu bienestar 
                    es mi prioridad.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative aspect-[3/4] rounded-[30px] overflow-hidden shadow-2xl bg-white">
                  <Image
                    src="/images/Doctor1.jpg"
                    alt="Dr. Misael Rodríguez - Urólogo en Torreón"
                    fill
                    className="object-cover object-center"
                    priority
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            </div>

            {/* Formación y Experiencia Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
              {/* Formación Académica */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-[25px] p-8 shadow-lg border border-[#E4E7EF] hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-[#0056FF]/10 rounded-[16px] flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-[#0056FF]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Formación Académica
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="pb-6 border-b border-[#E4E7EF] last:border-0 last:pb-0">
                    <h4 className="text-lg font-semibold text-[#1A1A1A] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Maestría en Urología
                    </h4>
                    <p className="text-[#0056FF] font-semibold text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      UNAM - Universidad Nacional Autónoma de México
                    </p>
                    <p className="text-[#1A1A1A]/60 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Promoción 2021
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#1A1A1A] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Licenciatura en Medicina
                    </h4>
                    <p className="text-[#0056FF] font-semibold text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      UJED - Universidad Juárez del Estado de Durango
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Experiencia Profesional */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-white rounded-[25px] p-8 shadow-lg border border-[#E4E7EF] hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-[#0056FF]/10 rounded-[16px] flex items-center justify-center">
                    <Building2 className="w-7 h-7 text-[#0056FF]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Experiencia Profesional
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="pb-6 border-b border-[#E4E7EF] last:border-0 last:pb-0">
                    <h4 className="text-lg font-semibold text-[#1A1A1A] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Hospital Andalucía
                    </h4>
                    <p className="text-[#1A1A1A]/70 text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Torreón, Coahuila
                    </p>
                    <p className="text-[#1A1A1A]/60 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Piso 2, Consultorio 1
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#1A1A1A] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      San José Sanatorio
                    </h4>
                    <p className="text-[#1A1A1A]/70 text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Gómez Palacio Centro, Gómez Palacio, Durango
                    </p>
                    <p className="text-[#1A1A1A]/60 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Desde enero de 2022
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
            >
              <div className="bg-white rounded-[20px] p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#E4E7EF] group">
                <div className="w-16 h-16 bg-[#0056FF]/10 rounded-[16px] flex items-center justify-center mb-6 group-hover:bg-[#0056FF] transition-colors">
                  <Heart className="w-8 h-8 text-[#0056FF] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Compromiso</h3>
                <p className="text-[#1A1A1A]/70 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Con la salud y bienestar de cada paciente
                </p>
              </div>

              <div className="bg-white rounded-[20px] p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#E4E7EF] group">
                <div className="w-16 h-16 bg-[#0056FF]/10 rounded-[16px] flex items-center justify-center mb-6 group-hover:bg-[#0056FF] transition-colors">
                  <Award className="w-8 h-8 text-[#0056FF] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Excelencia</h3>
                <p className="text-[#1A1A1A]/70 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Tecnología de vanguardia en urología
                </p>
              </div>

              <div className="bg-white rounded-[20px] p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#E4E7EF] group">
                <div className="w-16 h-16 bg-[#0056FF]/10 rounded-[16px] flex items-center justify-center mb-6 group-hover:bg-[#0056FF] transition-colors">
                  <Users className="w-8 h-8 text-[#0056FF] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Atención Personalizada</h3>
                <p className="text-[#1A1A1A]/70 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Tratamiento único y adaptado a cada paciente
                </p>
              </div>

              <div className="bg-white rounded-[20px] p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#E4E7EF] group">
                <div className="w-16 h-16 bg-[#0056FF]/10 rounded-[16px] flex items-center justify-center mb-6 group-hover:bg-[#0056FF] transition-colors">
                  <Clock className="w-8 h-8 text-[#0056FF] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Disponibilidad</h3>
                <p className="text-[#1A1A1A]/70 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Horarios flexibles para tu comodidad
                </p>
              </div>
            </motion.div>

            {/* Location & Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#0056FF] to-[#002D6E] rounded-[25px] p-12 md:p-16 text-white shadow-2xl"
            >
              <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Ubicación y Contacto
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Building2 className="w-6 h-6 text-white/80 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Hospital Andalucía</h3>
                      <p className="text-white/90 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Piso 2, Consultorio 1<br />
                        Torreón, Coahuila, México
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-white/80 flex-shrink-0" />
                    <a href="tel:+528711115149" className="text-white/90 hover:text-white transition-colors text-lg font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                      871 111 5149
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-white/80 flex-shrink-0" />
                    <a href="mailto:urologiaysaludmasculina@gmail.com" className="text-white/90 hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                      urologiaysaludmasculina@gmail.com
                    </a>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-white/80 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Horario de Atención</h3>
                      <ul className="space-y-2 text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <li>Lunes - Viernes: 9:00 AM - 7:00 PM</li>
                        <li>Sábados: 9:00 AM - 3:00 PM</li>
                        <li>Domingos: Cerrado</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-[16px] p-4 border border-white/20">
                    <p className="text-sm text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <strong>Urgencias:</strong> Disponible 24/7 para casos de emergencia urológica
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
