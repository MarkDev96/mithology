const btnSalvar = document.querySelector("form");
btnSalvar.addEventListener('submit', function (e) {
    e.preventDefault();
    if (id.value == "") {
        let resquest = fetch(urlOne, {
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
                alert("Criatura inserida com sucesso")
                getCreatures()
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
                getCreatures();

            }
        })


    }
    document.getElementById('myModal').style.display='none';


})