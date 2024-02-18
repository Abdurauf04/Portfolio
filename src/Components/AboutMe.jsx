import React from "react";
import './AboutMe.css'


function AboutMe(){
   return(
    <>
    <h1 className="me">About Me</h1>

    <div className="sometext">
    <p id="p">Hi it same text about me  skilled full-stack developer with expertise in a wide range of technologies. Proficient in front-end development with HTML, CSS, JavaScript, and React.js, creating dynamic and responsive user interfaces. Experienced in utilizing Bootstrap for efficient design implementation. Possesses strong back-end development skills, including Python, SQL, and C++, for building robust and scalable applications. Able to deliver full-stack solutions that meet diverse business requirements and user needs. A dedicated professional with a passion for learning </p>
    </div>   

    <h1 className="front">Front-end</h1> 
    <div className="front_end">
        <button className="html a">HTML</button>
        <button className="css a">CSS</button>
        <button className="js a">JavaScritpt</button>
        <button className="react a">React.js</button>
        <button className="boot a">Bootstrap</button>
    </div>
    <h1 className="back">Back-end</h1>
    <div className="back_end">
    <button className="py b">Python</button>
        <button className="c b">C++</button>
        <button className="sql b">SQL</button>
        <button className="json b">JSON</button>
    </div>
    </>
   );
}
export default AboutMe