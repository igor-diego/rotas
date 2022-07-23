import bd from "../database/bd.js"

let id = 0

class Dicas {
    constructor(dica) {
        this.id = id++
        this.dica = dica
    }

    insere = (msg) => {

        bd.msg.push(msg)
        
    }

    mostra = () => {
        return bd.msg
    }
}

export default Dicas