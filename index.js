const customExpress = require('./config/customExpress')
const conexao = require('./config/connect')
const Tabelas = require('./config/scriptTable')

conexao.connect( erro => {
    if(erro) {
        console.log(erro)
    }
    else{
        console.log('conectado com sucesso')

        Tabelas.init(conexao)
        
        const app = customExpress()

        app.listen(8080, () => console.log('servidor rodando'))
    } 
    
})


