
const React = require('react')
const Def = require('./default')

function error404 () {
    return ( 
        <Def> 
            <main> 
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/standing-otter.jpg" alt="Standing Otter" />
                    <div>
                        Photo by <a href="https://unsplash.com/@rayhennessy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                        Ray Hennessy</a> on 
                        <a href="https://unsplash.com/photos/lAJWoAR9RTU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                        Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404