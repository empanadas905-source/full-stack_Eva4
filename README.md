# Proyecto Full-Stack: Sistema de Gestión de Clínica

Este proyecto implementa un sistema de gestión básico para una clínica, permitiendo la administración de pacientes y usuarios a través de una interfaz web.

## 1. Integrantes del Grupo

*   **Carlos Moreno**: Desarrolló la estructura del servidor (`server.js`), la configuración de la base de datos (`config/db.js`), los modelos de datos para usuarios y pacientes (`model/userModel.js`, `model/clinicaModel.js`), y los controladores de autenticación y gestión de pacientes (`controller/authController.js`, `controller/clinicaController.js`). También implementó las rutas API y la lógica de negocio del backend.
*   **Constanza Guajardo**: Desarrolló las vistas del frontend, incluyendo la página de inicio de sesión (`views/login.html`) y el panel de administración (`views/admin.html`). Se encargó de la integración de la interfaz de usuario con las APIs del backend para la visualización y gestión de pacientes.

## 2. Descripción del Proyecto

Este sistema está diseñado para una **Clínica** y se enfoca en el **área de gestión de pacientes**. Resuelve el problema de mantener un registro digitalizado y accesible de la información de los pacientes, permitiendo a los administradores y personal autorizado realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los datos de los pacientes de manera eficiente.

## 3. Requisitos Previos

Para ejecutar este proyecto, es necesario tener instalados los siguientes componentes:

*   **Node.js**: Versión 14 o superior (se recomienda la última versión LTS).
*   **Gestor de Base de Datos MySQL**: Se puede utilizar un servidor MySQL independiente o una solución integrada como **XAMPP** o **Bitnami WAMP** para facilitar la gestión de la base de datos.
*   **npm** (Node Package Manager): Viene incluido con Node.js.

## 4. Instalación Paso a Paso

Siga estos pasos para configurar y ejecutar el proyecto localmente:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/empanadas905-source/full-stack_Eva4.git
    cd full-stack_Eva4
    ```

2.  **Importar la base de datos:**
    *   Asegúrese de tener un servidor MySQL en funcionamiento.
    *   Acceda a su gestor de base de datos (por ejemplo, phpMyAdmin si usa XAMPP, o la línea de comandos de MySQL).
    *   Cree una nueva base de datos llamada `clinica_db`.
    *   Importe el archivo `database.sql` ubicado en la raíz del proyecto a la base de datos `clinica_db`.

3.  **Instalar dependencias de Node.js:**
    ```bash
    npm install
    ```

4.  **Ejecutar el servidor:**
    ```bash
    node server.js
    ```
    El servidor se iniciará en el puerto `3000`. Podrá acceder a la aplicación a través de `http://localhost:3000/login`.

## 5. Configuración de la Base de Datos

La configuración de la conexión a la base de datos se encuentra en el archivo `config/db.js`.

*   **Nombre de la base de datos:** `clinica_db`
*   **Usuario:** `root`
*   **Contraseña:** `''` (vacía)

El archivo SQL para importar la base de datos y sus datos iniciales es `database.sql`, ubicado en la raíz del proyecto.

## 6. Credenciales de Prueba

Se han provisto las siguientes credenciales de prueba para acceder al panel de administración:

| Usuario (username)      | Contraseña (password) |
| :---------------------- | :-------------------- |
| `admin@clinica.com`     | `admin123`            |
| `medico@clinica.com`    | `medico123`           |

## 7. Uso del Sistema

Una vez que el servidor esté en ejecución:

*   **Vista Pública:** El proyecto no tiene una vista pública principal accesible directamente. La aplicación comienza en la página de login.
*   **Acceso al Login:** Abra su navegador y navegue a `http://localhost:3000/login`.
*   **Panel de Administración:** Después de iniciar sesión con las credenciales de prueba, será redirigido al panel de administración (`http://localhost:3000/admin`). Desde aquí, podrá:
    *   Listar todos los pacientes registrados.
    *   Ver los detalles de un paciente específico.
    *   Crear nuevos registros de pacientes.
    *   Actualizar la información de pacientes existentes.
    *   Eliminar registros de pacientes.

## 8. Estructura del Proyecto

La estructura principal de carpetas y archivos del proyecto es la siguiente:

```
full-stack_Eva4/
├── config/                 # Contiene archivos de configuración del proyecto
│   └── db.js               # Configuración de la conexión a la base de datos MySQL
├── controller/             # Lógica de negocio y manejo de solicitudes HTTP
│   ├── authController.js   # Controla la autenticación de usuarios
│   └── clinicaController.js # Controla las operaciones CRUD de pacientes
├── model/                  # Define la lógica de interacción con la base de datos
│   ├── clinicaModel.js     # Modelo para la gestión de pacientes
│   └── userModel.js        # Modelo para la gestión de usuarios
├── public/                 # Archivos estáticos (no utilizados directamente en este proyecto, pero buena práctica)
│   └── index.html          # (Archivo de ejemplo, no usado por server.js)
├── views/                  # Archivos HTML de las interfaces de usuario
│   ├── admin.html          # Panel de administración para gestionar pacientes
│   └── login.html          # Página de inicio de sesión
├── database.sql            # Script SQL para la creación de la base de datos y tablas
├── package.json            # Metadatos del proyecto y lista de dependencias de Node.js
├── server.js               # Punto de entrada del servidor Express, define rutas y levanta la aplicación
└── README.md               # Este archivo
```
