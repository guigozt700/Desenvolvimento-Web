function banco(){
    let dados = [
        {id:1, nome:"Paul", login:"paul", senha:"1234", email:"paul@gmail.com"}, //0
        {id:2, nome:"Ringo", login:"ringo", senha:"1212", email:"ringo@gmail.com"}, //1
        {id:3, nome:"John", login:"john", senha:"12345", email:"john@gmail.com"} //2
      ]

    let json = JSON.stringify(dados)

    localStorage.setItem("banco", json)    
    
}

//função de login
function login(){
    let mybd = JSON.parse(localStorage.getItem("banco"))

    let lg = document.querySelector("#login").value 
    let sn = document.querySelector("#senha").value 

    for(let i=0;i<mybd.length;i++){
        if(lg == mybd[i].login && sn == mybd[i].senha){
            alert("Encontrou!")
        }
    }
}