const MealPlan = require('../models/MealPlan')

module.exports = {
    getMonMeal: async (req, res) => {
        try {
            const monBreakfast = await MealPlan.find()
            res.render('index.ejs', { monBreakfast: monBreakfast })
        }
        catch (err) {
            console.log(err)
        }
    },
    // getMealPlan: async (req,res) => {
    //     try {

    //     }
    //     catch {

    //     }
    // },
    createMonBreakfast: async (req, res) => {
        try {
            let ingredients = [];
            req.body.monIngredient.forEach((ingredient, i) => {
                ingredients[i] = {
                    ingredient: ingredient
                }
            })
            console.log(req.body.toBuy)
            await MealPlan.create({
                day: "Mon",
                mealName: req.body.monBreakfast,
                // ingredients: [{
                //     ingredient: req.body.monIngredient,
                //     toBuy: req.body.toBuy === "on" ? true : false
                // }]
                ingredients: ingredients
            })
        }
        catch (err) {
            console.log(err)
        }
        // console.log()
    }
}