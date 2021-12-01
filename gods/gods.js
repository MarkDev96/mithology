const urlAll = "https://recuperacao-ppw2.herokuapp.com/api/mythology/0";
const urlOne = "https://recuperacao-ppw2.herokuapp.com/api/mythology/gods/0";
const urlpost = "https://recuperacao-ppw2.herokuapp.com/api/mythology/gods/0";
let name = document.querySelector("#nome");
let image = document.querySelector("#imagem");
let description = document.querySelector("#descricao");
let history = document.querySelector("#historia");

let gods = []

const listGodsHTML = document.querySelector("ul");
getGods();
function getGods() {
  let request = fetch(urlAll);
  request.then(function (response) {
    response.json().then(function (vetorGods) {
      gods = vetorGods.deuses;
      atualizarLista();
    })
  })
}
function criaGods(gods) {
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

  divId.className = "identifier"
  img.src = gods.imagem;

  nome.textContent = gods.nome;
  divDesc.className = "description";
  title1.textContent = "Descrição";
  description.textContent = gods.descricao;
  title2.textContent = "História";
  history.textContent = gods.historia;
  divBtn.className = "btns";
  btnEdit.textContent = "Editar";
  btnEdit.className = "editar"
  btnRemover.textContent = "Remover";
  btnRemover.className = "remover"

  btnEdit.onclick = function () {
    modal.style.display = "block";
    editar(gods);
  }

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

function atualizarLista() {
  // deletar todos os elementos
  listGodsHTML.innerHTML = ""

  // imprimir lista
  for (let god of gods) {
    criaGods(god)
  }
}
function editar(god) {
  id.value = god.id
  name.value = god.nome
  image.value = god.imagem
  description.value = god.descricao
  history.value = god.historia
}
function clear() {
  id.value = ""
  name.value = ""
  image.value = ""
  description.value = ""
  history.value = ""

}
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
  clear();
}

span.onclick = function () {
  modal.style.display = "none";

}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
