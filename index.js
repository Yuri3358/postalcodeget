function Search(url) {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", url, false)
    xhr.send()
    let output = JSON.parse(xhr.responseText)
    return output
}

function Show() {
    let cep = document.getElementById('cep').value
    let cep_input = document.querySelector('input#cep')
    let output = document.querySelector("div#output")
    let request = Search(`https://cep.awesomeapi.com.br/json/${cep}`)
    let address = request['address']
    let state = request['state']
    let city = request['city']
    let district = request['district']

    
    if (request['status'] == 404 || request['status'] == 400) {
        output.style.color = `#f50505`
        output.innerHTML = '<p>CEP não encontrado ou inválido, digite novamente</p>'
    } else {
        output.style.color = `black`
        output.innerHTML = `<p>CEP: ${cep}</p> <p>Endereço: ${address}</p> <p>Cidade: ${city}</p> <p>Estado: ${state}</p> <p>Distrito/Bairro: ${district}</p>`
    }

    cep_input.focus()
    
}