
function imprimir(){
    console.log("Olá JS")    
}

function logar(){

    let lg = document.querySelector("#login").value 
    let sn = parseInt(document.querySelector("#pass").value) 


    //console.log("Seu login é: " + lg + "\n Sua senha é: " + sn) //concatenização 

    //alert("Seu login é: " + lg + "\n Sua senha é: " + sn) //esse abre uma tela

   // let vetor = ["Abacaxi", "banana", "Carambola"]

   let login = ["Ana","Bruno","Carlos"]
   let pass = [1234,1111,2222]

   //JSON - JavaScript Object Notation

   let dados = [
                 {id:1, nome:"Paul", login:"paul", senha:"1234", email:"paul@gmail.com"}, //0
                 {id:2, nome:"Ringo", login:"ringo", senha:"1212", email:"ringo@gmail.com"}, //1
                 {id:3, nome:"John", login:"john", senha:"12345", email:"john@gmail.com"} //2
               ]


    //&& - condição 'e' 
    // || - condição 'ou'
    // == - condião de comparação

    for(let i=0;i<dados.length; i++){    

         if(lg == dados[i].login && sn == dados[i].senha){
             alert("Logou!" + dados.length)
              //console.log(vetor[2])

              alert("Seu nome é: " + dados[i].nome + "\n E-mail: " + dados[i].email)

              console.log("Seu nome é: " + dados[i].nome + "\n E-mail: " + dados[i].email)

             window.location.href = "sobre.html"
          } 
    }



}

/*
var - global -- deve evitar seu uso
let - local e pode mudar o estado de seu valor
const - o valor não pode ser mudado

JavaScript ela é dinâmica - variáveis recebem o tipo automaticamente 

*/