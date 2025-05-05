function dados()
{
    const dados = [
        {id: 1, nome: "Guigo", login: "Guigo", senha: "1234"},
        {id: 2, nome: "Guga", login: "Guga", senha: "4321"}
        ]

    let json = JSON.stringify(dados)
    localStorage.setItem("banco", json)
}