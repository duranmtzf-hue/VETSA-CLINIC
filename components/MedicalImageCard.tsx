"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface MedicalImageCardProps {
  src: string;
  alt: string;
  title: string;
  icon: React.ReactNode;
  delay?: number;
}

export default function MedicalImageCard({
  src,
  alt,
  title,
  icon,
  delay = 0,
}: MedicalImageCardProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl aspect-[4/3] group cursor-pointer bg-gradient-to-br from-[#25D366]/20 to-[#0056FF]/20 transition-all duration-300 ring-2 ring-transparent hover:ring-[#0056FF]/30"
    >
      {!imageError ? (
        <>
          {imageLoading && (
            <div className="absolute inset-0 z-0 flex items-center justify-center bg-gradient-to-br from-secondary/20 to-accent/20">
              <div className="text-center p-6">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0056FF] mx-auto mb-4"></div>
                <p className="text-gray-600 text-sm">Cargando...</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 z-10">
            <Image
              src={src}
              alt={alt}
              fill
              className={`object-cover group-hover:scale-110 transition-transform duration-500 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
              onError={() => {
                setImageError(true);
                setImageLoading(false);
              }}
              onLoad={() => setImageLoading(false)}
              unoptimized={src.endsWith('.webp') || src.endsWith('.png') || src.endsWith('.jpg') || src.endsWith('.jpeg')}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="font-bold text-xl drop-shadow-lg">{title}</p>
              <div className="w-16 h-1 bg-[#0056FF] rounded-full mt-2"></div>
            </div>
          </div>
          {/* Shine effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-30 pointer-events-none"></div>
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center p-6">
            <svg className="w-20 h-20 mx-auto mb-4 text-[#0056FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {icon}
            </svg>
            <p className="text-gray-700 font-bold mb-1">{title}</p>
            <p className="text-xs text-gray-500">{src.split('/').pop()}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
}

