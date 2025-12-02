"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { DollarSign, Clock, Calendar } from "lucide-react";

interface Service {
  id: string;
  name: string;
  price: number;
  duration: number;
  description?: string;
  category?: string;
}

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const formatDuration = (minutes: number) => {
    if (minutes >= 1440) {
      return `${Math.floor(minutes / 1440)} día(s)`;
    }
    return `${minutes} min`;
  };

  const getCategoryColor = (category?: string) => {
    const colors: { [key: string]: string } = {
      "Consultas": "bg-[#0056FF]/10 text-[#0056FF] border-[#0056FF]/20",
      "Salud Masculina": "bg-amber-100 text-amber-700 border-amber-200",
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
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-[25px] shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#E4E7EF] flex flex-col group"
    >
      <div className="p-6 lg:p-8 flex-1">
        {service.category && (
          <span className={`inline-block px-3 py-1.5 text-xs font-bold rounded-full mb-4 uppercase tracking-wide border ${getCategoryColor(service.category)}`}>
            {service.category}
          </span>
        )}

        <h3 className="text-xl lg:text-2xl font-bold text-[#1A1A1A] mb-3 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {service.name}
        </h3>
        
        {service.description && (
          <p className="text-[#1A1A1A]/70 mb-6 text-sm lg:text-base leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            {service.description}
          </p>
        )}

        <div className="flex items-center justify-between pt-5 border-t border-[#E4E7EF] mb-5">
          <div className="flex items-center gap-2 text-amber-600">
            <DollarSign className="w-5 h-5" />
            <span className="font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
              ${service.price.toLocaleString()}
            </span>
          </div>
          
          <div className="flex items-center gap-2 text-[#1A1A1A]/60">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
              {formatDuration(service.duration)}
            </span>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-8 pb-6 lg:pb-8">
        <Link href={`/reservar?service=${service.id}`} className="block">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 bg-[#0056FF] hover:bg-[#0048E6] text-white font-semibold px-4 py-3.5 rounded-[16px] shadow-md hover:shadow-lg transition-all duration-300 text-sm lg:text-base"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <Calendar className="w-4 h-4 lg:w-5 lg:h-5" />
            <span>Agendar Consulta</span>
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}

