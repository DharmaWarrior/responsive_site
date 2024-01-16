import React from 'react';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href='#'>WariCrew</a></p>
  </>
)

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-links">
        <div className="navbar-links__containers">
        <Menu />
        </div>
      </div>
    </div>
  )
}

export default Navbar
