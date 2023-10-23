
const router = require('express').Router()


let places = [{
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
}]

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})


router.get('/new', (req, res) => {
  res.render('places/new')
})


// GET/ places
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      res.render('places/show', { place: places[id] })
    }
  })
  

    //res.render('places/index', { places }) })

module.exports = router