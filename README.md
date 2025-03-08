# 711 d.C. - Juego Narrativo Interactivo

711 d.C. es un juego narrativo interactivo con una fuerte carga de historia y toma de decisiones. El jugador asume el papel de un personaje en una aventura medieval en la que deberá tomar decisiones estratégicas que afectarán el curso de la historia.

## Características del Proyecto
- 📖 Historia inmersiva con múltiples decisiones.
- 🏰 Estética medieval con una interfaz de "libro abierto".
- 🛠 Desarrollado con React.
- 🎭 Sistema de inventario y atributos de personaje.

---

## 📌 Cómo Configurar el Proyecto en tu Máquina

### 🔹 1. Requisitos Previos
Antes de comenzar, asegúrate de tener instalados los siguientes programas:
- **Node.js** (descárgalo en [https://nodejs.org/](https://nodejs.org/))
- **Git** (descárgalo en [https://git-scm.com/](https://git-scm.com/))

Para verificar que están instalados, abre la terminal y ejecuta:
```sh
node -v  # Muestra la versión de Node.js
npm -v   # Muestra la versión de npm (Node Package Manager)
git --version  # Muestra la versión de Git
```

Si ves números de versión en la terminal, significa que están instalados correctamente.

---

### 🔹 2. Clonar el Repositorio desde GitHub
Para trabajar en el proyecto, primero debes descargarlo desde GitHub. Abre la terminal y ejecuta:
```sh
git clone https://github.com/tu-usuario/711dc.git
```
Reemplaza `tu-usuario` con tu nombre de usuario en GitHub. Esto descargará el código fuente del proyecto en tu computadora.

Luego, entra a la carpeta del proyecto:
```sh
cd 711dc
```

---

### 🔹 3. Instalar Dependencias
El proyecto usa varias librerías de JavaScript. Para instalarlas, ejecuta:
```sh
npm install
```
Esto descargará todas las dependencias necesarias.

---

### 🔹 4. Ejecutar el Juego en Modo Desarrollo
Para iniciar el juego en tu navegador, ejecuta:
```sh
npm run dev
```
Esto abrirá una ventana en tu navegador con el juego en ejecución. Si no se abre automáticamente, ve a la URL que aparece en la terminal, normalmente:
```
http://localhost:5173/
```

---

## 🔧 Cómo Hacer Cambios en el Código y Subirlos a GitHub

Si quieres modificar el código y subirlo a GitHub, sigue estos pasos:

### 🔹 1. Crear una Nueva Rama (Opcional, pero Recomendado)
```sh
git checkout -b nombre-de-tu-rama
```
Cambia `nombre-de-tu-rama` por un nombre descriptivo, como `mejoras-ui` o `nueva-historia`.

### 🔹 2. Hacer Cambios y Guardarlos
Edita los archivos en tu editor de código favorito (por ejemplo, VS Code). Luego, guarda los cambios y verifica qué archivos han sido modificados:
```sh
git status
```

Si los cambios están listos, agrégales seguimiento:
```sh
git add .
```

Luego, guarda un mensaje explicando los cambios:
```sh
git commit -m "Descripción breve de los cambios"
```

### 🔹 3. Subir los Cambios a GitHub
```sh
git push origin nombre-de-tu-rama
```
Esto subirá los cambios a tu repositorio en GitHub.

Si quieres fusionar tu rama con la principal (`main`), abre GitHub, ve a "Pull Requests" y crea una nueva solicitud de fusión.

---

## 🎯 Contribuir al Proyecto
Si otras personas quieren colaborar en el proyecto, pueden clonar el repositorio y seguir los mismos pasos para hacer cambios y subirlos a GitHub.

---

## 📜 Licencia
Este proyecto se encuentra bajo la licencia **MIT**, lo que significa que puedes modificarlo y distribuirlo libremente siempre que menciones la fuente original.

¡Disfruta el desarrollo de 711 d.C.! 🚀

