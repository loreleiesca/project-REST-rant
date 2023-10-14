
//importing react 
const React = require('react') //npm dependency 
const Def = require('./default') //./ is a cue to look in local fiile system

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home 