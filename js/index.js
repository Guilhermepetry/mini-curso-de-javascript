const root = document.querySelector('#root')
const textTitle = 'Dificuldade'


// Tagged Template String
const title = Title`
    color: red;
    font-size: 30px;
    ${textTitle}
`

root.insertAdjacentHTML('beforeend', title)