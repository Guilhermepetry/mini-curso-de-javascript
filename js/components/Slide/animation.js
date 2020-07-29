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