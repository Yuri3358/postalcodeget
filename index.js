async function Show() {
    let cep = document.getElementById('cep').value
    let cep_input = document.querySelector('input#cep')
    let output = document.querySelector("div#output")
    
    let request = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`)
    let data = await request.json()
    let address = data['address']
    let state = data['state']
    let city = data['city']
    let district = data['district']

    
    if (data['status'] == 404 || data['status'] == 400) {
        output.style.color = `#f50505`
        output.innerHTML = '<p>CEP não encontrado ou inválido, digite novamente</p>'
    } else {
        output.style.color = `black`
        output.innerHTML = `<p>CEP: ${cep}</p> <p>Endereço: ${address}</p> <p>Cidade: ${city}</p> <p>Estado: ${state}</p> <p>Distrito/Bairro: ${district}</p>`
    }
    cep_input.focus()
    
}