const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <div className='data-ins'>
              <h1>{data.place.name}</h1>
              <h2>Description</h2>
              <p>{data.place.city}, {data.place.state}</p>
              <p>{data.place.cuisines}</p>
              <h2>Rating</h2>
              <p>Currently unrated</p>
              <h2>Comments</h2>
              <p>No comments yet!</p>
              <div className='buttons'>
              <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                 Edit
              </a> 
              <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                  Delete
                </button>
              </form>    
            </div>
            </div>
          </main>
        </Def>
    )
}

module.exports = show
