const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: Number
})


module.exports = mongoose.model('Place', placeSchema)



/*module.exports = [{
    name: 'Dutch Bros',
    city: 'Grants Pass',
    state: 'OR', 
    cuisines: 'Coffee',
    pic: '/images/coffee-grind.jpg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/big-eye-kitty.jpg'
  }]*/