const http = new XMLHttpRequest()

http.open('GET', 'http://localhost:3000/profile')
// 'O que eu quero falar com o servidor', 'endereço para onde vou enviar a requisição' 

http.send()

http.onload = () => {
    const data = http.response
    console.log(data)
}
// Ao carregar vai imprimir o que o servidor respondeu