// TypeScript types for Firestore models

import { Timestamp } from "firebase/firestore";

// Appointment types
export type AppointmentStatus = "pending" | "confirmed" | "completed" | "cancelled";

export interface Appointment {
  id: string;
  clientName: string;
  clientPhone: string;
  petName: string;
  service: string;
  dateTime: Timestamp | Date;
  status: AppointmentStatus;
  createdAt?: Timestamp | Date;
}

// Pet types
export interface Vaccine {
  name: string;
  date: Timestamp | Date;
}

export interface Pet {
  id: string;
  ownerId: string;
  name: string;
  species: string;
  breed: string;
  birthdate: Timestamp | Date;
  vaccines: Vaccine[];
  notes: string;
  images?: string[];
}

// Client types
export interface Client {
  id: string;
  name: string;
  phone: string;
  email?: string;
}

// Service types
export interface Service {
  id: string;
  name: string;
  price: number;
  duration?: number;
  description?: string;
}

