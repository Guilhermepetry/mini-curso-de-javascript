# Anotações 

## 1º Dia 

Como selecionar um elemento da DOM:
```javascript
//BOM - Window
//DOM - Documento

const title = "<h1>Dificuldade</h1>"
const title = document.querySelector('h1')
title.textContent = 'Mudando!'
```

Como **criar** e **inserir** um elemento, usando o `appendChild` na DOM:
```javascript
const title = document.createElement('h1')
title.textContent = "Dificuldade"
root.appendChild(title)
```
\
Refatorando e reaproveitando o código, usando `função`:
```javascript
const root = document.querySelector('#root')

function newElement(tag, content){
    const element = `<${tag}>${content}</${tag}>`

    root.insertAdjacentHTML('beforeend', element)
}

newElement('h1', 'Dificuldade')
```