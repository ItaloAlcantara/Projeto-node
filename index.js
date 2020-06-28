const express = require('express')

const app = express()

app.listen(8080, () => console.log('servidor rodando'))

app.get('/atendimento',(req,res) => res.send('servidor rodando tuddo ok,aiai'))