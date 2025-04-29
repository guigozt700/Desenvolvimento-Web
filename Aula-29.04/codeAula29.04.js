function dados()
{
    const dados = 
    [
        {id: 1, nome: "User1", login: "User1", email: "user1@teste", senha: "1234"},
        {id: 2, nome: "User2", login: "User2", email: "user2@teste", senha: "4321"}
    ]

    let formatoJson = JSON.stringify(dados)
    localStorage.setItem("banco", formatoJson)
}

function cadastrar()
{
    const banco = JSON.parse(localStorage.getItem("banco"))

    let nome = document.querySelector("#idNome").value
    let login = document.querySelector("#idLogin").value
    let email = document.querySelector("#idEmail").value
    let senha = document.querySelector("#idSenha").value

    let usuario = {id: Date.now(), nome: nome, login: login,email: email, senha: senha}

    banco.push(usuario)

    let formatoJson = JSON.stringify(banco)

    localStorage.setItem("banco", formatoJson)

    console.log(formatoJson)

}