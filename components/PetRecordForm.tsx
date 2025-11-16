"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as es from "date-fns/locale/es";

interface PetRecordFormData {
  notes: string;
  vaccineName?: string;
  vaccineDate?: Date;
}

interface PetRecordFormProps {
  onSubmit: (data: { notes: string; vaccine?: { name: string; date: Date } }) => void;
  onCancel: () => void;
}

export default function PetRecordForm({ onSubmit, onCancel }: PetRecordFormProps) {
  const [addVaccine, setAddVaccine] = useState(false);
  const [vaccineDate, setVaccineDate] = useState<Date | null>(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<PetRecordFormData>();

  const vaccineName = watch("vaccineName");

  const onFormSubmit = (data: PetRecordFormData) => {
    const submitData: { notes: string; vaccine?: { name: string; date: Date } } = {
      notes: data.notes || "",
    };

    if (addVaccine && data.vaccineName && vaccineDate) {
      submitData.vaccine = {
        name: data.vaccineName,
        date: vaccineDate,
      };
    }

    onSubmit(submitData);
    reset();
    setVaccineDate(null);
    setAddVaccine(false);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Notas Médicas
        </label>
        <textarea
          {...register("notes")}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          placeholder="Ingresa notas sobre el estado de salud, tratamiento, observaciones..."
        />
      </div>

      <div>
        <label className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            checked={addVaccine}
            onChange={(e) => setAddVaccine(e.target.checked)}
            className="w-4 h-4 text-accent rounded focus:ring-accent"
          />
          <span className="text-sm font-medium text-gray-700">Agregar Vacuna</span>
        </label>

        {addVaccine && (
          <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre de la Vacuna
              </label>
              <input
                {...register("vaccineName", {
                  required: addVaccine ? "El nombre de la vacuna es requerido" : false,
                })}
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                placeholder="Ej: Triple Viral, Rabia, etc."
              />
              {errors.vaccineName && (
                <p className="text-red-500 text-sm mt-1">{errors.vaccineName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fecha de Aplicación
              </label>
              <DatePicker
                selected={vaccineDate}
                onChange={(date: Date | null) => setVaccineDate(date)}
                dateFormat="dd/MM/yyyy"
                maxDate={new Date()}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                placeholderText="Selecciona la fecha"
                locale={es}
                required={addVaccine}
              />
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="flex-1 bg-accent hover:bg-accent/90 text-white font-semibold px-4 py-3 rounded-lg shadow-md transition-all duration-300"
        >
          Guardar
        </button>
      </div>
    </form>
  );
}

