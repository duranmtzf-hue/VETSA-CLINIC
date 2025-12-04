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
    // En el cliente, NO lanzar error, solo retornar dummy y mostrar advertencia
    console.warn(
      "⚠️ Firebase no está configurado. Por favor, configura las variables de entorno NEXT_PUBLIC_FIREBASE_* en Netlify."
    );
    return {
      apiKey: "dummy-key",
      authDomain: "dummy.firebaseapp.com",
      projectId: "dummy-project",
      storageBucket: "dummy.appspot.com",
      messagingSenderId: "000000000000",
      appId: "1:000000000000:web:dummy",
    };
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
let app: FirebaseApp | undefined;
let auth: Auth | undefined;
let db: Firestore | undefined;
let storage: FirebaseStorage | undefined;

// Verificar si la configuración es válida (no dummy)
const isValidConfig = firebaseConfig.apiKey !== "dummy-key" && 
                      firebaseConfig.projectId !== "dummy-project";

if (typeof window !== "undefined" && isValidConfig) {
  // Solo inicializar en el cliente si la configuración es válida
  try {
    if (getApps().length === 0) {
      app = initializeApp(firebaseConfig);
    } else {
      app = getApps()[0];
    }
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);
  } catch (error) {
    console.error("Error al inicializar Firebase:", error);
    // No lanzar error, solo dejar undefined para que los componentes lo manejen
  }
} else if (typeof window !== "undefined" && !isValidConfig) {
  // En el cliente pero sin configuración válida
  console.warn("⚠️ Firebase no está configurado correctamente. Algunas funcionalidades no estarán disponibles.");
  // Dejar undefined para que los componentes verifiquen antes de usar
}

// Durante SSR/Build, siempre usar configuración dummy (no se usará)
if (typeof window === "undefined") {
  try {
    if (getApps().length === 0) {
      app = initializeApp(firebaseConfig);
    } else {
      app = getApps()[0];
    }
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);
  } catch (error) {
    // Ignorar errores durante SSR
  }
}

export { auth, db, storage };
export default app;

