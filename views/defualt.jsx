
const React = require('react')

//stub function that has one parameter
function Def (html) { 
    return ( 
        <html>
            <head> 
                <title> Title</title>
            </head>
            <body> 
                {html.children}
            </body>
        </html>
    )
}

//export the function above
module.exports = Def 