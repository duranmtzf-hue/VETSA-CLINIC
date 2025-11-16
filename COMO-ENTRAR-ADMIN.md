# 🔐 Cómo Entrar al Panel de Administración

## 📍 Acceso al Panel

### Opción 1: Desde el navegador
1. Ve a: `http://localhost:3000/admin`
2. O haz clic en el enlace **"Admin"** en el menú superior del sitio

### Opción 2: Desde el Header
- En la barra de navegación superior, verás un enlace **"Admin"**
- Haz clic en él para ir directamente al panel

## 🆕 Crear Cuenta de Administrador

**IMPORTANTE:** Necesitas crear una cuenta de administrador en Firebase Console primero.

### Paso 1: Ir a Firebase Console
1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Selecciona tu proyecto de VETSA

### Paso 2: Configurar Authentication
1. En el menú lateral, ve a **"Authentication"** (Autenticación)
2. Si no está habilitado, haz clic en **"Get Started"** (Comenzar)
3. Ve a la pestaña **"Sign-in method"** (Método de inicio de sesión)
4. Habilita **"Email/Password"** (Correo electrónico/Contraseña)
5. Haz clic en **"Enable"** (Habilitar) y luego en **"Save"** (Guardar)

### Paso 3: Crear Usuario Administrador
1. Ve a la pestaña **"Users"** (Usuarios)
2. Haz clic en **"Add user"** (Agregar usuario)
3. Ingresa:
   - **Email:** `admin@vetsa.com` (o el email que prefieras)
   - **Password:** Una contraseña segura (guárdala bien)
4. Haz clic en **"Add user"** (Agregar usuario)

## 🔑 Iniciar Sesión

1. Ve a `http://localhost:3000/admin`
2. Ingresa el **email** y **contraseña** que creaste en Firebase
3. Haz clic en **"Iniciar Sesión"**

## ✅ Si Ya Tienes una Cuenta

Si ya creaste un usuario en Firebase:
1. Solo ve a `/admin`
2. Ingresa tu email y contraseña
3. ¡Listo! Ya puedes gestionar las citas

## 🆘 Solución de Problemas

### Error: "Credenciales incorrectas"
- Verifica que el email y contraseña sean correctos
- Asegúrate de que hayas creado el usuario en Firebase Console

### Error: "Firebase not configured"
- Verifica que tengas el archivo `.env.local` configurado
- Asegúrate de que las variables de entorno estén correctas

### No se puede crear usuario
- Verifica que Authentication esté habilitado en Firebase
- Asegúrate de que el método Email/Password esté activado

## 📝 Nota Importante

El panel de administración está protegido, solo los usuarios autenticados con Firebase pueden acceder. No hay restricciones adicionales de rol, cualquier usuario autenticado puede ver y gestionar todas las citas.

## 🔒 Seguridad

Para mayor seguridad en producción, considera:
- Usar reglas de Firestore para restringir acceso
- Implementar roles de usuario (admin, empleado, etc.)
- Limitar el número de intentos de login

---

**¿Necesitas ayuda?** Verifica que Firebase esté configurado correctamente y que Authentication esté habilitado.

