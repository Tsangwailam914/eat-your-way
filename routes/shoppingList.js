const express = require('express')
const router = express.Router()
const shoppingListController = require('../controllers/shoppingList')

router.get('/', shoppingListController.getShoppingList)

router.post('/createList', shoppingListController.createList)

router.put('/markShoppedItem', shoppingListController.markShoppedItem)

router.put('/markNotYetShoppedItem', shoppingListController.markNotYetShoppedItem)

router.delete('/deleteList', shoppingListController.deleteList)

module.exports = router