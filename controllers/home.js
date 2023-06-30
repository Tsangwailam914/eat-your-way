const MealPlan = require('../models/MealPlan')

module.exports = {
    getMonMeal: async (req, res) => {
        try {
            const breakfast = await MealPlan.find({meal:"Breakfast"})
            const lunch = await MealPlan.find({meal:"Lunch"})
            const dinner = await MealPlan.find({meal:"Dinner"})
            res.render('index.ejs', { breakfast: breakfast, lunch: lunch, dinner:dinner })
        }
        catch (err) {
            console.log(err)
        }
    },
    createMonBreakfast: async (req, res) => {
        try {
            await MealPlan.create({
                meal: "Breakfast",
                mealName: req.body.breakfast,
                ingredients: req.body.ingredient
            })
            res.redirect('/')
        }
        catch (err) {
            console.log(err)
        }
    },
    createLunch: async (req,res) => {
        try {
            await MealPlan.create({
                meal: "Lunch",
                mealName: req.body.lunch,
                ingredients: req.body.ingredient
            })
            res.redirect('/')
        }
        catch(err) {
            console.log(err)
        }
    },
    createDinner: async (req,res) => {
        try {
            await MealPlan.create({
                meal: "Dinner",
                mealName: req.body.dinner,
                ingredients: req.body.ingredient
            })
            res.redirect('/')
        }
        catch(err) {
            console.log(err)
        }
    },
    deleteMeal: async (req,res) => {
        try {
            await MealPlan.findOneAndDelete({_id:req.body.mealIdFromJSFile})
            console.log('Deleted Meal')
            res.json('Deleted')
        }
        catch(err) {
            console.log(err)
        }
    }
}