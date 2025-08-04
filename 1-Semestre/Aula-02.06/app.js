// Inicia os dados no LocalStorage
function inicializarDados()
{
    // Verfifica se existe um item "banco" no localStorage

    if (!localStorage.getItem("banco"))
    {
        const dados = [
            {id: 1, nome: "Usuario1", login: "usuario1", senha: "1234"},
            {id: 2, nome: "Usuario2", login: "usuario2", senha: "4321"},
            {id: 3, nome: "Usuario3", login: "usuario3", senha: "1234"}
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
function salvarBanco(banco)
{
    localStorage.setItem("banco",JSON.stringify(banco))
}

// Gera uma lista (<ul>) com os campos
function mostrarTabela(dados)
{
    const tabela = document.getElementById("tabela")

    if(dados.tabela === 0)
    {
        tabela.innerHTML = "<p>Nenhum usuário encontrado.</p>";
        return;
    }

    let html = "<table>";
    html += "<tr><th>ID</th><th>Nome</th><th>Login</th>";

    dados.forEach(d => {
        html += `<tr>
                    <td>${d.id}</td>
                    <td>${d.nome}</td>
                    <td>${d.login}</td>
                </tr>`;
    });

    html += "</table>";

    tabela.innerHTML = html;


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
    const nome = prompt("Nome: ")
    const login = prompt("Login: ")
    const senha = prompt("Senha: ")
    const banco = obterBanco()

    const novoId = banco.length ? banco[banco.length - 1].id + 1 : 1

    const novoUsuario = {
        id: novoId,
        nome: nome,
        login: login,
        senha: senha
    }

    banco.push(novoUsuario)
    salvarBanco(banco)
    alert("Usuário cadastrado com sucesso!")
    mostrarTabela(banco)
}

function atualizar()
{
    const id = parseInt(prompt("ID do usuário para atualizar: "))

    const banco = obterBanco()
    const index = banco.findIndex(u => u.id === id)

    if (index !== -1)
    {
        banco[index].nome = prompt("Novo nome:", banco[index].nome)
        banco[index].login = prompt("Novo login: ", banco[index].login)

        salvarBanco(banco)
        mostrarTabela(banco)
    }
    else
    {
        alert("Usuário não encontrado!")
    }
}

function apagar()
{
    const id = parseInt(prompt("ID do usuário para apagar: "))

    let banco = obterBanco()
    banco = banco.filter(u => u.id !== id)

    salvarBanco(banco)
    mostrarTabela(banco)
}

// Garante que os dados estejam inicializados no localStorage
inicializarDados();

// Exibe todos os usuários na tela ao carregar
mostrarTabela(obterBanco());
