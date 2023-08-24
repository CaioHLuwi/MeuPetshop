const criaNovaLinha = (nome, email) => {
    const linhaNovoCliente = document.createElement('tr')
    const conteudo =  `
        <td class="td" data-td>${nome}</td>
                <td>${email}</td>
                <td>
                    <ul class="tabela__botoes-controle">
                        <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                        <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                    </ul>
                </td>
                `
    linhaNovoCliente.innerHTML = conteudo
    return linhaNovoCliente
} // Elemento filho

const tabela = document.querySelector('[data-tabela]') // Elemento pai

const http = new XMLHttpRequest()

http.open('GET', 'http://localhost:3000/profile')
// 'O que eu quero falar com o servidor', 'endereço para onde vou enviar a requisição' 

http.send()

http.onload = () => {
    const data = JSON.parse(http.response) // http.response Devolve texto (Hyper Text Transfer Protocol)
    // Para quebrar isso usamos o JSON.parse e transformar em objeto JS
    data.forEach(elemento => {
        tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email))
    })
}
// Ao carregar vai imprimir o que o servidor respondeu