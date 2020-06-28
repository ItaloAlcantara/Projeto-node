class Tabelas{
    init(conexao) {
        this.conexao = conexao
        this.criarTbVeiculo()
    }

    criarTbVeiculo(){
        const sql = 'CREATE TABLE IF NOT EXISTS Veiculos (ID BIGINT NOT NULL AUTO_INCREMENT,PLACA VARCHAR(15) NOT NULL,RENAVAM VARCHAR(60) NOT NULL, PRIMARY KEY(ID))'
        
        this.conexao.query(sql, (erro) =>{
            if(erro){
                console.log(erro)
            }
            else{
                console.log('Tabela criada.')
            }
        })
    }
}

module.exports = new Tabelas