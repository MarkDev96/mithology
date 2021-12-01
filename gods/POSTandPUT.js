const btnSalvar = document.querySelector("form");
btnSalvar.addEventListener('submit', function (e) {
    e.preventDefault();
    if (id.value == "") {
        resquest = fetch(urlOne, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                nome: name.value,
                imagem: image.value,
                descricao: description.value,
                historia: history.value
            })
        })
        clear();
        resquest.then(function (response) {
            if (response.status == 200) {
                alert("Deus inserido com sucesso");
                getGods();

            }
        })

    } else {
        let urlPut = urlOne + '/' + id.value;
        resquest = fetch(urlPut, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                nome: name.value,
                imagem: image.value,
                descricao: description.value,
                historia: history.value
            })
        })
        clear();
        resquest.then(function (response) {
            if (response.status == 200) {
                alert("Registro editado com sucesso");
                getGods();

            }
        })


    }
    document.getElementById('myModal').style.display='none';


})
