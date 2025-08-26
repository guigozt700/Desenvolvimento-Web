const express = require('express') //Sefvidor web, com protocolos http (get, set, pull, delete)
const path = require('path')
const app = express()
const porta = 3000

//Rotas
//Direciona pra a pagina index.html
app.get('/', (req, res) => {
    //Req = requisição | Res = resposta
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

//Direciona para pagina sobre
app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'sobre.html'))
})

app.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cadastro.html'))
})

//Verifica a conexão com a porta
app.listen(porta, () => {
    console.log(`http://localhost:${porta}`)
})
