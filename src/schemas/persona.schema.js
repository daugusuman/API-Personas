import { z } from 'zod';

const personaSchema = z.object({
    nombre: z.string({ required_error: 'El nombre es requerido' }).min(3, 'El nombre debe tener al menos 3 caracteres'),
    apellido: z.string({ required_error: 'El apellido es requerido' }).min(3, 'El apellido debe tener al menos 3 caracteres'),
    genero: z.string({ required_error: 'El genero es requerido' }).optional(),
    telefono: z.string().min(10, 'El telefono debe tener al menos 10 caracteres').optional(),
    edad: z.number({ required_error: 'La edad es requerida' }).int().min(0, 'La edad debe ser un número positivo'),
    region: z.string({ required_error: 'la región es requerida' }).min(3, 'La region debe tener al menos 3 caracteres'),
});

export default personaSchema;