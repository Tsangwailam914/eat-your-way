const delBtn = document.querySelectorAll('.item-del-btn')
const shoppingItem = document.querySelectorAll('span.not')
const shoppedItem = document.querySelectorAll('span.completed')

Array.from(delBtn).forEach(el => {
    el.addEventListener('click', deleteItem)
})

Array.from(shoppingItem).forEach(el => {
    el.addEventListener('click', markShoppedItem)
})

Array.from(shoppedItem).forEach(el => {
    el.addEventListener('click', markNotYetShoppedItem)
})

async function deleteItem() {
    const itemId = this.parentNode.dataset.id
    try {
        const response = await fetch('shoppingList/deleteList', {
            method: 'delete',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'itemIdfromJSFile': itemId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }
    catch (err) {
        console.log(err)
    }
}

async function markShoppedItem() {
    const itemId = this.parentNode.dataset.id
    try {
        const response = await fetch('shoppingList/markShoppedItem', {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'itemIdfromJSFile': itemId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }
    catch(err) {
        console.log(err)
    }
}

async function markNotYetShoppedItem() {
    const itemId = this.parentNode.dataset.id
    try {
        const response = await fetch('shoppingList/markNotYetShoppedItem', {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'itemIdfromJSFile': itemId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }
    catch(err) {
        console.log(err)
    }
}