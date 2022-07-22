import express from 'express'

import rotas from './controllers/rotasController.js'

const app = express()
const port = 3030

app.use(express.json())

rotas(app)

app.listen(port, () => {
console.log(`http://localhost:${port}/`)
})