import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

async function Connect() {
    try {
        await mongoose.connect(MONGODB_URI)
        console.log('[INFO] Conexión a la base de datos exitosa...')
    } catch (err) {
        console.error('[ERROR] Ha ocurrido un errir al conectar a la base de datos...', err)
        process.exit(1)
    }
}

export const { Schema, model, Types, isValidObjectId } = mongoose

export default { Connect }