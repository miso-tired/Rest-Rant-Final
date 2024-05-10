const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>Rest-Rant</h1>
                <div>
                    <div className='centeredImage'>
                        <img src='/images/restaurantFront.jpg' alt='Restaurant Front'/>
                        <img src='/images/dayRestaurant.jpg' alt='Restaurant Front' />
                    </div>
                <div className='author-creds'>
                <div>
                    Photo by <a href='https://unsplash.com/@mroz'>Filip Mroz</a> on <a href='https://unsplash.com/photos/black-and-gray-food-stand-during-nighttime-oVMjj1ub5kw'>Unsplash</a>
                    </div>
                    <div>
                    Photo by <a href='https://unsplash.com/@heftiba'>Toa Heftiba</a> on <a href='https://unsplash.com/photos/opened-white-wooden-door-50ijCEHhN8o'>Unsplash</a>
                    </div>
                </div>
                </div>
                <a href="/places">
                    <button className="btn btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
)
}

module.exports = home