import { model, Schema } from '../configurations/database.js';

const personaSchema = new Schema({
    nombre: { type: String, require: true },
    apellido: { type: String, require: true },
    genero: { type: String, require: false },
    telefono: { type: String, require: false },
    edad: { type: Number, require: true },
    region: { type: String, require: true },
})

export default model('Persona', personaSchema)