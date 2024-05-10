const React = require('react');
const Def = require('../default');

function show(data) {
    let comments = (
        <h3 className='inactive'>
            Empty.
        </h3>
    );

    let rating = (
        <h3 className='inactive'>
            Not rated yet, brah
        </h3>
    )
    
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) =>{
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
            stars += '★'
        }
        rating = (
            <h3>
                {stars} stars
            </h3>
        )
    }

    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div key={c._id} className='border'>
                    <h2 className='rant'>
                        (RANT or RAVE?!)
                    </h2>
                    <h4>
                        {c.content}
                    </h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>
                        Rating: {c.stars}
                    </h4>
                </div>
            );
        });
    }

    return (
        <Def>
            <main className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src={data.place.pic} alt={data.place.name} className="img-fluid" />
                        <h3>
                            Located in {data.place.city}, {data.place.state}
                        </h3>
                    </div>
                    <div className="col-md-8">
                        <h1>{ data.place.name }</h1>
                        <section>
                            <h2>Rating</h2>
                            {rating}
                        </section>
                        <section>
                            <h2>Description</h2>
                            <h3>
                                {data.place.showEstablished()}
                            </h3>
                            <h4>
                                Serving {data.place.cuisines}
                            </h4>
                            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                                Edit
                            </a>     
                                <form method='POST' action={`/places/${data.id}?_method=DELETE`}> 
                                <button type="submit" className="btn btn-danger">
                                    Delete
                                </button>
                                </form>     
                        </section>
                    </div>
                </div>
                <div className="row justify-content-center mt-5">
                    <div className="col-md-8">
                        <section>
                            <h2>Comments</h2>
                            {comments}
                        </section>
                        <section>
                            <h2>Add a Comment</h2>
                            <form method="POST" action={`/places/${data.id}?_method=PUT`}>
                                <div className="form-group">
                                    <label htmlFor="author">Author</label>
                                    <input type="text" id="author" name="author" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="content">Content</label>
                                    <textarea id="content" name="content" className="form-control" required></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="rating">Star Rating</label>
                                    <input type="number" id="rating" name="rating" className="form-control" step="0.5" required />
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" id="rant" name="rant" className="form-check-input" />
                                    <label htmlFor="rant" className="form-check-label">Rant</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </section>
                    </div>
                </div>
            </main>
        </Def>
    );
}

module.exports = show;
