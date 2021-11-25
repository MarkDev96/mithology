const url = " https://recuperacao-ppw2.herokuapp.com/api/mythology/nordica";

let gods =[

]
getGods();
function getGods(){
    let request = fetch(url);
    request.then(function(response){
        response.json().then(function(vetorGods){
            console.log(vetorGods[0].deuses);
            gods=vetorGods[0].deuses;
           
            
            
        })
        
    })
    
}
function criaGods(gods){
    let li = document.createElement("li");
    let divId = document.createElement("div");
    let img = document.createElement("img");
    let title = document.createElement("h2");
    let divDesc = document.createElement("div");
    let subtitle = document.createElement("h3");
    let description = document.createElement("p");
    let history = document.createElement("p");
    let divBtn = document.createElement("div");
    let btnEdit = document.createElement("button");
    let btnRemover = document.createElement("button");

    divId.className="identifier"
    img.src=gods.imagem;
    console.log(gods.imagem);
    title.textContent=gods.nome;
    divDesc.id="description";
    subtitle.textContent="Descrição"
    description=gods.descricao;
    history.textContent=gods.historia;
    divBtn.className="btns";
    btnEdit.textContent="Editar";
    btnRemover.textContent="Remover";

    const listGodsHTML = document.querySelector("ul");
    listGodsHTML.appendChild(li);
    li.appendChild(divId);
    li.appendChild(divDesc);
    li.appendChild(divBtn);
    divId.appendChild(img);
    divId.appendChild(title);
    divDesc.appendChild(subTitle);
    divDesc.appendChild(description);
    divDesc.appendChild(history);

}

console.log(gods[0]);