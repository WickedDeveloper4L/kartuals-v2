import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
    <Link to='/' className='logo'>
    <svg id="sw-js-blob-svg" className="chips" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                    <stop id="stop1" stop-color="rgba(255, 81.917, 0, 1)" offset="0%"></stop>
                    <stop id="stop2" stop-color="rgba(255, 158.795, 0, 1)" offset="100%"></stop>
                </linearGradient>
            </defs>                
            <path fill="url(#sw-gradient)" d="M25,-29.1C31.9,-24,36.6,-15.6,38.9,
            -6.3C41.2,3,41.1,13.3,36.7,21.4C32.3,29.5,23.7,35.4,15.3,35.8C6.9,36.2,-1.3,31.1,-10.4,28C-19.5,24.9,-29.5,23.9,
            -32.6,18.7C-35.7,13.6,-31.9,4.3,-30.6,-5.9C-29.4,-16,-30.7,-27.1,-26.1,-32.6C-21.4,-38.1,-10.7,-38,-0.8,-37C9,-36,18.1,-34.2,25,-29.1Z" 
            width="100%" height="100%" transform="translate(50 50)" stroke-width="0" stroke="url(#sw-gradient)"></path>
        </svg>
        <h1 className="name">kartuals</h1>
    </Link>
    <div className='links'>
        <Link className="header_links" to='/shop'>SHOP</Link>
        <Link className="header_links" to='/contact'>CONTACT</Link>
    </div>
    </div>
  )
}

export default Header