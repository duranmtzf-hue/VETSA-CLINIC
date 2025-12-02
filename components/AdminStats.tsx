"use client";

import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Clock, XCircle, TrendingUp, Users } from "lucide-react";
import { Appointment } from "@/lib/types";

interface AdminStatsProps {
  appointments: Appointment[];
}

export default function AdminStats({ appointments }: AdminStatsProps) {
  // Calcular estadísticas
  const total = appointments.length;
  const pending = appointments.filter(a => a.status === "pending").length;
  const confirmed = appointments.filter(a => a.status === "confirmed").length;
  const completed = appointments.filter(a => a.status === "completed").length;
  const cancelled = appointments.filter(a => a.status === "cancelled").length;

  // Helper function to convert dateTime to Date
  const getDateFromAppointment = (dateTime: any): Date => {
    if (dateTime && typeof dateTime === 'object' && 'toDate' in dateTime) {
      return dateTime.toDate();
    }
    if (dateTime instanceof Date) {
      return dateTime;
    }
    return new Date(dateTime);
  };

  // Citas de hoy
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayAppointments = appointments.filter(appointment => {
    const dateTime = getDateFromAppointment(appointment.dateTime);
    const appointmentDate = new Date(dateTime);
    appointmentDate.setHours(0, 0, 0, 0);
    return appointmentDate.getTime() === today.getTime();
  }).length;

  // Citas de esta semana
  const weekStart = new Date(today);
  weekStart.setDate(today.getDate() - today.getDay());
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 6);
  weekEnd.setHours(23, 59, 59, 999);
  
  const weekAppointments = appointments.filter(appointment => {
    const dateTime = getDateFromAppointment(appointment.dateTime);
    return dateTime >= weekStart && dateTime <= weekEnd;
  }).length;

  // Citas de este mes
  const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
  const monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0, 23, 59, 59, 999);
  
  const monthAppointments = appointments.filter(appointment => {
    const dateTime = getDateFromAppointment(appointment.dateTime);
    return dateTime >= monthStart && dateTime <= monthEnd;
  }).length;

  // Tasa de completitud
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  const stats = [
    {
      title: "Total de Citas",
      value: total,
      icon: Calendar,
      color: "bg-blue-500",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      title: "Pendientes",
      value: pending,
      icon: Clock,
      color: "bg-yellow-500",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600",
    },
    {
      title: "Confirmadas",
      value: confirmed,
      icon: CheckCircle2,
      color: "bg-blue-500",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      title: "Completadas",
      value: completed,
      icon: CheckCircle2,
      color: "bg-green-500",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      title: "Canceladas",
      value: cancelled,
      icon: XCircle,
      color: "bg-red-500",
      bgColor: "bg-red-100",
      textColor: "text-red-600",
    },
    {
      title: "Tasa de Completitud",
      value: `${completionRate}%`,
      icon: TrendingUp,
      color: "bg-purple-500",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
    },
  ];

  const periodStats = [
    {
      title: "Citas Hoy",
      value: todayAppointments,
      icon: Calendar,
    },
    {
      title: "Esta Semana",
      value: weekAppointments,
      icon: Calendar,
    },
    {
      title: "Este Mes",
      value: monthAppointments,
      icon: Calendar,
    },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-display font-bold text-primary mb-6">Estadísticas</h2>
      
      {/* Estadísticas principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
              </div>
              <div className={`${stat.bgColor} p-4 rounded-full`}>
                <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Estadísticas por período */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {periodStats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-br from-primary to-secondary text-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm font-medium mb-1">{stat.title}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
              <stat.icon className="w-8 h-8 text-white/80" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

