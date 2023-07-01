const shoppingList = require('../models/shoppingList')

module.exports = {
    getShoppingList: async (req,res)=>{
        try{
            const shoppingItems = await shoppingList.find()
            const itemsLeft = await shoppingList.countDocuments({completed: false})
            res.render('shoppingList.ejs', {shoppingList: shoppingItems, left: itemsLeft})
        }catch(err){
            console.log(err)
        }
    },
    createList: async (req, res)=>{
        try{
            await shoppingList.create({shoppingItem: req.body.shoppingItem, completed: false})
            console.log('Shopping Item has been added!')
            res.redirect('/shoppingList')
        }catch(err){
            console.log(err)
        }
    },
    markShoppedItem: async (req, res)=>{
        try{
            await shoppingList.findOneAndUpdate({_id:req.body.itemIdfromJSFile},{
                completed: true
            })
            res.json('Mark Shopped')
        }catch(err){
            console.log(err)
        }
    },
    markNotYetShoppedItem: async (req, res)=>{
        try{
            await shoppingList.findOneAndUpdate({_id:req.body.itemIdfromJSFile},{
                completed: false
            })
            res.json('Mark not yet shopped')
        }catch(err){
            console.log(err)
        }
    },
    deleteList: async (req, res)=>{
        try{
            await shoppingList.findOneAndDelete({_id:req.body.itemIdfromJSFile})
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    