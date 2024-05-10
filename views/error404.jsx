const React = require('react');
const Def = require('./default.jsx');

function error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oopsies!</p>
                <div className='centeredImage'>
                    <div>
                        <img src='/images/chiaSeeds.jpg' alt='Chia Seeds' />
                        <div className='author-creds'>
                            <div>
                                Photo by <a href='https://unsplash.com/@cravethebenefits'>Brenda Godinez</a> on <a href='https://unsplash.com/photos/two-fruit-beverages-on-glass-cups-MsTOg6rhRVk'>Unsplash</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404;