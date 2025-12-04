"use client";

import { motion } from "framer-motion";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
}

export default function Logo({ size = "md", showTagline = true, className = "" }: LogoProps) {
  const sizes = {
    sm: {
      text: "text-lg",
      icon: "w-8 h-8",
      tagline: "text-xs",
      subtitle: "text-xs",
    },
    md: {
      text: "text-2xl md:text-3xl",
      icon: "w-10 h-10 md:w-12 md:h-12",
      tagline: "text-xs md:text-sm",
      subtitle: "text-xs md:text-sm",
    },
    lg: {
      text: "text-3xl md:text-5xl",
      icon: "w-16 h-16 md:w-20 md:h-20",
      tagline: "text-sm md:text-base",
      subtitle: "text-sm md:text-base",
    },
  };

  const currentSize = sizes[size];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`flex items-center gap-3 ${className}`}
    >
      {/* Emblema Azul Profesional */}
      <div className={`${currentSize.icon} relative flex items-center justify-center flex-shrink-0`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Círculo azul profesional */}
          <circle cx="50" cy="50" r="48" fill="#0056FF" stroke="#002D6E" strokeWidth="2" />
          {/* Símbolo médico estilizado */}
          <g fill="#FFFFFF" transform="translate(50, 50)">
            {/* Cruz médica */}
            <rect x="-3" y="-25" width="6" height="50" rx="2" />
            <rect x="-25" y="-3" width="50" height="6" rx="2" />
            {/* Círculo central */}
            <circle cx="0" cy="0" r="8" />
          </g>
        </svg>
      </div>
      
      {/* Texto */}
      <div className="flex flex-col">
        <span 
          className={`${currentSize.text} font-bold text-[#1A1A1A] leading-tight`}
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Urología
        </span>
        {showTagline && (
          <span 
            className={`${currentSize.subtitle} font-normal text-[#1A1A1A]/60 mt-0.5`}
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            • CIRUJANO URÓLOGO • HOSPITAL ANDALUCÍA •
          </span>
        )}
      </div>
    </motion.div>
  );
}
