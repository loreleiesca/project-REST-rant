const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
          <main>
            <h1>Add a New Place</h1>
            <form method="POST" action="/places">
            <div className="form-group">
                <label htmlFor="name">Place Name</label>
                <input id="name" name="name" required/>
            </div>
            <div className="form-group">
                <label htmlFor="pic">Place Picture</label>
                <input type="url" id="pic" name="pic" />
            </div>
            <div className="form-group">
                <label htmlFor="city">City</label>
                <input id="city" name="city" />
            </div>
            <div className="form-group">
                <label htmlFor="state">State</label>
                <input id="state" name="state" />
            </div>
            <div className="form-group">
                <label htmlFor="cuisines">Cuisines</label>
                <input id="cuisines" name="cuisines" required/>
            </div>
                 <input type="submit" value="Add Place" />
            </form>
            </main>
        </Def>
    )
}

module.exports = new_form
