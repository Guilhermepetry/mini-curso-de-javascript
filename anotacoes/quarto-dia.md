# Anotações 

## 4º Dia 

Nessa aula foi criada o Slide.

* Componentes do Slide:
```javascript
// Função que adiciona o CSS no Head do HTML
const createStyle = css => {
   const head = document.querySelector('head')
   const styleAction = `
      <style>
         ${css}
      </style>
   `
   head.insertAdjacentHTML('beforeend', styleAction)
}

// Item branco
const Action = (css) => {
   createStyle(css)
   return `<li class="action"></li>`
}

// Itens amarelos
const Item = (css, className= "") => {
   createStyle(css)
   return `<li class="item ${className}" onClick="handleClick(event)"></li>`
}

// Slide
const Slide = (css, content) => {
   return `<ul style="${css}">${content}</ul>`
}
```

* Lógica da animação:
```javascript
const states = [true, false, false]

const showItems = statesItems => {
    const items = statesItems.map((state, index) => {
        return state 
            ?itemActive(index + 1)
            :item(index + 1)
    })
    
    return items.join('')
}

const clearAction = action => {
   action.classList.remove('second')
   action.classList.remove('third')
}

const handleClick = event => {
   const { target } = event
   const allItems = document.querySelectorAll('.item')
   const action = document.querySelector('.action')

   allItems.forEach(item => item.classList.remove('active'))
   target.classList.add('active');

   clearAction(action)
   if (target.classList.contains('pos-2')) {
      action.classList.add('second')
   }

   if (target.classList.contains('pos-3')) {
      action.classList.add('third')
   }
} 
```