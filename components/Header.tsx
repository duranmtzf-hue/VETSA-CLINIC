"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, Menu, X, Calendar } from "lucide-react";
import Logo from "./Logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(228, 231, 239, 0.5)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
      }}
    >
      <nav className="container mx-auto px-6 lg:px-12 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="group" onClick={closeMenu}>
            <Logo size="sm" showTagline={false} className="group-hover:scale-105 transition-transform duration-300" />
          </Link>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            <Link
              href="/"
              className="text-[#1A1A1A] hover:text-[#0056FF] font-semibold text-sm lg:text-base transition-colors relative group"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0056FF] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/sobre-mi"
              className="text-[#1A1A1A] hover:text-[#0056FF] font-semibold text-sm lg:text-base transition-colors relative group"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Sobre Mi
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0056FF] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/servicios"
              className="text-[#1A1A1A] hover:text-[#0056FF] font-semibold text-sm lg:text-base transition-colors relative group"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Tratamientos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0056FF] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/preguntas-frecuentes"
              className="text-[#1A1A1A] hover:text-[#0056FF] font-semibold text-sm lg:text-base transition-colors relative group"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              FAQ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0056FF] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/admin"
              className="text-[#1A1A1A] hover:text-[#0056FF] font-semibold text-sm lg:text-base transition-colors relative group"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Admin
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0056FF] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Botón CONTÁCTAME Desktop */}
          <div className="hidden md:block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/reservar"
                className="flex items-center gap-2 bg-[#0056FF] hover:bg-[#0048E6] text-white font-bold px-7 py-3 rounded-[16px] shadow-lg hover:shadow-xl transition-all duration-300 text-sm lg:text-base relative overflow-hidden group"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Calendar className="w-4 h-4 lg:w-5 lg:h-5" />
                  CONSULTA YA
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
            </motion.div>
          </div>

          {/* Botón Menú Móvil */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-[#1A1A1A] hover:text-[#0056FF] transition-colors"
            aria-label="Abrir menú"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Menú Móvil */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-2 space-y-2 border-t border-[#E4E7EF] mt-4">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="block px-4 py-2 text-[#1A1A1A] hover:text-[#0056FF] hover:bg-[#F5F7FB] rounded-lg transition-colors font-medium"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Inicio
                </Link>
                <Link
                  href="/sobre-mi"
                  onClick={closeMenu}
                  className="block px-4 py-2 text-[#1A1A1A] hover:text-[#0056FF] hover:bg-[#F5F7FB] rounded-lg transition-colors font-medium"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Sobre Mi
                </Link>
                <Link
                  href="/servicios"
                  onClick={closeMenu}
                  className="block px-4 py-2 text-[#1A1A1A] hover:text-[#0056FF] hover:bg-[#F5F7FB] rounded-lg transition-colors font-medium"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Tratamientos
                </Link>
                <Link
                  href="/preguntas-frecuentes"
                  onClick={closeMenu}
                  className="block px-4 py-2 text-[#1A1A1A] hover:text-[#0056FF] hover:bg-[#F5F7FB] rounded-lg transition-colors font-medium"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  FAQ
                </Link>
                <Link
                  href="/admin"
                  onClick={closeMenu}
                  className="block px-4 py-2 text-[#1A1A1A] hover:text-[#0056FF] hover:bg-[#F5F7FB] rounded-lg transition-colors font-medium"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Admin
                </Link>
                <Link
                  href="/reservar"
                  onClick={closeMenu}
                  className="block mx-4 mt-4 flex items-center justify-center gap-2 bg-[#0056FF] hover:bg-[#0048E6] text-white font-semibold px-6 py-2.5 rounded-[16px] shadow-md transition-all duration-300"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <Calendar className="w-4 h-4" />
                  CONSULTA YA
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
