let imagensBarbearia = document.getElementsByClassName('imagensbarbearia')
let buttonBefore = document.getElementById('before')
let buttonNext = document.getElementById('next')

let beforetrabalho = document.getElementById('beforetrabalho')
let nexttrabalho = document.getElementById('nexttrabalho')
let imagensCortes = document.getElementsByClassName('imagenscortes')
let showitens = document.getElementById('showitens')
let changemenuicon = document.getElementById('menuimage')

let listamenu = document.getElementsByClassName('listamenu')
 
let contadorimagens = 0

buttonBefore.addEventListener('click', () => { // Botão que volta a imagem
    imagensBarbearia[contadorimagens].style.display = 'none' //Ele pega a imagem que está sendo mostrada e faz ela sumir
    if (contadorimagens == 0){ // Se o contador for o primeiro item ele vai para o item 2 (que é o último) e permite fazer um loop infinito
        contadorimagens = 2
        imagensBarbearia[contadorimagens].style.display = 'block'
        
    }else { // Aí aqui ele diminui para que possa voltar a imagem anterior
        contadorimagens --
        imagensBarbearia[contadorimagens].style.display = 'block'
    }
    
})

buttonNext.addEventListener('click', () => { // Botão que passa a imagem
    imagensBarbearia[contadorimagens].style.display = 'none' // Pega a imagem que está sendo mostrada e desaparece com ela
    contadorimagens += 1 // Pego a próxima imagem do vetor
    if (contadorimagens == imagensBarbearia.length) { // Se for maior que 2, significa que já atingiu o limite do array e precisa voltar para a primeira
        contadorimagens = 0
        imagensBarbearia[contadorimagens].style.display = 'block'
    }else {
        console.log(imagensBarbearia.length)
        console.log(contadorimagens)

        imagensBarbearia[contadorimagens].style.display = 'block'
    }
    
    
})

let contadorCortes = 0

beforetrabalho.addEventListener('click', () => {
    imagensCortes[contadorCortes].style.display = 'none'
    if (contadorCortes != 0){
        contadorCortes --
        imagensCortes[contadorCortes].style.display = 'block'
    }else {
        contadorCortes = imagensCortes.length - 1
        imagensCortes[contadorCortes].style.display = 'block'
    }
})

nexttrabalho.addEventListener('click', () => {
    imagensCortes[contadorCortes].style.display = 'none'
    
    if (contadorCortes == imagensCortes.length - 1){
        contadorCortes = 0
        imagensCortes[contadorCortes].style.display = 'block'
    }else {
        contadorCortes ++
        imagensCortes[contadorCortes].style.display = 'block'
    }
})



function menuHamburguer(){
   
    if (showitens.style.display == 'none'){
        changemenuicon.src = 'images/pages/index/close.svg'
        showitens.style.display = 'block'
        
    }else {
        changemenuicon.src = 'images/pages/index/menu.webp'
        showitens.style.display = 'none'
    }
  
}