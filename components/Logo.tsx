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
      text: "text-2xl",
      icon: "w-8 h-8",
      tagline: "text-sm",
    },
    md: {
      text: "text-3xl md:text-4xl",
      icon: "w-10 h-10 md:w-12 md:h-12",
      tagline: "text-sm md:text-base",
    },
    lg: {
      text: "text-4xl md:text-6xl",
      icon: "w-16 h-16 md:w-20 md:h-20",
      tagline: "text-base md:text-xl",
    },
  };

  const currentSize = sizes[size];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col items-center ${className}`}
    >
      {/* Logo Principal */}
      <div className="flex items-center gap-2 mb-2">
        {/* VET */}
        <span className={`${currentSize.text} font-display font-bold text-primary`}>
          VET
        </span>
        
        {/* Cruz Médica con Huella */}
        <div className={`${currentSize.icon} relative flex items-center justify-center`}>
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Cruz médica - fondo azul claro */}
            <rect x="40" y="10" width="20" height="80" rx="3" fill="#38BDF8" />
            <rect x="10" y="40" width="80" height="20" rx="3" fill="#38BDF8" />
            {/* Huella blanca dentro */}
            <g fill="white" transform="translate(50, 50)">
              {/* Pad principal */}
              <circle cx="0" cy="-12" r="7" />
              {/* Pads de dedos */}
              <circle cx="-10" cy="-3" r="5" />
              <circle cx="10" cy="-3" r="5" />
              <circle cx="-7" cy="7" r="5" />
              <circle cx="7" cy="7" r="5" />
            </g>
          </svg>
        </div>
        
        {/* SA */}
        <span className={`${currentSize.text} font-display font-bold text-primary`}>
          SA
        </span>
      </div>

      {/* Tagline */}
      {showTagline && (
        <div className="flex flex-col items-center">
          <span className={`${currentSize.tagline} font-sans font-normal text-secondary mb-1`}>
            clínica veterinaria
          </span>
          {/* Línea curva */}
          <svg
            width={size === "lg" ? "180" : size === "md" ? "140" : "120"}
            height="8"
            viewBox="0 0 180 8"
            className="mt-1"
          >
            <path
              d="M 0 4 Q 45 0, 90 4 T 180 4"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-secondary"
            />
          </svg>
        </div>
      )}
    </motion.div>
  );
}

