# 🚀 Guía de Despliegue - Solución al Problema de Netlify

## ⚠️ Problema Actual
Tu sitio en Netlify está pausado porque alcanzó los límites de uso del plan gratuito.

---

## ✅ OPCIÓN 1: Migrar a Vercel (RECOMENDADO)

Vercel tiene un plan gratuito más generoso y está optimizado para Next.js.

### Paso 1: Crear cuenta en Vercel
1. Ve a: https://vercel.com/
2. Haz clic en **"Sign Up"**
3. Conecta con tu cuenta de **GitHub** (la misma que usas para este repositorio)

### Paso 2: Importar el proyecto
1. En el dashboard de Vercel, haz clic en **"Add New..."** → **"Project"**
2. Selecciona tu repositorio: `VETSA-CLINIC`
3. Vercel detectará automáticamente que es un proyecto Next.js

### Paso 3: Configurar variables de entorno
1. En la sección **"Environment Variables"**, agrega todas las variables de Firebase:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=tu_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=tu_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=tu_app_id
   ```
2. Puedes copiar estas variables desde tu configuración de Netlify o desde tu archivo `.env.local`

### Paso 4: Desplegar
1. Haz clic en **"Deploy"**
2. Espera 2-3 minutos mientras se construye y despliega
3. ¡Listo! Tu sitio estará disponible en una URL como: `tu-proyecto.vercel.app`

### Ventajas de Vercel:
- ✅ Plan gratuito más generoso (100GB de ancho de banda vs 100GB de Netlify)
- ✅ Optimizado para Next.js (creado por el mismo equipo)
- ✅ Despliegues más rápidos
- ✅ SSL automático
- ✅ Dominio personalizado gratuito

---

## 🔧 OPCIÓN 2: Resolver en Netlify

### Opción 2A: Actualizar el plan de Netlify
1. Ve a: https://app.netlify.com/
2. Selecciona tu sitio
3. Ve a **"Site settings"** → **"Billing"**
4. Actualiza a un plan de pago (Pro: $19/mes)

### Opción 2B: Esperar al reinicio del período
- Si estás en el plan gratuito, espera a que se reinicie el período de facturación (generalmente mensual)
- El sitio se reactivará automáticamente cuando se reinicie

### Opción 2C: Verificar qué límite se alcanzó
1. Ve a **"Site settings"** → **"Usage & billing"**
2. Revisa qué límite se alcanzó:
   - **Bandwidth**: Ancho de banda mensual
   - **Build minutes**: Tiempo de construcción
   - **Visits**: Número de visitas

---

## 📋 Comparación de Planes Gratuitos

| Característica | Netlify | Vercel |
|----------------|---------|--------|
| Ancho de banda | 100 GB/mes | 100 GB/mes |
| Build minutes | 300 min/mes | 6000 min/mes |
| Sitios | Ilimitados | Ilimitados |
| SSL | ✅ | ✅ |
| Optimización Next.js | ⚠️ | ✅✅ |

---

## 🎯 Recomendación

**Migra a Vercel** porque:
1. Ya tienes `vercel.json` configurado
2. Mejor integración con Next.js
3. Más build minutes gratuitos
4. Proceso más simple

---

## 🔐 Variables de Entorno Necesarias

Asegúrate de tener estas variables configuradas en la plataforma que elijas:

```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

---

## ❓ ¿Necesitas ayuda?

Si tienes problemas durante la migración, verifica:
1. ✅ Que todas las variables de entorno estén configuradas
2. ✅ Que el repositorio esté conectado correctamente
3. ✅ Que el build se complete sin errores

