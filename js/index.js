const root = document.querySelector('#root')
const textTitle = 'dificuldade'
const pathEvil = 'img/evil.png'


// Tagged Template String
const title = Title`
    color: #212e4b;
    font-size: 3.5rem;
    letter-spacing: 1.5px;
    margin-bottom: 2.5rem;
    ${textTitle}
`

const evil = Character`
    width: 20%;
    ${pathEvil}
`

const wrapperCharacters = WrapperCharacters`
display: flex;
justify-content: space-evenly;
${evil + evil + evil}
`

root.insertAdjacentHTML('beforeend', title)
root.insertAdjacentHTML('beforeend', wrapperCharacters)