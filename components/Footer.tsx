"use client";

import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#002D6E] text-white py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0056FF] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0056FF] rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Dr. Misael Rodríguez
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Cirujano Urólogo especializado en salud masculina, cirugía láser y urología oncológica. 
              Atención de excelencia en Hospital Andalucía, Torreón.
            </p>
            <div className="bg-white/10 rounded-[12px] p-4 border border-white/20 mb-6">
              <p className="text-sm text-white/90 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                ✓ Aceptamos seguros médicos privados
              </p>
              <p className="text-xs text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                Contacta para verificar la cobertura de tu seguro
              </p>
            </div>
            
            {/* Redes Sociales */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-white/90 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                Síguenos
              </h4>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/share/1735sf74DC/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20"
                  aria-label="Facebook del Dr. Misael Rodríguez"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/dr.misael.urologo?igsh=MXdrdXY0ZXZkYnkxeQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20"
                  aria-label="Instagram del Dr. Misael Rodríguez"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/528711115149"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#25D366]/20 hover:bg-[#25D366]/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-[#25D366]/30"
                  aria-label="WhatsApp del Dr. Misael Rodríguez"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@dr.misael.urologo?_r=1&_t=ZS-91gYs2ADIge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20"
                  aria-label="TikTok del Dr. Misael Rodríguez"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Contacto
            </h4>
            <ul className="space-y-4 text-white/80" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#0056FF] flex-shrink-0" />
                <a href="tel:+528711115149" className="hover:text-white transition-colors">
                  871 111 5149
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#0056FF] flex-shrink-0" />
                <a href="mailto:urologiaysaludmasculina@gmail.com" className="hover:text-white transition-colors">
                  urologiaysaludmasculina@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0056FF] flex-shrink-0 mt-1" />
                <span>
                  Hospital Andalucía<br />
                  Piso 2, Consultorio 1<br />
                  Torreón, Coahuila, México
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Horario
            </h4>
            <ul className="space-y-3 text-white/80" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#0056FF] flex-shrink-0" />
                <span>Lunes - Viernes: 9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#0056FF] flex-shrink-0" />
                <span>Sábados: 9:00 AM - 3:00 PM</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#0056FF] flex-shrink-0" />
                <span>Domingos: Cerrado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60" style={{ fontFamily: 'Inter, sans-serif' }}>
          <p>&copy; {new Date().getFullYear()} Dr. Misael Rodríguez. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
