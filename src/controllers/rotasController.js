import Dicas from "../models/dica.js"
import bd from "../database/bd.js"

const rotas = (app) => {

    app.get('/tips', (req, res) => {
        const mostraDica = new Dicas
        res.json({"dicas": bd.msg[Math.floor(Math.random() * bd.msg.length)]})
    })

    app.post('/create', (req, res) => {
        const body = req.body
        const insere = new Dicas(body.dica)
        insere.insere(insere)
        res.json(insere)
    })
}

export default rotas