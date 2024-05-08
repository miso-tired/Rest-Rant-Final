const React = require('react')
const Def = require('./default.jsx')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oopsies!</p>
            </main>
        </Def>
    )
}

module.exports = error404