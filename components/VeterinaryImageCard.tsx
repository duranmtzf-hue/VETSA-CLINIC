"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface VeterinaryImageCardProps {
  src: string;
  alt: string;
  title: string;
  icon: React.ReactNode;
  delay?: number;
}

export default function VeterinaryImageCard({
  src,
  alt,
  title,
  icon,
  delay = 0,
}: VeterinaryImageCardProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] group cursor-pointer bg-gradient-to-br from-secondary/20 to-accent/20"
    >
      {!imageError ? (
        <>
          {imageLoading && (
            <div className="absolute inset-0 z-0 flex items-center justify-center bg-gradient-to-br from-secondary/20 to-accent/20">
              <div className="text-center p-6">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary mx-auto mb-4"></div>
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="font-semibold">{title}</p>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center p-6">
            <svg className="w-20 h-20 mx-auto mb-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {icon}
            </svg>
            <p className="text-gray-700 font-medium mb-1">{title}</p>
            <p className="text-xs text-gray-500">{src.split('/').pop()}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
}

