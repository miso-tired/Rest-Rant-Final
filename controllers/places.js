const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'https://plus.unsplash.com/premium_photo-1661610605309-77feabcc8772?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGFkJTIwdGhhaXxlbnwwfHwwfHx8MA%3D%3D'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'https://images.unsplash.com/photo-1542396725-b072047a45a4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0JTIwY2FmZXxlbnwwfHwwfHx8MA%3D%3D'
      }]      
    res.render('places/index', {places})
})

module.exports = router
