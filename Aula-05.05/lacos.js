function mostrar()
{
    let nome = document.querySelector("#nome").value

    console.log(`Bem vindo ${nome}!`)
}

function lacoFor()
{
    let numero = document.querySelector("#numero").value

    for(let cont = 0; cont <= 10; cont++)
    {
        if(cont == numero)
        {
            console.log("Número encontrado: " + numero)
            break
        }
        else
        {
            console.log("Não encontrou!")
        }
    }
}

lacoWhile()
{
    let numero = document.querySelector("#numero").value
    let cont = 0

    while(cont <= 10)
    {
        if(cont == numero)
        {
            console.log("Número encontrado: " + cont)
            break
        }
        else
        {
            console.log("Não encontrou!")
        }
    }
}

lacoDoWhile()
{
    let numero = document.querySelector("#numero").value
    let cont = 0

    do
    {
        if(cont == numero)
        {
            console.log("Achou o numero: " + cont)
        }
        else
        {
            console.log("Não encontrou!")
        }
    }while(cont <= 10)
}

function lacoSwitch()
{
    let numero = parseInt(document.querySelector("#numero").value)
    
    switch(numero)
    {
        case 1:
            console.log("Você escolheu: " + numero)
            break
        case 2:
            console.log("Você escolheu: " + numero)
            break
        case 3:
            console.log("Você escolheu: " + numero)
            break
        case 4:
            console.log("Você escolheu: " + numero)
            break
        case 5:
            console.log("Você escolheu: " + numero)
            break
        default:
            console.log("Numero inválido!")
    }
}