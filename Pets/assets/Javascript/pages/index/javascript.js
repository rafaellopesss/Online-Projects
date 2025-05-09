
let menu = document.getElementById('menu')
let menuDirecionamentos = document.getElementById('menuDirecionamentos')


menu.addEventListener('click', ()=> {
    if (menuDirecionamentos.style.display == 'block'){
        menu.src = 'Imagens/global/menuhamburguer.png'
        menuDirecionamentos.style.display = 'none'
    }else {
        menu.src = 'Imagens/global/closemenu.png'
        
        menuDirecionamentos.style.display = 'block'
    }
})
