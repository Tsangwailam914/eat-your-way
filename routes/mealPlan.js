const express = require('express')
const router = express.Router()
const mealController = require('../controllers/mealPlan')

router.get('/', mealController.getMonMeal) 

router.post('/monBreakfast', mealController.createMonBreakfast)
router.post('/lunch', mealController.createLunch)
router.post('/dinner', mealController.createDinner)

router.delete('/deleteMeal', mealController.deleteMeal)

module.exports = router