const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`)
    .then( resposta => {
        return resposta.json()
    })
    // A Fetch API já faz um GET e devolve uma promisse por padrão.
}

export const clienteService = {
    listaClientes
}

