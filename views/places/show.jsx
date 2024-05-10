const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <main className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src={data.place.imageUrl} alt={data.place.name} className="img-fluid" />
                    </div>
                    <div className="col-md-8">
                        <h1>{ data.place.name }</h1>
                        <section>
                            <h2>Rating</h2>
                            <p>Currently unrated</p>
                        </section>
                        <section>
                            <h2>Description</h2>
                            <p>PLACEholder text. HAHA get it? Explain it.</p>
                        </section>
                    </div>
                </div>
                <div className="row justify-content-center mt-5">
                    <div className="col-md-8">
                        <section>
                            <h2>Comments</h2>
                            <p>No comments yet!</p>
                        </section>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = show
