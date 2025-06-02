// Inicia os dados no LocalStorage
function dados()
{
    // Verfifica se existe um item "banco" no localStorage

    if (!localStorage.getItem("banco"))
    {
        const dados = [
            {id: 1, nome: "Usuario1", login: "usuario1", senha: "1234"},
            {id: 2, nome: "Usuario2", login: "usuario2", senha: "4321"},
            {id:3, nome: "Usuario3", login: "usuario3", senha: "1234"}
        ]

        localStorage.setItem("banco",JSON.stringify(dados)) //Armazena como JSON
    }
}

// Retorna o banco de dados em formato JSON para Objeto
function obterBanco()
{
    return JSON.parse(localStorage.getItem("banco")) || []
}

//Salva o banco de dados em formato Objeto para JSON
function salvarBanco()
{
    localStorage.setItem("banco",JSON.stringify(banco))
}

// Gera uma lista (<ul>) com os id
mostrarTabela(dados)
{
    const tabela = document.getElementById("tabela")
    let html = "<ul>"

    dados.forEach(usuario => {
                                html += `<li>ID: ${usuario.id} - Nome: ${usuario.nome} - Login: ${usuario.login} - Senha: ${usuario.senha}`
    });

    html += "</ul>"

    tabela.innerHTML = html
}

// Busca usuários pelo nome digitado
function buscar()
{
    const termo = document.getElementById("pesquisar").value.toLowerCase() //Transforma em minuscula
    const banco = obterBanco()
    // Filtra os nomes
    const resultado = banco.filter(item => 
                                            item.nome.toLowerCase().includes(termo)
    )

    mostrarTabela(resultado)
}

//Cria novos usuários (objetos)
function cadastrar()
{

}

function atualizar()
{

}

function apagar()
{
    
}

