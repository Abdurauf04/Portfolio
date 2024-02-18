import React from 'react'
import './Nav.css'

function Navbar() {
  return (
    <>
    <header>  
        {/* <img src={ require('./images/logo.jpg')} id='logo'  /> */}
        <h1 id='logo'>A|X.</h1>
          <ul className='nav-underline'>
            <li> <a href="#" className='li-item' > Home </a> </li>
            <li> <a href="#" className='li-item' > About me </a> </li>
            <li> <a href="#" className='li-item' > Projects </a> </li>
            <li> <a href="#" className='li-item' > Contact </a> </li> 
            <li><img src={require('./images/nav.png')} id='ss' /></li>     
          </ul> 
  
    </header>
  
    </>
  )
}

export default Navbar
