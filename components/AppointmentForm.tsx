"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// @ts-ignore - date-fns locale import
import es from "date-fns/locale/es/index.js";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

interface AppointmentFormData {
  clientName: string;
  clientPhone: string;
  petName: string;
  service: string;
  dateTime: Date;
}

interface AppointmentFormProps {
  onSubmit: (data: AppointmentFormData) => void;
  isSubmitting?: boolean;
}

const services = [
  { id: "1", name: "Consulta General", price: 350 },
  { id: "2", name: "Vacunación", price: 200 },
  { id: "3", name: "Cirugía", price: 2500 },
  { id: "4", name: "Estética", price: 150 },
  { id: "5", name: "Rayos X", price: 400 },
  { id: "6", name: "Laboratorio", price: 300 },
];

export default function AppointmentForm({ onSubmit, isSubmitting = false }: AppointmentFormProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<AppointmentFormData>();

  const onFormSubmit = (data: AppointmentFormData) => {
    if (!selectedDate) {
      return;
    }
    onSubmit({ ...data, dateTime: selectedDate });
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
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
  );
}

