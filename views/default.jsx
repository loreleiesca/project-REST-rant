
const React = require('react')

//stub function that has one parameter
function Def (html) { 
    return ( 
        <html>
            <head> 
                <title> Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"/>
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body> 
            <nav>
                <ul>
                    <li>
                       <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/places">Places</a>
                    </li>
                    <li>
                        <a href="/places/new">Add Place</a>
                    </li>
                </ul>
            </nav>
                {html.children}
            </body>
        </html>
    )
}
//https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js

//export the function above
module.exports = Def 