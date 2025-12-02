# 🚀 Configuración de Netlify - Guía Completa

## ✅ Cambios Realizados

1. ✅ Archivo `.nvmrc` creado (Node 18)
2. ✅ `package.json` actualizado con `engines`
3. ✅ `netlify.toml` configurado con el plugin de Next.js

## 📋 Pasos para Desplegar en Netlify

### 1. Conectar tu Repositorio a Netlify

1. Ve a [Netlify](https://app.netlify.com/)
2. Haz clic en **"Add new site"** → **"Import an existing project"**
3. Conecta tu repositorio de GitHub
4. Selecciona el repositorio `VETSA-CLINIC`

### 2. Configurar Variables de Entorno

**⚠️ IMPORTANTE:** Debes configurar estas variables en Netlify antes de desplegar:

1. En Netlify, ve a: **Site settings** → **Environment variables**
2. Agrega las siguientes variables (una por una):

```
NEXT_PUBLIC_FIREBASE_API_KEY=tu_api_key_aqui
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu_auth_domain_aqui
NEXT_PUBLIC_FIREBASE_PROJECT_ID=tu_project_id_aqui
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=tu_storage_bucket_aqui
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id_aqui
NEXT_PUBLIC_FIREBASE_APP_ID=tu_app_id_aqui
```

**Dónde encontrar estos valores:**
- Ve a [Firebase Console](https://console.firebase.google.com/)
- Selecciona tu proyecto
- Ve a **Project Settings** (⚙️) → **General**
- En "Your apps", selecciona tu app web
- Copia los valores de configuración

### 3. Configuración de Build (Ya está configurada)

El archivo `netlify.toml` ya tiene la configuración correcta:
- Build command: `npm run build`
- Node version: 18
- Plugin: `@netlify/plugin-nextjs` (se instalará automáticamente)

### 4. Desplegar

1. Haz clic en **"Deploy site"**
2. Espera a que termine el build (5-10 minutos la primera vez)
3. ¡Listo! Tu sitio estará disponible en `https://tu-sitio.netlify.app`

## 🔧 Configuración Adicional Recomendada

### Configurar Dominio Personalizado (Opcional)

1. En Netlify, ve a **Site settings** → **Domain management**
2. Haz clic en **"Add custom domain"**
3. Sigue las instrucciones para configurar tu dominio

### Configurar Reglas de Firestore

**⚠️ IMPORTANTE:** No olvides configurar las reglas de Firestore:

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. **Firestore Database** → **Rules**
3. Usa estas reglas (temporales para desarrollo):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /appointments/{appointmentId} {
      allow read, write: if true;
    }
    match /pets/{petId} {
      allow read, write: if true;
    }
    match /clients/{clientId} {
      allow read, write: if true;
    }
  }
}
```

4. Haz clic en **"Publish"**

## 🐛 Solución de Problemas

### Error: "Build failed"
- Verifica que todas las variables de entorno estén configuradas
- Revisa los logs de build en Netlify para ver el error específico

### Error: "Firebase not initialized"
- Verifica que las variables de entorno tengan el prefijo `NEXT_PUBLIC_`
- Asegúrate de que los valores sean correctos (sin espacios extra)

### Error: "Permission denied" al crear citas
- Verifica que las reglas de Firestore estén configuradas correctamente
- Revisa la sección "Configurar Reglas de Firestore" arriba

## 📝 Notas

- El plugin `@netlify/plugin-nextjs` se instalará automáticamente durante el build
- El sitio se actualizará automáticamente cada vez que hagas push a la rama `main`
- Puedes ver los logs de build en tiempo real en el dashboard de Netlify

