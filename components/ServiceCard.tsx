"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { DollarSign, Clock, CalendarDays } from "lucide-react";

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

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
    >
      <div className="p-6 flex-1">
        {service.category && (
          <span className="inline-block px-3 py-1 text-xs font-semibold text-accent bg-accent/10 rounded-full mb-3">
            {service.category}
          </span>
        )}
        
        <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mb-4">
          <span className="text-white font-display font-bold text-2xl">
            {service.name.charAt(0)}
          </span>
        </div>

        <h3 className="text-xl font-display font-bold text-primary mb-2">
          {service.name}
        </h3>
        
        {service.description && (
          <p className="text-gray-600 mb-4 text-sm">
            {service.description}
          </p>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mb-4">
          <div className="flex items-center gap-2 text-accent">
            <DollarSign className="w-5 h-5" />
            <span className="font-bold text-lg">${service.price}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{formatDuration(service.duration)}</span>
          </div>
        </div>
      </div>

      <div className="px-6 pb-6">
        <Link href={`/reservar?service=${service.id}`}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-4 py-3 rounded-lg shadow-md transition-all duration-300"
          >
            <CalendarDays className="w-4 h-4" />
            Reservar Cita
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}

