const mongoose = require('mongoose')

const ShoppingListSchema = new mongoose.Schema({
  shoppingItem: {
    type: Array,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  }
})

module.exports = mongoose.model('ShoppingList', ShoppingListSchema)
