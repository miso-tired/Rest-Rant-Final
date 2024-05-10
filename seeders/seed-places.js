const db = require('../models')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/padThai.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/catCafe.jpg',
    founded: 2020
}])
.then(() => {
    console.log('It do be working')
    process.exit()
})
.catch(err => {
    console.log('You fail.', err)
    process.exit()
})
