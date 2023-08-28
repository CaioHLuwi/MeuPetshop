import { clienteService } from "../service/cliente-service.js";

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento) => { 
    evento.preventDefault()
    evento.target.querySelector('[data-nome]').value
    evento.target.querySelector('[data-email]').value

    clienteService.criaCliente(nome, email)
    .then(() => {
        window.location.href = '../telas/cadastro_concluido.html' // Window = Tela inteira, location = Onde estou 
    })
})