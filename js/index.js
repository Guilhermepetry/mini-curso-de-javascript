const root = document.querySelector('#root')
const textTitle = 'dificuldade'
const pathEvil = 'img/evil.png'


// Tagged Template String
const title = Title`
color: var(--color-blue);
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

const action = Action`
    .action{
        list-style: none;
        border-radius: 50%;
        background-color: var(--color-white);
        height: calc(var(--line-height) * 4);
        width: calc(var(--line-height) * 4);
        position: absolute;
        left: -5px;
        transition: transform 300ms linear;
    }
    .action.second{
        transform: translateX(225px);
    }
    .action.third{
        transform: translateX(449px);
    }
`

const item = positionItem => Item`
    .item{
        list-style: none;
        height: calc(var(--line-height) * 3.1);
        width: calc(var(--line-height) * 3.1);
        background-color: var(--color-yellow);
        border-radius: 50%;
        cursor: pointer;
        transition: transform 250ms linear;
    }
    ${`pos-${positionItem}`}
`

const itemActive = positionItem => Item`
    .item.active{
        transform: scale(1.6);
    }
    ${`active pos-${positionItem}`}
`

const slide = Slide`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 80%;
    height: var(--line-height);
    background-color: var(--color-yellow);
    margin-top: auto;
    ${showItems(states) + action}
`


root.insertAdjacentHTML('beforeend', title)
root.insertAdjacentHTML('beforeend', wrapperCharacters)
root.insertAdjacentHTML('beforeend', slide)