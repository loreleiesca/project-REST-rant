
const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place, index) => {
      return (
        <div className="col-sm-6">
          <h2>
          <a href={`/places/${index}`} /> 
              {place.name}
          </h2>
          <p className="text-center">
            {place.cuisines}
          </p>
          <img src={place.pic} alt={place.name} />
          <p className="text-center">
            Located in {place.city}, {place.state}
          </p>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>Places to Rant or Rave About</h1>
              <div className="row">
              {placesFormatted}
              </div>
          </main>
      </Def>
  )
  }
  

module.exports = index

//COFFEE
//Photo by <a href="https://unsplash.com/@nate_dumlao?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nathan Dumlao</a> on <a href="https://unsplash.com/photos/Y3AqmbmtLQI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
//CAT
//Photo by <a href="https://unsplash.com/@darbylee12?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Darby P.</a> on <a href="https://unsplash.com/photos/WX_ahy80nPs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
  