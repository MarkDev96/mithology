const url = "https://recuperacao-ppw2.herokuapp.com/api/mythology/0";

let gods =[

]
const listGodsHTML = document.querySelector("ul");
getGods();
function getGods(){
    let request = fetch(url);
    request.then(function(response){
        response.json().then(function(vetorGods){
            console.log(vetorGods.deuses);
            gods=vetorGods.deuses;
           
            atualizarLista();
            
        })
        
    })
    
}
function criaGods(gods){
    let li = document.createElement("li");
    let divId = document.createElement("div");
    let img = document.createElement("img");
    let nome = document.createElement("h2");
    let divDesc = document.createElement("div");
    let title1 = document.createElement("h3");
    let description = document.createElement("p");
    let title2 = document.createElement("h3");
    let history = document.createElement("p");
    let divBtn = document.createElement("div");
    let btnEdit = document.createElement("button");
    let btnRemover = document.createElement("button");

    divId.className="identifier"
    img.src=gods.imagem;

    nome.textContent=gods.nome;
    divDesc.className="description";
    title1.textContent="Descrição";
    description.textContent=gods.descricao;
    title2.textContent="História";
    history.textContent=gods.historia;
    divBtn.className="btns";
    btnEdit.textContent="Editar";
    btnRemover.textContent="Remover";

    
    listGodsHTML.appendChild(li);
    li.appendChild(divId);
    li.appendChild(divDesc);
    li.appendChild(divBtn);
    divId.appendChild(img);
    divId.appendChild(nome);
    divDesc.appendChild(title1);
    divDesc.appendChild(description);
    divDesc.appendChild(title2);
    divDesc.appendChild(history);
    divBtn.appendChild(btnEdit);
    divBtn.appendChild(btnRemover);

}

function atualizarLista(){
    // deletar todos os elementos
    listGodsHTML.innerHTML = ""

    // imprimir lista
    for(let god of gods){
        criaGods(god)
    }
}
