const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`)
    .then( resposta => {
        return resposta.json()
    })
    // A Fetch API já faz um GET e devolve uma promisse por padrão.
}

const criaCliente = (nome, email) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({ // Retorna como texto
            nome: nome, // Parametro da função nome
            email: email // Parametro da função nome
        })
    })
    .then( resposta => {
        return resposta.body
    })
}

export const clienteService = {
    listaClientes,
    criaCliente
}

