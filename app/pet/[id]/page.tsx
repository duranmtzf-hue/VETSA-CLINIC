"use client";

// Forzar renderizado dinámico para evitar prerender
export const dynamic = 'force-dynamic';

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { doc, getDoc, updateDoc, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/lib/firebase";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PetRecordForm from "@/components/PetRecordForm";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Plus, Image as ImageIcon, Calendar, FileText } from "lucide-react";
import Image from "next/image";

interface Vaccine {
  name: string;
  date: any;
}

interface Pet {
  id: string;
  ownerId: string;
  name: string;
  species: string;
  breed: string;
  birthdate: any;
  vaccines: Vaccine[];
  notes: string;
  images?: string[];
}

export default function PetPage() {
  const params = useParams();
  const petId = params.id as string;
  const [pet, setPet] = useState<Pet | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  useEffect(() => {
    fetchPet();
  }, [petId]);

  const fetchPet = async () => {
    try {
      const petDoc = await getDoc(doc(db, "pets", petId));
      if (petDoc.exists()) {
        setPet({ id: petDoc.id, ...petDoc.data() } as Pet);
      }
    } catch (error) {
      console.error("Error al obtener la mascota:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddRecord = async (data: { notes: string; vaccine?: { name: string; date: Date } }) => {
    if (!pet) return;

    try {
      const updates: any = {};
      
      if (data.notes) {
        updates.notes = pet.notes
          ? `${pet.notes}\n\n${format(new Date(), "dd/MM/yyyy")}: ${data.notes}`
          : `${format(new Date(), "dd/MM/yyyy")}: ${data.notes}`;
      }

      if (data.vaccine) {
        const newVaccines = [...(pet.vaccines || []), data.vaccine];
        updates.vaccines = newVaccines;
      }

      await updateDoc(doc(db, "pets", petId), updates);
      await fetchPet();
      setShowModal(false);
    } catch (error) {
      console.error("Error al agregar registro:", error);
    }
  };

  const handleImageUpload = async () => {
    if (!selectedImage || !pet) return;

    try {
      const imageRef = ref(storage, `pets/${petId}/${selectedImage.name}`);
      await uploadBytes(imageRef, selectedImage);
      const downloadURL = await getDownloadURL(imageRef);
      
      const currentImages = pet.images || [];
      await updateDoc(doc(db, "pets", petId), {
        images: [...currentImages, downloadURL],
      });

      await fetchPet();
      setSelectedImage(null);
    } catch (error) {
      console.error("Error al subir imagen:", error);
    }
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando...</p>
        </div>
      </main>
    );
  }

  if (!pet) {
    return (
      <main className="min-h-screen bg-gray-50 pt-20">
        <Header />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <p className="text-gray-600 text-lg">Mascota no encontrada</p>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const birthdate = pet.birthdate?.toDate?.() || new Date(pet.birthdate);

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary p-8 text-white">
              <h1 className="text-4xl font-display font-bold mb-2">{pet.name}</h1>
              <p className="text-white/80">
                {pet.species} • {pet.breed}
              </p>
            </div>

            <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Info */}
              <div className="lg:col-span-2 space-y-6">
                {/* Basic Info */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h2 className="text-2xl font-display font-semibold text-primary mb-4">
                    Información Básica
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Especie</p>
                      <p className="font-medium">{pet.species}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Raza</p>
                      <p className="font-medium">{pet.breed}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Fecha de Nacimiento</p>
                      <p className="font-medium">
                        {format(birthdate, "dd 'de' MMMM 'de' yyyy", { locale: es })}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Edad</p>
                      <p className="font-medium">
                        {Math.floor((new Date().getTime() - birthdate.getTime()) / (365.25 * 24 * 60 * 60 * 1000))}{" "}
                        años
                      </p>
                    </div>
                  </div>
                </div>

                {/* Vaccines */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h2 className="text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                    <Calendar className="w-6 h-6" />
                    Vacunas
                  </h2>
                  {pet.vaccines && pet.vaccines.length > 0 ? (
                    <div className="space-y-3">
                      {pet.vaccines.map((vaccine, index) => {
                        const vaccineDate = vaccine.date?.toDate?.() || new Date(vaccine.date);
                        return (
                          <div
                            key={index}
                            className="bg-white rounded-lg p-4 border border-gray-200"
                          >
                            <div className="flex justify-between items-center">
                              <span className="font-medium">{vaccine.name}</span>
                              <span className="text-sm text-gray-600">
                                {format(vaccineDate, "dd/MM/yyyy", { locale: es })}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-gray-600">No hay vacunas registradas</p>
                  )}
                </div>

                {/* Notes */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h2 className="text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                    <FileText className="w-6 h-6" />
                    Historial Médico
                  </h2>
                  {pet.notes ? (
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <pre className="whitespace-pre-wrap text-gray-700 font-sans">
                        {pet.notes}
                      </pre>
                    </div>
                  ) : (
                    <p className="text-gray-600">No hay notas médicas registradas</p>
                  )}
                </div>

                {/* Images */}
                {pet.images && pet.images.length > 0 && (
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h2 className="text-2xl font-display font-semibold text-primary mb-4">
                      Imágenes
                    </h2>
                    <div className="grid grid-cols-3 gap-4">
                      {pet.images.map((imageUrl, index) => (
                        <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                          <Image
                            src={imageUrl}
                            alt={`Imagen ${index + 1} de ${pet.name}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column - Actions */}
              <div className="space-y-6">
                <motion.button
                  onClick={() => setShowModal(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-4 rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Agregar Registro
                </motion.button>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-display font-semibold text-primary mb-4">
                    Subir Imagen
                  </h3>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setSelectedImage(e.target.files?.[0] || null)}
                    className="mb-4"
                  />
                  {selectedImage && (
                    <motion.button
                      onClick={handleImageUpload}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300"
                    >
                      Subir
                    </motion.button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6"
          >
            <h2 className="text-2xl font-display font-bold text-primary mb-4">
              Agregar Registro
            </h2>
            <PetRecordForm
              onSubmit={handleAddRecord}
              onCancel={() => setShowModal(false)}
            />
          </motion.div>
        </div>
      )}

      <Footer />
    </main>
  );
}

