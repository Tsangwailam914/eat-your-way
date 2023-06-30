const mongoose = require('mongoose')

const MealPlanSchema = new mongoose.Schema({
  meal: String,
  mealName: {
    type: String,
    required: true,
  },
  ingredients: [],
})

module.exports = mongoose.model('MealPlan', MealPlanSchema)
