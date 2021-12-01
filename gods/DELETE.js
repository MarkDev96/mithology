const btnDelete = document.querySelector("form");
btnDelete.addEventListener('submit', function (e) {
    e.preventDefault();
    let url = urlOne + '/' + id.value;
    resquest = fetch(url, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    })
    clear();
    resquest.then(function (response) {
        if (response.status == 200) {
            alert("Deus deletado com sucesso");
            getGods()

        }
    })

