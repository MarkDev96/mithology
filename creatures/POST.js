const urlpost = "https://recuperacao-ppw2.herokuapp.com/api/mythology/creatures/0"
const btnSalvar = document.querySelector("form");
btnSalvar.addEventListener('submit', function (e) {
    e.preventDefault();
    let name = document.querySelector("#nome");
    let image = document.querySelector("#imagem");
    let description = document.querySelector("#descricao");
    let history = document.querySelector("#historia");
    console.log(name.value,image.value, description.value, history.value);
    let resquest = fetch(urlpost,{
        method: 'POST',
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify({
            nome: name.value,
            imagem: image.value,
            descricao: description.value,
            historia: history.value
        })
    })
    name.value="";
    image.value="";
    description.value="";
    history.value=""
    resquest.then(function(response){
        console.log(response);
        if(response.status==200){
            alert("Criatura inserida com sucesso");
            getGods();
        }
    })

    
})