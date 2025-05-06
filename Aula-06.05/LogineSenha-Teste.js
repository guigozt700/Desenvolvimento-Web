const usuarios = [
    {nome: "Cristiano Ronaldo", senha: 7777},
    {nome: "Lionel Messi", senha: 1010}
]

function verificarLogin(login, senha)
{
    for(let i=0; i<usuarios.length; i++)
    {
        if(usuarios[i].nome === login && usuarios[i].senha === senha)
        {
            console.log("Login bem sucedido!")
            return;
        }
    }
}

verificarLogin("Cristiano Ronaldo", 7777)