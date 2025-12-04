"use client";

// Forzar renderizado dinámico para evitar prerender
export const dynamic = 'force-dynamic';

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, CheckCircle2, MessageCircle } from "lucide-react";

interface AppointmentFormData {
  clientName: string;
  clientPhone: string;
  reason: string;
  service: string;
  dateTime: Date;
}

const services = [
  // CONSULTAS
  { id: "1", name: "Consulta de Urología", category: "Consultas" },
  { id: "2", name: "Consulta de Seguimiento", category: "Consultas" },
  { id: "3", name: "Consulta de Segunda Opinión", category: "Consultas" },
  // SALUD MASCULINA Y TRATAMIENTOS
  { id: "4", name: "Salud Masculina Integral", category: "Salud Masculina" },
  { id: "5", name: "Infecciones Urinarias", category: "Tratamientos" },
  { id: "6", name: "Hiperplasia Prostática Benigna (HPB)", category: "Tratamientos" },
  { id: "7", name: "Cálculos Renales (Litiasis Renal)", category: "Cirugía" },
  // CIRUGÍAS
  { id: "8", name: "Cirugía de Próstata", category: "Cirugía" },
  { id: "9", name: "Vasectomía", category: "Cirugía" },
  { id: "10", name: "Cirugía Láser de Cálculos Renales", category: "Cirugía" },
  { id: "11", name: "Circuncisión Láser", category: "Cirugía" },
  { id: "12", name: "Cirugía para Incontinencia Urinaria", category: "Cirugía" },
  { id: "13", name: "Aumento de Pene con Ácido Hialurónico", category: "Estética" },
  { id: "14", name: "Cirugía Oncológica Urológica", category: "Oncología" },
  { id: "15", name: "Tratamiento de Disfunción Eréctil con Ondas de Choque", category: "Tratamientos" },
  // DIAGNÓSTICO
  { id: "16", name: "Ultrasonido Urológico", category: "Diagnóstico" },
  { id: "17", name: "Cistoscopia", category: "Diagnóstico" },
  { id: "18", name: "Uroflujometría", category: "Diagnóstico" },
  { id: "19", name: "Análisis de PSA", category: "Diagnóstico" },
  { id: "20", name: "Perfil Urológico Completo", category: "Diagnóstico" },
];

// Componente interno que usa useSearchParams - debe estar en Suspense
function ReservarForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [appointmentData, setAppointmentData] = useState<AppointmentFormData | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [firebaseError, setFirebaseError] = useState<string | null>(null);

  // Verificar Firebase al montar el componente
  useEffect(() => {
    // Verificar después de un pequeño delay para asegurar que Firebase se haya inicializado
    const timer = setTimeout(() => {
      if (!db) {
        setFirebaseError("Firebase no está configurado. Por favor, contacta al administrador.");
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    trigger,
  } = useForm<AppointmentFormData>({
    defaultValues: {
      dateTime: undefined,
    },
  });

  const selectedService = watch("service");
  const dateTimeValue = watch("dateTime");

  // Pre-seleccionar servicio desde URL
  useEffect(() => {
    const serviceId = searchParams.get("service");
    if (serviceId) {
      setValue("service", serviceId);
    }
  }, [searchParams, setValue]);

  // Registrar validación para dateTime
  useEffect(() => {
    register("dateTime", {
      required: "La fecha y hora son requeridas",
      validate: (value) => {
        if (!value && !selectedDate) {
          return "Debes seleccionar una fecha y hora";
        }
        return true;
      },
    });
  }, [register, selectedDate]);

  const onSubmit = async (data: AppointmentFormData) => {
    if (!selectedDate) {
      alert("Por favor, selecciona una fecha y hora para la cita.");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Validar que db esté disponible
      if (!db) {
        throw new Error("Firebase no está configurado. Por favor, contacta al administrador o verifica que las variables de entorno estén configuradas correctamente en Netlify.");
      }

      const appointmentData = {
        clientName: data.clientName,
        clientPhone: data.clientPhone,
        petName: (data as any).reason || data.clientName, // Mapear reason a petName temporalmente
        service: data.service,
        dateTime: selectedDate,
        status: "pending",
        createdAt: new Date(),
      };

      // Agregar timeout para evitar que se quede colgado
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error("La operación tardó demasiado. Por favor, verifica tu conexión e intenta de nuevo.")), 10000);
      });

      const docRef = await Promise.race([
        addDoc(collection(db, "appointments"), appointmentData),
        timeoutPromise
      ]) as any;

      setAppointmentData(data);
      setIsConfirmed(true);
    } catch (error: any) {
      console.error("Error al crear la cita:", error);
      const errorMessage = error?.message || "Hubo un error al crear la cita. Por favor, intenta de nuevo.";
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isConfirmed && appointmentData) {
    const formattedDate = format(selectedDate!, "dd 'de' MMMM 'de' yyyy", { locale: es });
    const formattedTime = format(selectedDate!, "HH:mm");
    const phoneNumber = appointmentData.clientPhone.replace(/\D/g, "");
    const messageText = `Confirmo mi cita con el Dr. Misael Rodríguez el ${formattedDate} a las ${formattedTime}`;
    const whatsappMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/52${phoneNumber}?text=${whatsappMessage}`;

    return (
      <main className="min-h-screen bg-gray-50 pt-20">
        <Header />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-display font-bold text-primary mb-4">
              ¡Cita Reservada Exitosamente!
            </h1>
            <p className="text-gray-600 mb-8">
              Tu cita ha sido registrada. Te enviaremos una confirmación pronto.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
              <h3 className="font-display font-semibold text-lg mb-4">Detalles de la cita:</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Paciente:</strong> {appointmentData.clientName}</p>
                <p><strong>Motivo de consulta:</strong> {appointmentData.reason}</p>
                <p><strong>Tratamiento:</strong> {services.find(s => s.id === appointmentData.service)?.name}</p>
                <p><strong>Fecha y hora:</strong> {formattedDate} a las {formattedTime}</p>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300"
            >
              Enviar recordatorio por WhatsApp
            </a>

            <div className="mt-8">
              <button
                onClick={() => router.push("/")}
                className="text-[#0056FF] hover:text-[#0048E6] font-medium"
              >
                Volver al inicio
              </button>
            </div>
          </motion.div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h1 className="text-4xl font-display font-bold text-primary mb-8 text-center">
              Agendar Consulta
            </h1>

            {firebaseError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center gap-2 text-red-800">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <p className="font-semibold">Error de configuración</p>
                </div>
                <p className="text-red-700 mt-2 text-sm">{firebaseError}</p>
                <p className="text-red-600 mt-2 text-xs">
                  Por favor, contacta al administrador o intenta más tarde. También puedes contactarnos directamente por WhatsApp.
                </p>
                <a
                  href="https://wa.me/528711115149"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-colors text-sm font-semibold"
                >
                  <MessageCircle className="w-4 h-4" />
                  Contactar por WhatsApp
                </a>
              </div>
            )}

            <form 
              onSubmit={handleSubmit(onSubmit, (errors) => {
                console.log("Errores de validación:", errors);
                if (!selectedDate) {
                  alert("Por favor, completa todos los campos requeridos, incluyendo la fecha y hora.");
                }
              })} 
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre del Paciente *
                </label>
                <input
                  {...register("clientName", { required: "Este campo es requerido" })}
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="Juan Pérez"
                />
                {errors.clientName && (
                  <p className="text-red-500 text-sm mt-1">{errors.clientName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono *
                </label>
                <input
                  {...register("clientPhone", {
                    required: "Este campo es requerido",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Ingresa un número de 10 dígitos",
                    },
                  })}
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="5512345678"
                />
                {errors.clientPhone && (
                  <p className="text-red-500 text-sm mt-1">{errors.clientPhone.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Motivo de Consulta *
                </label>
                <input
                  {...register("reason", { required: "Este campo es requerido" })}
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="Ej: Dolor al orinar, revisión de próstata, etc."
                />
                {errors.reason && (
                  <p className="text-red-500 text-sm mt-1">{errors.reason.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tratamiento *
                </label>
                <select
                  {...register("service", { required: "Selecciona un tratamiento" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                >
                  <option value="">Selecciona un tratamiento</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha y Hora *
                </label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date: Date | null) => {
                    setSelectedDate(date);
                    if (date) {
                      setValue("dateTime", date, { shouldValidate: true });
                      trigger("dateTime");
                    } else {
                      setValue("dateTime", undefined as any, { shouldValidate: true });
                    }
                  }}
                  showTimeSelect
                  timeIntervals={30}
                  dateFormat="dd/MM/yyyy HH:mm"
                  minDate={new Date()}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholderText="Selecciona fecha y hora"
                  locale={es}
                  required
                />
                {(!selectedDate || errors.dateTime) && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.dateTime?.message || "Selecciona una fecha y hora"}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#0056FF] to-[#0048E6] hover:from-[#0048E6] hover:to-[#0039CC] text-white font-semibold px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {isSubmitting ? (
                  "Procesando..."
                ) : (
                  <>
                    <Calendar className="w-5 h-5" />
                    Confirmar Reservación
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}

// Componente principal que envuelve en Suspense
export default function ReservarPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-gray-50 pt-20">
        <Header />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
              <p className="text-gray-600">Cargando formulario...</p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    }>
      <ReservarForm />
    </Suspense>
  );
}

