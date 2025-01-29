//Capturar a jogada do jogador
//Criar uma lista com as possbilidades do computador
// Comparar os dois itens acima
let jogadascomputador = ['pedra', 'papel', 'tesoura']

let jogada_computador =  () => {
    
    let random = Math.floor(Math.random() * jogadascomputador.length)
    console.log(jogadascomputador[random])
}


let jogada_do_jogador = () => {
    let input_check = document.querySelector('input[name="jogada"]:checked')

    if (input_check != undefined){
        alert(jogada_computador())
        

    }else {
        alert('vazio')
    }
    
}


let jogar = () => {
    //jogada_do_jogador()
    jogada_computador()
}