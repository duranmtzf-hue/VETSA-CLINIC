"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from "firebase/auth";
import { collection, query, orderBy, getDocs, updateDoc, doc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { format } from "date-fns";
import es from "date-fns/locale/es";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import AdminAppointmentList from "@/components/AdminAppointmentList";
import AdminStats from "@/components/AdminStats";
import AdminFilters from "@/components/AdminFilters";
import { LogOut, Lock, Download, FileText } from "lucide-react";

interface Appointment {
  id: string;
  clientName: string;
  clientPhone: string;
  petName: string;
  service: string;
  dateTime: any;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  createdAt?: any;
}

export default function AdminPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [filteredAppointments, setFilteredAppointments] = useState<Appointment[]>([]);
  const [error, setError] = useState("");
  const [filters, setFilters] = useState({ search: "", status: "all", dateFilter: "all" });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
      if (currentUser) {
        fetchAppointments();
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchAppointments = async () => {
    try {
      const q = query(collection(db, "appointments"), orderBy("dateTime", "asc"));
      const querySnapshot = await getDocs(q);
      const appointmentsData: Appointment[] = [];
      querySnapshot.forEach((doc) => {
        appointmentsData.push({
          id: doc.id,
          ...doc.data(),
        } as Appointment);
      });
      setAppointments(appointmentsData);
      setFilteredAppointments(appointmentsData);
    } catch (error) {
      console.error("Error al obtener citas:", error);
    }
  };

  // Función para aplicar filtros
  useEffect(() => {
    let filtered = [...appointments];

    // Filtro por búsqueda
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (appointment) =>
          appointment.clientName.toLowerCase().includes(searchLower) ||
          appointment.petName.toLowerCase().includes(searchLower) ||
          appointment.clientPhone.includes(searchLower)
      );
    }

    // Filtro por estado
    if (filters.status !== "all") {
      filtered = filtered.filter((appointment) => appointment.status === filters.status);
    }

    // Filtro por fecha
    if (filters.dateFilter !== "all") {
      const now = new Date();
      now.setHours(0, 0, 0, 0);
      
      filtered = filtered.filter((appointment) => {
        const dateTime = appointment.dateTime?.toDate?.() || 
          (appointment.dateTime instanceof Date ? appointment.dateTime : new Date(appointment.dateTime));
        const appointmentDate = new Date(dateTime);
        appointmentDate.setHours(0, 0, 0, 0);

        switch (filters.dateFilter) {
          case "today":
            return appointmentDate.getTime() === now.getTime();
          case "week":
            const weekStart = new Date(now);
            weekStart.setDate(now.getDate() - now.getDay());
            const weekEnd = new Date(weekStart);
            weekEnd.setDate(weekStart.getDate() + 6);
            return appointmentDate >= weekStart && appointmentDate <= weekEnd;
          case "month":
            const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
            const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0);
            return appointmentDate >= monthStart && appointmentDate <= monthEnd;
          case "upcoming":
            return appointmentDate >= now;
          default:
            return true;
        }
      });
    }

    setFilteredAppointments(filtered);
  }, [appointments, filters]);

  // Función para exportar a PDF
  const exportToPDF = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    const statusLabels: { [key: string]: string } = {
      pending: "Pendiente",
      confirmed: "Confirmada",
      completed: "Completada",
      cancelled: "Cancelada"
    };

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Reporte de Citas - VETSA</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            h1 { color: #0F172A; text-align: center; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #0F172A; color: white; }
            tr:nth-child(even) { background-color: #f2f2f2; }
            .status-pending { color: #d97706; }
            .status-confirmed { color: #2563eb; }
            .status-completed { color: #16a34a; }
            .status-cancelled { color: #dc2626; }
          </style>
        </head>
        <body>
          <h1>Reporte de Citas - VETSA Torreón</h1>
          <p><strong>Fecha de generación:</strong> ${new Date().toLocaleDateString('es-ES', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}</p>
          <p><strong>Total de citas:</strong> ${filteredAppointments.length}</p>
          <table>
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Mascota</th>
                <th>Servicio</th>
                <th>Fecha y Hora</th>
                <th>Teléfono</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              ${filteredAppointments.map(appointment => {
                const dt = appointment.dateTime?.toDate?.() || 
                  (appointment.dateTime instanceof Date ? appointment.dateTime : new Date(appointment.dateTime));
                const formattedDate = dt.toLocaleDateString('es-ES', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                });
                const formattedTime = dt.toLocaleTimeString('es-ES', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                });
                return `
                  <tr>
                    <td>${appointment.clientName}</td>
                    <td>${appointment.petName}</td>
                    <td>${appointment.service}</td>
                    <td>${formattedDate} - ${formattedTime}</td>
                    <td>${appointment.clientPhone}</td>
                    <td class="status-${appointment.status}">${statusLabels[appointment.status] || appointment.status}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
    setTimeout(() => {
      printWindow.print();
    }, 250);
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSigningIn(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      setError("Credenciales incorrectas. Por favor, intenta de nuevo.");
      console.error("Error al iniciar sesión:", error);
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const updateAppointmentStatus = async (appointmentId: string, status: string) => {
    try {
      const appointmentRef = doc(db, "appointments", appointmentId);
      await updateDoc(appointmentRef, { status });
      fetchAppointments();
    } catch (error) {
      console.error("Error al actualizar el estado:", error);
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

  if (!user) {
    return (
      <main className="min-h-screen bg-gray-50 pt-20">
        <Header />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-display font-bold text-primary mb-2">
                Panel Administrativo
              </h1>
              <p className="text-gray-600">Inicia sesión para continuar</p>
            </div>

            <div className="mb-6 text-center">
              <p className="text-sm text-white/80 mb-2">
                ¿No tienes cuenta?
              </p>
              <a
                href="/admin/register"
                className="inline-block text-accent hover:text-accent/80 font-medium text-sm underline"
              >
                Crear cuenta de administrador
              </a>
            </div>

            <form onSubmit={handleSignIn} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="admin@vetsa.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contraseña
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="••••••••"
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              <motion.button
                type="submit"
                disabled={isSigningIn}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSigningIn ? "Iniciando sesión..." : "Iniciar Sesión"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-display font-bold text-primary mb-2">
              Panel Administrativo
            </h1>
            <p className="text-gray-600">Gestiona las citas de la clínica</p>
          </div>
          <div className="flex items-center gap-4">
            <motion.button
              onClick={exportToPDF}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Exportar PDF
            </motion.button>
            <motion.button
              onClick={handleSignOut}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300"
            >
              <LogOut className="w-5 h-5" />
              Cerrar Sesión
            </motion.button>
          </div>
        </div>

        {/* Estadísticas */}
        <AdminStats appointments={appointments} />

        {/* Filtros */}
        <AdminFilters onFilterChange={setFilters} />

        {/* Lista de citas */}
        <AdminAppointmentList
          appointments={filteredAppointments}
          onUpdateStatus={updateAppointmentStatus}
          onRefresh={fetchAppointments}
        />
      </div>
    </main>
  );
}

