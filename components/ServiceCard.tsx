"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Calendar, CheckCircle2, ArrowRight } from "lucide-react";

interface Service {
  id: string;
  name: string;
  price?: number;
  duration?: number;
  description?: string;
  category?: string;
  benefits?: string[];
  indications?: string[];
}

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const formatDuration = (minutes?: number) => {
    if (!minutes) return null;
    if (minutes >= 1440) {
      return `${Math.floor(minutes / 1440)} día(s)`;
    }
    return `${minutes} min`;
  };

  const getCategoryColor = (category?: string) => {
    const colors: { [key: string]: string } = {
      "Consultas": "bg-[#0056FF]/10 text-[#0056FF] border-[#0056FF]/20",
      "Salud Masculina": "bg-emerald-100 text-emerald-700 border-emerald-200",
      "Tratamientos": "bg-amber-100 text-amber-700 border-amber-200",
      "Cirugía": "bg-red-100 text-red-700 border-red-200",
      "Estética": "bg-pink-100 text-pink-700 border-pink-200",
      "Oncología": "bg-purple-100 text-purple-700 border-purple-200",
      "Diagnóstico": "bg-blue-100 text-blue-700 border-blue-200",
    };
    return colors[category || ""] || "bg-[#F5F7FB] text-[#1A1A1A] border-[#E4E7EF]";
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-br from-white to-[#F5F7FB] rounded-[28px] shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#E4E7EF] flex flex-col group relative"
    >
      {/* Decorative gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0056FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      
      <div className="p-8 lg:p-10 flex-1 relative z-10">
        {service.category && (
          <span className={`inline-block px-4 py-2 text-xs font-bold rounded-full mb-5 uppercase tracking-wide border ${getCategoryColor(service.category)}`}>
            {service.category}
          </span>
        )}

        <h3 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A] mb-4 leading-tight group-hover:text-[#0056FF] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {service.name}
        </h3>
        
        {service.description && (
          <p className="text-[#1A1A1A]/80 mb-6 text-base lg:text-lg leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            {service.description}
          </p>
        )}

        {service.benefits && service.benefits.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-[#1A1A1A] mb-3 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
              Beneficios
            </h4>
            <ul className="space-y-2">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 text-[#1A1A1A]/70 text-sm lg:text-base">
                  <CheckCircle2 className="w-5 h-5 text-[#0056FF] flex-shrink-0 mt-0.5" />
                  <span style={{ fontFamily: 'Inter, sans-serif' }}>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {service.indications && service.indications.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-[#1A1A1A] mb-3 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
              Indicado para
            </h4>
            <ul className="space-y-2">
              {service.indications.map((indication, index) => (
                <li key={index} className="flex items-start gap-2 text-[#1A1A1A]/70 text-sm lg:text-base">
                  <div className="w-1.5 h-1.5 bg-[#0056FF] rounded-full flex-shrink-0 mt-2"></div>
                  <span style={{ fontFamily: 'Inter, sans-serif' }}>{indication}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {service.duration && (
          <div className="flex items-center gap-2 text-[#1A1A1A]/60 pt-4 border-t border-[#E4E7EF]">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
              Duración aproximada: {formatDuration(service.duration)}
            </span>
          </div>
        )}
      </div>

      <div className="px-8 lg:px-10 pb-8 lg:pb-10 relative z-10">
        <Link href={`/reservar?service=${service.id}`} className="block">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#0056FF] to-[#0048E6] hover:from-[#0048E6] hover:to-[#0039CC] text-white font-semibold px-6 py-4 rounded-[18px] shadow-lg hover:shadow-xl transition-all duration-300 text-base lg:text-lg group/btn"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <Calendar className="w-5 h-5" />
            <span>Agendar Consulta</span>
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
          </motion.button>
        </Link>
        <p className="text-center text-xs text-[#1A1A1A]/50 mt-3" style={{ fontFamily: 'Inter, sans-serif' }}>
          Consulta disponibilidad y costos
        </p>
      </div>
    </motion.div>
  );
}

