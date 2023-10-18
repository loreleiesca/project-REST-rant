
//importing react 
const React = require('react') //npm dependency 
const Def = require('./default') //./ is a cue to look in local fiile system

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/yummy-bowl.jpg" alt="Food Bowl" />
                    <div>
                        Photo by <a href="https://unsplash.com/@pwign?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                        Anh Nguyen</a> on 
                        <a href="https://unsplash.com/photos/kcA-c3f_3FE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                        Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home 