const express = require('express')
const app = express()
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const listRoutes = require('./routes/shoppingList')

require('dotenv').config({path: './config/.env'})

connectDB()

app.use(express.json())
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


app.use('/', homeRoutes)
app.use('/shoppingList', listRoutes)
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    