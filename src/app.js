import express from "express"
import cors from "cors"
import rutasPersonas from "./routes/persona.routes.js"

const app = express()

app.use(cors())
app.use(express.json())

// Rutas
app.use("/api/personas", rutasPersonas)

export default app