"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { format } from "date-fns";
import * as es from "date-fns/locale/es";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, CheckCircle2 } from "lucide-react";

interface AppointmentFormData {
  clientName: string;
  clientPhone: string;
  petName: string;
  service: string;
  dateTime: Date;
}

const services = [
  // CLÍNICA
  { id: "1", name: "Consulta General", price: 300, category: "Clínica" },
  { id: "2", name: "Consulta Preventiva", price: 949, category: "Clínica" },
  { id: "3", name: "Profilaxis", price: 1249, category: "Clínica" },
  { id: "4", name: "Canalizar", price: 350, category: "Clínica" },
  { id: "5", name: "Internamiento", price: 890, category: "Clínica" },
  { id: "6", name: "Muestra de Sangre", price: 1149, category: "Clínica" },
  { id: "7", name: "Examen de Laboratorio", price: 295, category: "Clínica" },
  // ESTÉTICA
  { id: "8", name: "Estética Pequeño", price: 155, category: "Estética" },
  { id: "9", name: "Estética Mediano", price: 230, category: "Estética" },
  { id: "10", name: "Estética Grande", price: 320, category: "Estética" },
  // ESTÉTICA PLUS+
  { id: "11", name: "Estética Plus+ Pequeño", price: 210, category: "Estética Plus+" },
  { id: "12", name: "Estética Plus+ Mediano", price: 300, category: "Estética Plus+" },
  { id: "13", name: "Estética Plus+ Grande", price: 724, category: "Estética Plus+" },
  // HOTEL
  { id: "14", name: "Hotel Cuarto Chico", price: 330, category: "Hotel" },
  { id: "15", name: "Hotel Cuarto Grande", price: 400, category: "Hotel" },
  { id: "16", name: "Hotel Cuarto Compartido (2)", price: 280, category: "Hotel" },
  // PENSIÓN
  { id: "17", name: "Pensión Jaula Chica", price: 180, category: "Pensión" },
  { id: "18", name: "Pensión Jaula Grande", price: 250, category: "Pensión" },
  // VACUNAS
  { id: "19", name: "Vanguard Plus 5", price: 260, category: "Vacunas" },
  { id: "20", name: "Vanguard Plus 6", price: 270, category: "Vacunas" },
  { id: "21", name: "Vacuna Giardia", price: 285, category: "Vacunas" },
  { id: "22", name: "Vacuna Bordetella", price: 255, category: "Vacunas" },
  { id: "23", name: "Vacuna Rabia", price: 210, category: "Vacunas" },
  { id: "24", name: "Desparasitante", price: 180, category: "Vacunas" },
];

export default function ReservarPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [appointmentData, setAppointmentData] = useState<AppointmentFormData | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<AppointmentFormData>();

  const selectedService = watch("service");

  // Pre-seleccionar servicio desde URL
  useEffect(() => {
    const serviceId = searchParams.get("service");
    if (serviceId) {
      setValue("service", serviceId);
    }
  }, [searchParams, setValue]);

  const onSubmit = async (data: AppointmentFormData) => {
    if (!selectedDate) return;
    
    setIsSubmitting(true);
    try {
      const appointmentData = {
        ...data,
        dateTime: selectedDate,
        status: "pending",
        createdAt: new Date(),
      };

      const docRef = await addDoc(collection(db, "appointments"), appointmentData);
      setAppointmentData(data);
      setIsConfirmed(true);
    } catch (error) {
      console.error("Error al crear la cita:", error);
      alert("Hubo un error al crear la cita. Por favor, intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isConfirmed && appointmentData) {
    const formattedDate = format(selectedDate!, "dd 'de' MMMM 'de' yyyy", { locale: es });
    const formattedTime = format(selectedDate!, "HH:mm");
    const phoneNumber = appointmentData.clientPhone.replace(/\D/g, "");
    const messageText = `Confirmo mi cita en VETSA el ${formattedDate} a las ${formattedTime}`;
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
                <p><strong>Cliente:</strong> {appointmentData.clientName}</p>
                <p><strong>Mascota:</strong> {appointmentData.petName}</p>
                <p><strong>Servicio:</strong> {services.find(s => s.id === appointmentData.service)?.name}</p>
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
                className="text-accent hover:text-accent/80 font-medium"
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
              Reservar Cita
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre del Cliente *
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
                  Nombre de la Mascota *
                </label>
                <input
                  {...register("petName", { required: "Este campo es requerido" })}
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="Max"
                />
                {errors.petName && (
                  <p className="text-red-500 text-sm mt-1">{errors.petName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Servicio *
                </label>
                <select
                  {...register("service", { required: "Selecciona un servicio" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                >
                  <option value="">Selecciona un servicio</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name} - ${service.price}
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
                      setValue("dateTime", date);
                    }
                  }}
                  showTimeSelect
                  timeIntervals={30}
                  dateFormat="dd/MM/yyyy HH:mm"
                  minDate={new Date()}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholderText="Selecciona fecha y hora"
                  locale={es}
                />
                {!selectedDate && errors.dateTime && (
                  <p className="text-red-500 text-sm mt-1">Selecciona una fecha y hora</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-4 rounded-lg shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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

