const conexao = require('../config/connect')

class Veiculo{
    adiciona(veiculo){
        const sql = 'INSERT INTO Veiculos SET ?'

        conexao.query(sql, veiculo, (erro,result) => {
            if(erro){
                return console.log(erro)
            }else{
                return console.log(result)
            }    
        })
    }
}

module.exports = new Veiculo