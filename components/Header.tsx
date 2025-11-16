"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CalendarDays, Menu, X } from "lucide-react";
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
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="group" onClick={closeMenu}>
            <Logo size="sm" showTagline={false} className="group-hover:scale-105 transition-transform duration-300" />
          </Link>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="/#sobre-nosotros"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Sobre VETSA
            </Link>
            <Link
              href="/#servicios"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="/admin"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Admin
            </Link>
          </div>

          {/* Botón Reservar Desktop */}
          <div className="hidden md:block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/reservar"
                className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-2.5 rounded-full shadow-md transition-all duration-300"
              >
                <CalendarDays className="w-4 h-4" />
                Reservar
              </Link>
            </motion.div>
          </div>

          {/* Botón Menú Móvil */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors"
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
              <div className="pt-4 pb-2 space-y-2 border-t border-gray-200 mt-4">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors font-medium"
                >
                  Inicio
                </Link>
                <Link
                  href="/#sobre-nosotros"
                  onClick={closeMenu}
                  className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors font-medium"
                >
                  Sobre VETSA
                </Link>
                <Link
                  href="/#servicios"
                  onClick={closeMenu}
                  className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors font-medium"
                >
                  Servicios
                </Link>
                <Link
                  href="/admin"
                  onClick={closeMenu}
                  className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors font-medium"
                >
                  Admin
                </Link>
                <Link
                  href="/reservar"
                  onClick={closeMenu}
                  className="block mx-4 mt-4 flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-2.5 rounded-full shadow-md transition-all duration-300"
                >
                  <CalendarDays className="w-4 h-4" />
                  Reservar Cita
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

