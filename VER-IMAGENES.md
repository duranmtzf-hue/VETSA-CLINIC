# 🔍 Cómo Ver las Imágenes Agregadas

Si agregaste una imagen en `/public/images/` y no se ve, sigue estos pasos:

## ✅ Pasos para Ver la Imagen

1. **Reinicia el servidor de desarrollo:**
   - Detén el servidor (presiona `Ctrl + C` en la terminal)
   - Vuelve a iniciarlo con `npm run dev`

2. **Verifica el nombre del archivo:**
   - El nombre debe coincidir exactamente (mayúsculas/minúsculas importan)
   - Si la imagen es `weimaraner.webp`, la ruta debe ser `/images/weimaraner.webp`

3. **Limpia la caché del navegador:**
   - Presiona `Ctrl + Shift + R` (Windows/Linux) o `Cmd + Shift + R` (Mac)
   - O abre la consola del navegador y selecciona "Vaciar caché y recargar"

4. **Verifica la ruta:**
   - Las imágenes en `/public/images/` se acceden como `/images/nombre-archivo.ext`
   - Ejemplo: `/public/images/mi-imagen.jpg` → `/images/mi-imagen.jpg`

## 🖼️ Imágenes Configuradas Actualmente

### En la Galería:
- Primera imagen: `/images/weimaraner.webp` (tu imagen actual)
- Segunda imagen: `/images/clinica-1.jpg`
- Tercera imagen: `/images/mascotas.jpg`
- Cuarta imagen: `/images/estetica.jpg`
- Quinta imagen: `/images/equipamiento.jpg`
- Sexta imagen: `/images/cuidado.jpg`

### En "Sobre VETSA":
- `/images/veterinaria.jpg`

## 📝 Para Agregar Tu Imagen en Otra Sección

Si quieres usar tu imagen `weimaraner.webp` en otro lugar, puedes:

1. **Usarla en la sección "Sobre VETSA":**
   Cambia en `app/page.tsx` línea ~314:
   ```tsx
   src="/images/weimaraner.webp"
   ```

2. **Renombrar tu imagen:**
   - Si tu imagen es para "veterinaria", renómbrala a `veterinaria.webp`
   - Si es para la galería, usa los nombres: `clinica-1.webp`, `mascotas.webp`, etc.

## 🔧 Si Aún No Se Ve

1. **Verifica que el archivo esté en la carpeta correcta:**
   ```
   vetsa-clinic-demo/
     └── public/
         └── images/
             └── weimaraner.webp ✅
   ```

2. **Verifica los permisos del archivo**

3. **Abre la consola del navegador (F12)** y busca errores relacionados con la imagen

4. **Prueba accediendo directamente a la URL:**
   ```
   http://localhost:3000/images/weimaraner.webp
   ```
   Si esto no funciona, el archivo no está en la ubicación correcta.

