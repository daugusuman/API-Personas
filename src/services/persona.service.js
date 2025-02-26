import Persona from '../models/persona.js';

const personaService = {
    agregar: async (persona) => {
        const nuevaPersona = new Persona(persona)
        return await nuevaPersona.save()
    },
    buscarId: async (id) => {
        return await Persona.findById(id)
    },
    actualizar: async (id, persona) => {
        return await Persona.findByIdAndUpdate(id, persona, { new: true })
    },
    eliminar: async (id) => {
        return await Persona.findByIdAndDelete(id)
    },
    listar: async () => {
        return await Persona.find()
    }
}

export default personaService;