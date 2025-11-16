# 🚀 Cómo Ver la Aplicación Web

## Pasos para ver la app en tu navegador:

### 1. Abrir el navegador
Abre tu navegador web (Chrome, Firefox, Edge, etc.)

### 2. Ir a la dirección local
Ve a la siguiente dirección:
```
http://localhost:3000
```

### 3. Si el servidor no está corriendo
Abre una terminal/PowerShell en la carpeta del proyecto y ejecuta:

```powershell
cd "C:\Users\duran\OneDrive\Desktop\Nueva carpeta\vetsa-clinic-demo"
npm run dev
```

### 4. Espera a que aparezca este mensaje:
```
✓ Ready in X seconds
○ Local: http://localhost:3000
```

### 5. Abre tu navegador
Una vez que veas el mensaje anterior, abre tu navegador y ve a:
**http://localhost:3000**

---

## 📋 Páginas disponibles:

- **http://localhost:3000** - Página principal (Landing page)
- **http://localhost:3000/reservar** - Formulario para reservar citas
- **http://localhost:3000/admin** - Panel administrativo (requiere login)
- **http://localhost:3000/pet/[id]** - Ficha médica de mascota

---

## ⚠️ Notas importantes:

### Si ves errores de Firebase:
El proyecto necesita las credenciales de Firebase configuradas en `.env.local`. 
Por ahora puedes ver la interfaz, pero algunas funciones (como guardar citas) requieren Firebase.

### Para configurar Firebase:
1. Crea un proyecto en [Firebase Console](https://console.firebase.google.com/)
2. Habilita Authentication (Email/Password)
3. Crea una base de datos Firestore
4. Habilita Storage
5. Copia las credenciales y pégalas en `.env.local`

### Detener el servidor:
Presiona `Ctrl + C` en la terminal donde está corriendo `npm run dev`

---

## 🎨 Características que puedes ver:

✅ **Página Principal:**
- Hero section con gradiente
- Sección de servicios con tarjetas animadas
- Mapa embebido de Google Maps
- Footer con información de contacto

✅ **Formulario de Reservación:**
- Formulario completo con validación
- Selector de fecha y hora
- Diseño moderno y responsivo

✅ **Panel Administrativo:**
- Login con Firebase Auth
- Gestión de citas (requiere credenciales de Firebase)

✅ **Diseño:**
- Animaciones suaves con Framer Motion
- Bordes redondeados
- Sombras suaves
- Colores personalizados (azul oscuro, coral, azul claro)
- Completamente responsivo

---

## 🐛 Solución de problemas:

### Puerto 3000 ya está en uso:
```powershell
# Cambia el puerto en package.json o usa:
$env:PORT=3001; npm run dev
```

### Error de módulos:
```powershell
npm install
```

### Error de TypeScript:
```powershell
npm install --save-dev typescript @types/react @types/node
```

---

¡Disfruta explorando la aplicación! 🎉

