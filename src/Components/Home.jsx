import React from 'react'
import './Home.css'

function Home(){
    return(
        <>
        <div className="text">
            <h1>Hello <br /> I'm Abdurauf</h1>
            <p>I am a front-end developer <br /> <br /> And i'm 20  </p>
        <br />
        <img src={ require('./images/teleg.png')} id='sm'/>
        <img src={ require('./images/whats.png')} id='sm'/>
        <img src={ require('./images/twiter.png')} id='sm'/>
        </div>
        
        <div className="img">
            <img src={ require('./images/log    o.jpg')} id='prof'/>
        </div>
        
        </>
    );
}
export default Home