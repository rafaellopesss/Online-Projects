let menu = document.getElementById('menu')
let menu_icone= document.getElementById('menu-icone')

let show = () => {
    if (menu_icone.style.display == 'none'){
        
        menu.innerText = 'close'
        menu_icone.style.display = 'block'


    }else{
        menu.innerText = 'menu'
        menu_icone.style.display = 'none'
    }
    
}p