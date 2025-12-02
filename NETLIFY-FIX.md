# 🔧 Solución para el Error de Publish Directory en Netlify

## ⚠️ Problema

El error indica que el "Publish directory" está configurado en la UI de Netlify como el directorio raíz del repositorio, lo cual no es compatible con el plugin de Next.js.

## ✅ Solución Rápida (2 minutos)

### Opción 1: Desde la UI de Netlify (RECOMENDADO)

1. Ve a tu sitio en [Netlify Dashboard](https://app.netlify.com/)
2. Ve a **Site settings** → **Build & deploy** → **Continuous Deployment**
3. Haz clic en **"Edit settings"** en la sección "Build settings"
4. Busca el campo **"Publish directory"**
5. **BORRA el valor** (déjalo vacío)
6. Haz clic en **"Save"**
7. Ve a **Deploys** y haz clic en **"Trigger deploy"** → **"Deploy site"**

### Opción 2: Verificar netlify.toml

El archivo `netlify.toml` ya está configurado correctamente (sin publish directory), pero si el problema persiste:

1. Asegúrate de que en la UI de Netlify el "Publish directory" esté vacío
2. El plugin de Next.js manejará automáticamente dónde publicar

## 📝 Nota Importante

- El plugin `@netlify/plugin-nextjs` **debe** controlar el publish directory
- No debes configurar manualmente el publish directory cuando usas este plugin
- Si lo configuraste antes en la UI, simplemente bórralo

## ✅ Después de corregir

1. El build debería completarse exitosamente
2. Tu sitio estará disponible en `https://tu-sitio.netlify.app`
3. Los futuros deploys funcionarán automáticamente

