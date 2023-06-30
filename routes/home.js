const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/', homeController.getMonMeal) 

router.post('/monBreakfast', homeController.createMonBreakfast)
router.post('/lunch', homeController.createLunch)
router.post('/dinner', homeController.createDinner)

router.delete('/deleteMeal', homeController.deleteMeal)

module.exports = router