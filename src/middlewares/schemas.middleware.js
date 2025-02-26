export function validateSchema(schema) {
    return (req, res, next) => {
        try {
            schema.parse(req.body)
            next()
        } catch (err) {
            return res.status(400).json({ error: err.errors.map(e => e.message) })
        }
    }
}