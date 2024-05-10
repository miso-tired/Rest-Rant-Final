const router = require('express').Router()
const places = require('../models/places')

router.get('/', (req, res) => {
    res.render('places/index', { places })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

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

router.post('/', (req, res) => {
  if (!req.body.pic) {
    req.body.pic = 'https://www.wrestlezone.com/wp-content/uploads/sites/8/2023/12/kurt-angle-meme-machine.jpg'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (req.body.state) {
    req.body.state = `'Merica`
  }
  places.push(req.body)
  res.redirect('/places')
})

module.exports = router
