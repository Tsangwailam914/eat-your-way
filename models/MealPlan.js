const mongoose = require('mongoose')

const MealPlanSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true
  },
  mealName: {
    type: String,
    required: true,
  },
  ingredients: [
    {
      ingredient: String,
      toBuy: Boolean
    }
  ],
})

module.exports = mongoose.model('MealPlan', MealPlanSchema)
