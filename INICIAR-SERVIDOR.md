# 🚀 Cómo Iniciar el Servidor y Ver la Página Web

## ⚠️ PROBLEMA: "No me deja ver la página web"

Esto significa que el servidor de desarrollo NO está corriendo. Necesitas iniciarlo manualmente.

---

## 📋 PASOS PARA INICIAR EL SERVIDOR:

### 1. Abre PowerShell o Terminal

Presiona `Windows + R`, escribe `powershell` y presiona Enter

### 2. Navega a la carpeta del proyecto

Copia y pega este comando:
```powershell
cd "C:\Users\duran\OneDrive\Desktop\Nueva carpeta\vetsa-clinic-demo"
```

### 3. Verifica que estás en la carpeta correcta

Ejecuta:
```powershell
dir
```

Deberías ver carpetas como: `app`, `components`, `node_modules`, `package.json`

### 4. Inicia el servidor de desarrollo

Ejecuta:
```powershell
npm run dev
```

### 5. Espera a ver este mensaje:

```
✓ Ready in X seconds
○ Local: http://localhost:3000
```

**ES MUY IMPORTANTE:** Debes esperar a ver el mensaje "Ready" antes de abrir el navegador.

### 6. Abre tu navegador

Una vez que veas el mensaje "Ready", abre tu navegador (Chrome, Firefox, Edge) y ve a:

```
http://localhost:3000
```

---

## ✅ VERIFICACIÓN:

Si el servidor está corriendo correctamente, deberías ver:

1. En la terminal:
   - Mensaje "Ready in X seconds"
   - "Local: http://localhost:3000"
   - La terminal NO debe cerrarse (debe seguir corriendo)

2. En el navegador:
   - La página principal de VETSA Clinic
   - Hero section con el título "VETSA Clinic"
   - Sección de servicios

---

## ❌ PROBLEMAS COMUNES:

### Problema 1: "npm: no se reconoce como comando"
**Solución:** Node.js no está instalado o no está en el PATH
- Descarga Node.js desde: https://nodejs.org/
- Instálalo y reinicia PowerShell

### Problema 2: "Cannot find module"
**Solución:** Las dependencias no están instaladas
```powershell
npm install
```
Luego ejecuta `npm run dev` de nuevo

### Problema 3: "Port 3000 is already in use"
**Solución:** El puerto 3000 ya está en uso
```powershell
# Cierra la aplicación que está usando el puerto 3000
# O cambia el puerto:
$env:PORT=3001; npm run dev
```
Luego abre: http://localhost:3001

### Problema 4: El navegador muestra "Esta página no está disponible" o "ERR_CONNECTION_REFUSED"
**Solución:** El servidor NO está corriendo
- Verifica que veas el mensaje "Ready" en la terminal
- Asegúrate de que la terminal NO esté cerrada
- El servidor debe estar corriendo para poder ver la página

### Problema 5: La página carga pero hay errores de Firebase
**Solución:** Esto es normal, puedes ver la interfaz pero necesitas configurar Firebase para usar todas las funciones
- Edita el archivo `.env.local` con tus credenciales de Firebase
- O simplemente navega por la interfaz sin usar funciones de Firebase

---

## 🛑 DETENER EL SERVIDOR:

Para detener el servidor, presiona:
```
Ctrl + C
```
en la terminal donde está corriendo `npm run dev`

---

## 📝 RESUMEN RÁPIDO:

1. Abre PowerShell
2. Ejecuta: `cd "C:\Users\duran\OneDrive\Desktop\Nueva carpeta\vetsa-clinic-demo"`
3. Ejecuta: `npm run dev`
4. Espera a ver "Ready"
5. Abre navegador: http://localhost:3000
6. **NO cierres la terminal mientras usas la página**

¡Listo! 🎉

