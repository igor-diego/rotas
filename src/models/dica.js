import bd from "../database/bd.js"

let id = 0

class Dicas {
    constructor(dica) {
        this.id = id++
        this.dica = dica
    }


    // metodo para insercao do usuario no banco de dados
    insere = (msg) => {
        console.log(msg);
        bd.msg.push(msg)
        console.log(msg);
    }


    // metodo para pegar todos usuarios do banco de dados
    mostra = () => {
        return bd.msg
    }
}

export default Dicas