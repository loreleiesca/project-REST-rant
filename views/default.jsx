
const React = require('react')

//stub function that has one parameter
function Def (html) { 
    return ( 
        <html>
            <head> 
                <title> Title</title>
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body> 
                {html.children}
            </body>
        </html>
    )
}
//https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js

//export the function above
module.exports = Def 