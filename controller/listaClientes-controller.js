import { clienteService } from "../service/cliente-service.js"

const criaNovaLinha = (nome, email, id) => {
    const linhaNovoCliente = document.createElement('tr')
    const conteudo =  `
        <td class="td" data-td>${nome}</td>
                <td>${email}</td>
                <td>
                    <ul class="tabela__botoes-controle">
                        <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                        <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                    </ul>
                </td>
                ` // Criação de uma query string no href do edita_cliente
    linhaNovoCliente.innerHTML = conteudo
    linhaNovoCliente.dataset.id = id
    return linhaNovoCliente
} // Elemento filho

const tabela = document.querySelector('[data-tabela]') // Elemento pai

tabela.addEventListener('click', async (evento) => {
    let ehBotaoDeletar = evento.target.className == 'botao-simples botao-simples--excluir'
    if(ehBotaoDeletar){
        try {
            const linhaCliente = evento.target.closest('[data-id]') // Encontra o elemento mais próximo ao especificado
            let id = linhaCliente.dataset.id
            await clienteService.removeCliente(id)
            linhaCliente.remove()
        }
        catch(erro){
            console.log(erro)
            window.location.href = '../telas/erro.html'
        }
    }
})

const render = async () => {
    const clienteInService = await clienteService.listaClientes()
    clienteInService.forEach(elemento => {
        tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id))
    })
}
render()

