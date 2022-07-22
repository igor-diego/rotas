import Dicas from "../models/dica.js"

const rotas = (app) => {

    app.get('/tips', (req, res) => {

        res.json({"dicas": msg.dica[Math.floor(Math.random() * msg.dica.lenght)]})
    })

    app.post('/create', (req, res) => {
        const body = req.body
        const pegaUsuario = new Dicas(body.dica)
        pegaUsuario.insere(pegaUsuario)
        res.json(pegaUsuario)
    })
}

export default rotas