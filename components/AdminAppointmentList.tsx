"use client";

import { motion } from "framer-motion";
import { format } from "date-fns";
import * as es from "date-fns/locale/es";
import { CheckCircle2, XCircle, Clock, Calendar } from "lucide-react";

interface Appointment {
  id: string;
  clientName: string;
  clientPhone: string;
  petName: string;
  service: string;
  dateTime: any;
  status: "pending" | "confirmed" | "completed" | "cancelled";
}

interface AdminAppointmentListProps {
  appointments: Appointment[];
  onUpdateStatus: (id: string, status: string) => void;
  onRefresh: () => void;
}

const services: { [key: string]: string } = {
  "1": "Consulta General",
  "2": "Vacunación",
  "3": "Cirugía",
  "4": "Estética",
  "5": "Rayos X",
  "6": "Laboratorio",
};

const statusColors: { [key: string]: string } = {
  pending: "bg-yellow-100 text-yellow-800",
  confirmed: "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
};

const statusLabels: { [key: string]: string } = {
  pending: "Pendiente",
  confirmed: "Confirmada",
  completed: "Completada",
  cancelled: "Cancelada",
};

export default function AdminAppointmentList({
  appointments,
  onUpdateStatus,
}: AdminAppointmentListProps) {
  const getStatusColor = (status: string) => {
    return statusColors[status] || statusColors.pending;
  };

  const getStatusLabel = (status: string) => {
    return statusLabels[status] || status;
  };

  if (appointments.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
        <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600 text-lg">No hay citas registradas</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-primary text-white">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold">Cliente</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Mascota</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Servicio</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Fecha y Hora</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Teléfono</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Estado</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {appointments.map((appointment, index) => {
              const dateTime =
                appointment.dateTime?.toDate?.() ||
                (appointment.dateTime instanceof Date
                  ? appointment.dateTime
                  : new Date(appointment.dateTime));

              return (
                <motion.tr
                  key={appointment.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {appointment.clientName}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{appointment.petName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">
                      {services[appointment.service] || appointment.service}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">
                      {format(dateTime, "dd MMM yyyy", { locale: es })}
                    </div>
                    <div className="text-xs text-gray-500">
                      {format(dateTime, "HH:mm", { locale: es })} hrs
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <a
                      href={`tel:${appointment.clientPhone}`}
                      className="text-sm text-secondary hover:text-secondary/80"
                    >
                      {appointment.clientPhone}
                    </a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        appointment.status
                      )}`}
                    >
                      {getStatusLabel(appointment.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {appointment.status === "pending" && (
                        <motion.button
                          onClick={() => onUpdateStatus(appointment.id, "confirmed")}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                          title="Confirmar"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                        </motion.button>
                      )}
                      {appointment.status !== "completed" && appointment.status !== "cancelled" && (
                        <motion.button
                          onClick={() => onUpdateStatus(appointment.id, "completed")}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                          title="Completar"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                        </motion.button>
                      )}
                      {appointment.status !== "cancelled" && (
                        <motion.button
                          onClick={() => onUpdateStatus(appointment.id, "cancelled")}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                          title="Cancelar"
                        >
                          <XCircle className="w-4 h-4" />
                        </motion.button>
                      )}
                    </div>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

