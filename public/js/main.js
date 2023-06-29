const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')
const addIngredients = document.querySelectorAll('.more-ingredients-btn')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})

Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

Array.from(addIngredients).forEach((el) => {
    el.addEventListener('click', moreIngredients)
})

function moreIngredients(evt) {
    const ingredients = this.previousSibling.previousElementSibling
    const ingredient = document.createElement('div')
    const ingredientInput = document.createElement('input')
    const toBuyCheckbox = document.createElement('input')

    ingredient.classList.add("ingredient")

    ingredientInput.setAttribute('type', 'text')
    ingredientInput.setAttribute('placeholder', 'Ingredient')
    ingredientInput.setAttribute('autocomplete', 'off')
    ingredientInput.setAttribute('name','monIngredient')

    toBuyCheckbox.setAttribute('type','checkbox')
    toBuyCheckbox.setAttribute('name','toBuy')

    ingredient.appendChild(ingredientInput)
    ingredient.appendChild(toBuyCheckbox)

    ingredients.appendChild(ingredient)
}

async function deleteTodo(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}