
//Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')

//Express Settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('method'))


//Controllers and Routes
app.use('/places', require('./controllers/places'))

/*The first argument to app.use, /places sets all 
routes in the places controller relative to /places. 
This means that /places will be added in front of any 
other path we define in the controller. */


app.get('/', (req, res) => {
    res.render('home')
})


app.get('*', (req, res) => {
    res.render('error404')
})
//important to leave at bottom or else it will override code


//Listen for connections
app.listen(process.env.PORT)