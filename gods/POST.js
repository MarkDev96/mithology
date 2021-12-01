
const btnSalvar = document.querySelector("form");
btnSalvar.addEventListener('submit', function (e) {
    e.preventDefault();
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
    clear();

    resquest.then(function(response){
        console.log(response);
        if(response.status==200){
            alert("Deus inserido com sucesso");
            getGods();

        }
    })

    
})
