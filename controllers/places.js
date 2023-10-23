
const router = require('express').Router()
const places = require('../models/places.js')


router.get('/', (req, res) => {
  //console.log(req.body)
  res.render('places/index', { places })
})

router.post('/', (req, res) => {
  //console.log(req.body)
  if (!req.body.pic) {
    req.body.pic= 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push (req.body)
  res.redirect('/places')
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