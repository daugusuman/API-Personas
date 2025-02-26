import { Router } from "express";
import { actualizarPersona, buscarPersonaPorId, crearPersona, eliminarPersona, listarPersonas } from "../controllers/persona.controller.js";
import { validateSchema } from "../middlewares/schemas.middleware.js";
import personaSchema from "../schemas/persona.schema.js";

const rutasPersonas = Router();

// Create
rutasPersonas.post("/", validateSchema(personaSchema), crearPersona)
// Read
rutasPersonas.get("/:id", buscarPersonaPorId)
// Update
rutasPersonas.put("/:id", validateSchema(personaSchema), actualizarPersona)
// Delete
rutasPersonas.delete("/:id", eliminarPersona)
// List
rutasPersonas.get("/listar", listarPersonas)

export default rutasPersonas;