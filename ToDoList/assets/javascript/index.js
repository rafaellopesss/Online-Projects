let botaoAdicionar = document.getElementById('adicionar')
let inpuTarefa = document.getElementById('inputarefa')
let sectionList = document.getElementById('list')
let botaoConcluido = document.getElementById('botaoconcluido')
let apagartodasastarefas = document.getElementById('apagartodasastarefas')
let popup = document.getElementById('popup')
let botaoTarefas = document.getElementById('botaoTarefas')
let fechar = document.getElementById('fechar')
let tarefasconcluidas = document.getElementById('tarefasconcluidas')

botaoAdicionar.addEventListener('click', () => {
    if (inpuTarefa.value != ''){
        listaTarefas(inpuTarefa.value)
        inpuTarefa.value = ''
    }else {
        alert('Digite algo no espaço abaixo!')
    }
})

let listaTarefas = (tarefa) => {
    let sectionTarefa = document.createElement('section')
    sectionTarefa.setAttribute('class', 'tarefas')

    let inputCheck = document.createElement('input')
    inputCheck.type = 'checkbox'
    inputCheck.setAttribute('class', 'checkbox')
    inputCheck.setAttribute('title', `${tarefa}`)
    inputCheck.setAttribute('id', `${tarefa.replace(/\s/g, '')}`)

    let labelTarefa = document.createElement('label')
    labelTarefa.setAttribute('for', tarefa.replace(/\s/g, ''))
    labelTarefa.textContent = tarefa

    let botaoApagarTarefa = document.createElement('button')
    botaoApagarTarefa.textContent = 'x'
    botaoApagarTarefa.setAttribute('class', 'apagatarefa')
    botaoApagarTarefa.setAttribute('title', 'Apaga a tarefa caso tenha adicionado errado')

    sectionTarefa.appendChild(inputCheck)
    sectionTarefa.appendChild(labelTarefa)
    sectionTarefa.appendChild(botaoApagarTarefa)
    sectionList.appendChild(sectionTarefa)

}

botaoConcluido.addEventListener('click', () => {
    let checkboxselect = document.getElementsByClassName('checkbox')
    let tarefas = document.getElementsByClassName('tarefas')
    let ul = document.getElementById('tarefasacabadas')
    let createli = document.createElement('li')
    

    if (document.getElementsByClassName('tarefas').length != 0){
        for (let contador = 0; contador < checkboxselect.length; contador ++) {
            if (checkboxselect[contador].checked == true) {                
                createli.textContent = tarefas[contador].children[1].textContent
                ul.appendChild(createli)
                sectionList.removeChild(tarefas[contador])
            }
    }
    }else {
        alert('Digite alguma tarefa!!!')
    }
    
})

let buttoncancelatarefas = document.getElementById('cancelatarefas')
let buttonapagatarefas = document.getElementById('apagatarefas')

apagartodasastarefas.addEventListener('click', () => {
    if (document.getElementsByClassName('tarefas').length == 0){
        alert('Não existe tarefas para apagar!')
        
    }else {
        popup.style.display = 'block'
    }
})

buttoncancelatarefas.addEventListener('click', () => {
    popup.style.display = 'none'
})

buttonapagatarefas.addEventListener('click', () => {
    let tarefas = document.getElementsByClassName('tarefas')
    docu
    for (let contador = 0; contador < document.getElementsByClassName('tarefas').length; contador ++){
        sectionList.removeChild(tarefas[contador])
    }
    popup.style.display = 'none'
})

botaoTarefas.addEventListener('click', () => {
    
    tarefasconcluidas.style.display = 'block'
})

fechar.addEventListener('click', () => {
    
    tarefasconcluidas.style.display = 'none'
})