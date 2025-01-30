//Capturar a jogada do jogador
//Criar uma lista com as possbilidades do computador
// Comparar os dois itens acima

let jogada_computador =  () => {
    let jogadascomputador = ['pedra', 'papel', 'tesoura']
    let random = Math.floor(Math.random() * jogadascomputador.length)
    return (jogadascomputador[random]) // Eu escolho uma jogada aleatória da lusta
}

let jogadorpontos = 0 
let robopontos = 0

let jogada_do_jogador = () => {

    let jogadorJogada= document.querySelector('input[name="jogada"]:checked')
    let jogadaComputador = jogada_computador()


    if (jogadorJogada.value != undefined){
        if (jogadorJogada.value == jogadaComputador) {
            alert('Empate') //3 possibilidades
            
        }else if (jogadorJogada.value == 'pedra' && jogadaComputador == 'tesoura' || jogadorJogada.value == 'papel' && jogadaComputador == 'pedra' || jogadorJogada.value == 'tesoura' && jogadaComputador == 'papel'){ // 

            alert('Você ganhou!')
            alert(`Você jogou: ${jogadorJogada.value} / Computador Jogou: ${jogadaComputador}`)


        }else {
            alert('VOCÊ PERDEU!')
            alert(`Você jogou: ${jogadorJogada.value} / Computador Jogou: ${jogadaComputador}`)

        }

            


    }else {
        alert('vazio')
    }
    
}


let jogar = () => {
    jogada_do_jogador()
    
}