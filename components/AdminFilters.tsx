"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, X } from "lucide-react";

interface AdminFiltersProps {
  onFilterChange: (filters: { search: string; status: string; dateFilter: string }) => void;
}

export default function AdminFilters({ onFilterChange }: AdminFiltersProps) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");

  const handleSearchChange = (value: string) => {
    setSearch(value);
    onFilterChange({ search: value, status, dateFilter });
  };

  const handleStatusChange = (value: string) => {
    setStatus(value);
    onFilterChange({ search, status: value, dateFilter });
  };

  const handleDateFilterChange = (value: string) => {
    setDateFilter(value);
    onFilterChange({ search, status, dateFilter: value });
  };

  const clearFilters = () => {
    setSearch("");
    setStatus("all");
    setDateFilter("all");
    onFilterChange({ search: "", status: "all", dateFilter: "all" });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Búsqueda */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar por paciente, cliente o teléfono..."
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
          />
        </div>

        {/* Filtro por estado */}
        <select
          value={status}
          onChange={(e) => handleStatusChange(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
        >
          <option value="all">Todos los estados</option>
          <option value="pending">Pendiente</option>
          <option value="confirmed">Confirmada</option>
          <option value="completed">Completada</option>
          <option value="cancelled">Cancelada</option>
        </select>

        {/* Filtro por fecha */}
        <select
          value={dateFilter}
          onChange={(e) => handleDateFilterChange(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
        >
          <option value="all">Todas las fechas</option>
          <option value="today">Hoy</option>
          <option value="week">Esta semana</option>
          <option value="month">Este mes</option>
          <option value="upcoming">Próximas</option>
        </select>

        {/* Botón limpiar */}
        {(search || status !== "all" || dateFilter !== "all") && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={clearFilters}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors flex items-center gap-2"
          >
            <X className="w-4 h-4" />
            Limpiar
          </motion.button>
        )}
      </div>
    </div>
  );
}

