const root = ReactDOM.createRoot(document.getElementById("root"))

function App() {
    const [data, setData] = React.useState({})
    const [postalcode, setPostalCode] = React.useState("")
    //[address_name, state, city]
    React.useEffect(() => {
        if (postalcode.length == 8) {
            fetch(`https://cep.awesomeapi.com.br/json/${postalcode}`)
            .then(response => response.json())
            .then(output => setData(output))     
        }
    }, [postalcode]) 
    return (
        <section id="content">
            <h1>Localizador de CEP</h1>
            <label htmlFor="inputcep">CEP</label>
            <input 
                type="text" 
                id="inputcep" 
                onChange={e => setPostalCode(e.target.value)}></input>
            <div>
                <p><span>Endereço</span>: {data.address_name}</p>
                <p><span>Cidade</span>: {data.state}</p>
                <p><span>Bairro/distrito</span>: {data.district}</p>
            </div>
        </section>
    )
}


root.render(<App/>)