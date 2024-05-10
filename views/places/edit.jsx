const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
            <form method="POST" action={`/places/${data.place.id}?_method=PUT`} className="row g-3">
                <input type="hidden" name="_method" value="PUT" /> {/* Add method override */}
                <div className='col-md-6'>
                    <label htmlFor="name" className="form-label">Place Name</label>
                    <input className='form-control' id="name" name="name" defaultValue={data.place.name} required />
                </div>
                <div className='col-md-6'>
                    <label htmlFor="pic" className="form-label">Place Picture</label>
                    <input className='form-control' id="pic" name="pic" defaultValue={data.place.pic} />
                </div>
                <div className='col-md-6'>
                    <label htmlFor="city" className="form-label">City</label>
                    <input className='form-control' id="city" name="city" defaultValue={data.place.city} />
                </div>
                <div className='col-md-6'>
                    <label htmlFor="state" className="form-label">State</label>
                    <input className='form-control' id="state" name="state" defaultValue={data.place.state} />
                </div>
                <div className='col-12'>
                    <label htmlFor="cuisines" className="form-label">Cuisines</label>
                    <input className='form-control' id="cuisines" name="cuisines" defaultValue={data.place.cuisines} required />
                </div>
                <div className="col-12">
                    <button className='btn btn-primary' type="submit">Update Place</button>
                </div>
            </form>
          </main>
        </Def>
    )
}

module.exports = edit_form