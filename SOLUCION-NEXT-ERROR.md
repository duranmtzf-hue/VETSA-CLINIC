# ✅ SOLUCIÓN AL ERROR: "next no se reconoce como comando"

## 🔴 Problema detectado:
El error muestra:
```
"next" no se reconoce como un comando interno o externo
```

Esto significa que las dependencias de Node.js NO están instaladas correctamente.

---

## ✅ SOLUCIÓN (Copia y pega estos comandos en orden):

### Paso 1: Instala las dependencias
```powershell
npm install
```

Esto instalará todas las dependencias necesarias (Next.js, React, etc.)
**Espera a que termine** (puede tomar 1-2 minutos)

### Paso 2: Una vez que termine `npm install`, ejecuta:
```powershell
npm run dev
```

### Paso 3: Espera a ver este mensaje:
```
✓ Ready in X seconds
○ Local: http://localhost:3000
```

### Paso 4: Abre tu navegador
Ve a: **http://localhost:3000**

---

## 📋 COMANDOS COMPLETOS EN ORDEN:

1. Primero instala las dependencias:
```powershell
cd "C:\Users\duran\OneDrive\Desktop\Nueva carpeta\vetsa-clinic-demo"
npm install
```

2. Espera a que termine `npm install` (verás "added X packages")

3. Luego inicia el servidor:
```powershell
npm run dev
```

4. Espera a ver "Ready" y abre http://localhost:3000

---

## ⚠️ IMPORTANTE:

- **DEBES ejecutar `npm install` PRIMERO** antes de `npm run dev`
- `npm install` instala Next.js y todas las demás dependencias
- Esto solo necesitas hacerlo la primera vez (o si borras node_modules)
- Puede tomar 1-2 minutos, ten paciencia

---

## 🔍 Cómo saber que `npm install` terminó correctamente:

Al final deberías ver algo como:
```
added 500+ packages, and audited 501 packages in 2m
```

Si ves errores durante `npm install`, compártelos para ayudarte.

---

## 🚨 Si `npm install` falla:

### Error: "npm no se reconoce como comando"
- Instala Node.js desde: https://nodejs.org/
- Reinicia PowerShell
- Intenta de nuevo

### Error de permisos
- Ejecuta PowerShell como Administrador
- Intenta de nuevo

---

**¡Ejecuta `npm install` primero y luego `npm run dev`!** ✅

