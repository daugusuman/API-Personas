import app from "./app.js"
import { PORT } from "./configurations/config.js"
import database from "./configurations/database.js"

async function main() {
    try {
        await database.Connect()
        const server = app.listen(PORT, () => {
            console.log(`[INFO] Servidor iniciado en http://localhost:${PORT}`)
        })
    } catch (err) {
        console.error('[ERROR] Ha ocurrido un error al iniciar...', err)
    }
}

main()