import app from "./app.js"

async function main() {
    try {
        const server = app.listen(3000, () => {
            console.log('[INFO] Servidor iniciado en http://localhost:3000')
        })
    } catch (err) {
        console.error('[ERROR] Ha ocurrido un error al iniciar...', err)
    }
}

main()