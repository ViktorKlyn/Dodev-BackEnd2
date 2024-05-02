const express = require('express')
const app = express()

// Middleware de logging
app.use((req, res, next) => {
    console.log('Requisição recebida!')
    next()
})

// Rota de exemplo
app.get('/', (req,res) => {
    res.send('Olá, mundo!')
})

// Iniciar com o servidor
const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
