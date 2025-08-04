//Dicionario de dados
function dados()
{
    const dicionarioDados = 
    [
        {id: 1,login: "John",senha: "1234",nome: "John",email: "john@gmail.com"},
        {id: 2,login: "Dante",senha: "4321",nome: "Dante",email: "dante@gmail.com"}
    ]

    let json = JSON.stringify(dicionarioDados)
    //return dicionarioDados
    localStorage.setItem("banco", json)
}

function logar()
{
    const ds = JSON.parse(localStorage.getItem("banco"))

    let lg = document.querySelector("#idInputLogin").value
    let sn = document.querySelector("#idInputSenha").value

    for(let cont = 0; cont<ds.length; cont++)
    {
        if(lg == ds[cont].login && sn == ds[cont].senha)
        {
            alert("Logou")

            sessionStorage.setItem(`usuario ${ds[cont].nome}`)
            sessionStorage.setItem("email", ds[cont].email)

            alert(ds)

            window.location.href = "sobreAula28.04.html"

            break
        }
    }
}

function logado()
{
    let usuario = sessionStorage.getItem("idUsuario")

    document.querySelector("#usuario").value = usuario
}