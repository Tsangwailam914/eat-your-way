const MealPlan = require('../models/MealPlan')

module.exports = {
    getMonMeal: async (req, res) => {
        try {
            const monBreakfast = await MealPlan.find({meal:"Breakfast"})
            const lunch = await MealPlan.find({meal:"Lunch"})
            const dinner = await MealPlan.find({meal:"Dinner"})
            res.render('index.ejs', { monBreakfast: monBreakfast, lunch: lunch, dinner:dinner })
        }
        catch (err) {
            console.log(err)
        }
    },
    createMonBreakfast: async (req, res) => {
        try {
            let ingredients = [];
            req.body.monIngredient.forEach((ingredient, i) => {
                ingredients[i] = {
                    ingredient: ingredient
                }
            })
            await MealPlan.create({
                meal: "Breakfast",
                mealName: req.body.monBreakfast,
                ingredients: ingredients
            })
            res.redirect('/')
        }
        catch (err) {
            console.log(err)
        }
    },
    createLunch: async (req,res) => {
        try {
            let ingredients = [];
            req.body.monIngredient.forEach((ingredient, i) => {
                ingredients[i] = {
                    ingredient: ingredient
                }
            })
            await MealPlan.create({
                meal: "Lunch",
                mealName: req.body.lunch,
                ingredients: ingredients
            })
            res.redirect('/')
        }
        catch(err) {
            console.log(err)
        }
    },
    createDinner: async (req,res) => {
        try {
            let ingredients = [];
            req.body.monIngredient.forEach((ingredient, i) => {
                ingredients[i] = {
                    ingredient: ingredient
                }
            })
            await MealPlan.create({
                meal: "Dinner",
                mealName: req.body.dinner,
                ingredients: ingredients
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