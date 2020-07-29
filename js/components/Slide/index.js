const createStyle = css => {
   const head = document.querySelector('head')
   const styleAction = `
      <style>
         ${css}
      </style>
   `
   head.insertAdjacentHTML('beforeend', styleAction)
}

const Action = (css) => {
   createStyle(css)
   return `<li class="action"></li>`
}

const Item = (css, className= "") => {
   createStyle(css)
   return `<li class="item ${className}" onClick="handleClick(event)"></li>`
}

const Slide = (css, content) => {
   return `<ul style="${css}">${content}</ul>`
}