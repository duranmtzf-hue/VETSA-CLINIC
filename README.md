# VETSA Clinic Demo

Aplicación web completa para gestión de clínica veterinaria construida con Next.js 14, TypeScript, TailwindCSS y Firebase.

## Características

- 🏥 **Sistema de reservaciones**: Formulario completo para agendar citas
- 👨‍⚕️ **Panel administrativo**: Gestión de citas con estados (pendiente, confirmada, completada, cancelada)
- 📋 **Fichas médicas**: Registro completo de mascotas con historial, vacunas e imágenes
- 📱 **PWA**: Instalable como aplicación móvil
- 🎨 **Diseño moderno**: UI limpia con animaciones suaves usando Framer Motion
- 🔐 **Autenticación**: Login seguro con Firebase Auth

## Tecnologías

- **Next.js 14** con App Router
- **TypeScript**
- **TailwindCSS** con configuración personalizada
- **Firebase** (Auth, Firestore, Storage)
- **Framer Motion** para animaciones
- **React Hook Form** para formularios
- **Date-fns** para manejo de fechas
- **React DatePicker** para selección de fechas

## Instalación

1. Clona el repositorio
```bash
git clone <repo-url>
cd vetsa-clinic-demo
```

2. Instala las dependencias
```bash
npm install
```

3. Configura las variables de entorno
Crea un archivo `.env.local` en la raíz del proyecto y completa con tus credenciales de Firebase (usa `env.example.txt` como referencia):
```bash
# En Windows PowerShell:
copy env.example.txt .env.local

# En Linux/Mac:
cp env.example.txt .env.local
```

Luego edita `.env.local` y reemplaza los valores placeholder con tus credenciales reales de Firebase.

4. Inicia el servidor de desarrollo
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Configuración de Firebase

1. Crea un proyecto en [Firebase Console](https://console.firebase.google.com/)
2. Habilita Authentication (Email/Password)
3. Crea una base de datos Firestore
4. Habilita Storage
5. Copia las credenciales a `.env.local`

## Estructura de Firestore

### Colecciones:

- **appointments**: Citas agendadas
- **pets**: Información de mascotas
- **clients**: Datos de clientes
- **services**: Servicios disponibles

## Imágenes Necesarias

### Imágenes de Contenido
Coloca las siguientes imágenes en `public/images/`:
- `hero.jpg` - Imagen de fondo para la sección Hero (1920x1080px recomendado)
- `logo.png` - Logo de VETSA (opcional, actualmente se usa un placeholder)

### Iconos PWA
Genera y coloca los siguientes iconos en `public/icons/` para habilitar la PWA:
- icon-72x72.png hasta icon-512x512.png

Ver `public/images/README.md` y `public/icons/README.md` para más detalles.

## Despliegue en Vercel

1. Conecta tu repositorio a Vercel
2. Agrega las variables de entorno en la configuración del proyecto (Settings > Environment Variables)
3. Vercel detectará automáticamente Next.js y desplegará la aplicación
4. El dominio temporal se generará automáticamente

### Variables de Entorno en Vercel
Asegúrate de agregar todas las variables de entorno de Firebase en la configuración de Vercel:
- NEXT_PUBLIC_FIREBASE_API_KEY
- NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
- NEXT_PUBLIC_FIREBASE_PROJECT_ID
- NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
- NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
- NEXT_PUBLIC_FIREBASE_APP_ID

## Scripts

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## Licencia

MIT

