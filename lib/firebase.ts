import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import { getStorage, FirebaseStorage } from "firebase/storage";

// Validar que las variables de entorno estén disponibles
const getFirebaseConfig = () => {
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
  const messagingSenderId = process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID;
  const appId = process.env.NEXT_PUBLIC_FIREBASE_APP_ID;

  // Si faltan variables durante el build, retornar configuración dummy (no se usará)
  if (!apiKey || !authDomain || !projectId || !storageBucket || !messagingSenderId || !appId) {
    // Durante el build/SSR, retornar valores dummy para evitar errores
    if (typeof window === "undefined") {
      return {
        apiKey: "dummy-key",
        authDomain: "dummy.firebaseapp.com",
        projectId: "dummy-project",
        storageBucket: "dummy.appspot.com",
        messagingSenderId: "000000000000",
        appId: "1:000000000000:web:dummy",
      };
    }
    throw new Error(
      "Missing Firebase configuration. Please check your environment variables."
    );
  }

  return {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
  };
};

const firebaseConfig = getFirebaseConfig();

// Initialize Firebase solo si hay una app ya inicializada o si estamos en el cliente
let app: FirebaseApp;
let auth: Auth;
let db: Firestore;
let storage: FirebaseStorage;

if (typeof window !== "undefined") {
  // Solo inicializar en el cliente
  if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }
  auth = getAuth(app);
  db = getFirestore(app);
  storage = getStorage(app);
} else {
  // Durante SSR/Build, inicializar con configuración dummy (no se usará)
  if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }
  auth = getAuth(app);
  db = getFirestore(app);
  storage = getStorage(app);
}

export { auth, db, storage };
export default app;

