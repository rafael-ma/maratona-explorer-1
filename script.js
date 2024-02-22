const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",   
]
const inputPergunta  =document.querySelector('#inputPergunta')
const elementResposta = document.querySelector('#resposta')
const buttonPerguntar = document.querySelector('#buttonPerguntar')

// console.log(Math.random) /* Gera um número aleatório entre 0 e 1 */
// console.log(Math.random * totalRespostas) /* Multiplica pelo total de respostas */
// console.log(Math.floor(Math.random * totalRespostas)) /* Arredonda para um número inteiro */


function fazerPergunta() {
    if (inputPergunta.value == '') {
        alert('Por favor digite uma pergunta')
        return
    }

    buttonPerguntar.setAttribute('disabled', true)

    const pergunta = `<p>${inputPergunta.value}</p>`
    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
    elementResposta.innerHTML = pergunta + respostas[numeroAleatorio]

    elementResposta.style.opacity = 1
    // sumir a resposta depois de 3 segundos
    setTimeout(function() {
        elementResposta.style.opacity = 0
        buttonPerguntar.removeAttribute('disabled')
    }, 3000)
}