// Importar biblioteca -> modo antigo
const mysql = require('mysql')
const path = require('path')
const fs = require('fs')

//Formas de instalar os modulos(bibliotecas)
//npm install mysql --save
//npm i path --save

let pastas = ['pasta1', 'pasta02', 'pasta03']

for (let i = 0; i < pastas.length; i++){
    fs.mkdir(pastas[i], {recursive: true}, (err) =>{
        if (err) throw err 
    })
}

//Dicionario de dados
const dados = [
    {id: 1, nome: "Guilherme", email: "guigo@teste.com"},
    {id: 2, nome: "Cristiano", email: "cristiano@teste.com"}
]

dados[0].id