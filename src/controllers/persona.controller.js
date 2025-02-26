import personaService from "../services/persona.service.js"

export async function crearPersona(req, res) {
    try {
        const persona = await personaService.agregar(req.body)
        return res.status(200).json({ persona })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export async function buscarPersonaPorId(req, res) {
    try {
        const { id } = req.params
        const persona = await personaService.buscarId(id)
        return res.status(200).json({ message: persona })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export async function actualizarPersona(req, res) {
    try {
        const { id } = req.params
        const persona = await personaService.actualizar(id, req.body)
        return res.status(200).json({ message: persona })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export async function eliminarPersona(req, res) {
    try {
        const { id } = req.params
        const persona = await personaService.eliminar(id)
        return res.status(200).json({ message: 'Persona eliminada...' })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export async function listarPersonas(req, res) {
    try {
        const personas = await personaService.listar()
        return res.status(200).json({ personas })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}