const Veiculo = require('../models/veiculos')
const Veiculos = require('../models/veiculos')

module.exports = app =>{
    app.get('/veiculos',(req,res) => res.send('servidor rodando tuddo ok,aiai'))
    
    app.post('/veiculos',(req,res) => {  
        const veiculo = req.body

        Veiculos.adiciona(veiculo)
        res.send('criando veiculo')
    })
}