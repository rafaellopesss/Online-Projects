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
    let pontorobo = document.getElementById('maquina')
    let seuspontos = document.getElementById('voce')
    let jogadaComputador = jogada_computador()

    
    if (jogadorJogada.value != undefined){
        if (jogadorpontos == 5 || robopontos == 5){
            jogadorpontos = 0
            robopontos = 0
            pontorobo.innerText = robopontos
            seuspontos.innerText = jogadorpontos

            
        }else {
            changeimage(jogadaComputador, jogadorJogada.value)

            if (jogadorJogada.value == jogadaComputador) {
                console.log('empate') //3 possibilidades
                
            }else if (jogadorJogada.value == 'pedra' && jogadaComputador == 'tesoura' || jogadorJogada.value == 'papel' && jogadaComputador == 'pedra' || jogadorJogada.value == 'tesoura' && jogadaComputador == 'papel'){ // 

                
                jogadorpontos ++
            
                seuspontos.innerText = jogadorpontos
                


            }else {
                robopontos ++
                
                pontorobo.innerText = robopontos
                

            }
        }    
        

            


    }else {
        alert('vazio')
    }
    
}

let changeimage = (imagemcomputador, imagemyou) => { // Altera a imagem
    let jogador_image = document.getElementById('jogadorimagem')
    let computador_image = document.getElementById('computadorimagem')
    
    jogador_image.src = `imagens/${imagemyou}.png`
    computador_image.src = `imagens/${imagemcomputador}.png` 
       
    
}


let jogar = () => {
    jogada_do_jogador()
    
}