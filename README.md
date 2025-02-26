# API Personas - Node.js + Express + MongoDB

## Descripción

API con un CRUD básico para gestionar una colección de personas, desarrollada con **Node.js**, **Express** y **MongoDB**. Se utiliza **Zod** para validar los datos de entrada y **dotenv** para manejar las variables de entorno.

## Tecnologías Utilizadas

- **[Node.js](https://nodejs.org/)**
- **[Express](https://expressjs.com/)**
- **[MongoDB](https://www.mongodb.com/)**

---

## Características

- CRUD de personas (Crear, Leer, Actualizar y Eliminar)
- Validación de datos con **Zod**
- Conexión a **MongoDB** usando **Mongoose**

---

## Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/daugusuman/API-Personas.git
   cd API-Personas
   ```

2. Instalar las dependencias:

   ```bash
   npm install
   ```

3. Crear un archivo **.env** en la raíz del proyecto con el siguiente contenido:

   ```env
   PORT = 9999
   MONGO_URI = mongodb://localhost:27017/personas
   ```

4. Iniciar el servidor:
   ```bash
   npm start
   ```

---

## Endpoints

### **Personas**

| Método     | Ruta                   | Descripción                  |
| ---------- | ---------------------- | ---------------------------- |
| **POST**   | `/api/personas`        | Crea una nueva persona       |
| **GET**    | `/api/personas/:id`    | Obtiene una persona por ID   |
| **PUT**    | `/api/personas/:id`    | Actualiza una persona por ID |
| **DELETE** | `/api/personas/:id`    | Elimina una persona por ID   |
| **GET**    | `/api/personas/listar` | Obtiene todas las personas   |

Ejemplo de solicitud para crear una persona:

```json
{
  "nombre": "Daury",
  "apellido": "Guzman",
  "genero": "Masculino",
  "telefono": "5550001111",
  "edad": 24,
  "region": "Latinoamerica"
}
```

---
