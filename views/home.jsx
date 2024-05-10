const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>Home</h1>
                <div>
                <img src="/images/restaurantFront.jpg" alt='Restaurant Front'  className='centeredImage'/>
                <div className='author-creds'>
                    Photo by <a href='https://unsplash.com/@mroz'>Filip Mroz</a> on <a href='https://unsplash.com/photos/black-and-gray-food-stand-during-nighttime-oVMjj1ub5kw'></a>
                </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
)
}

module.exports = home