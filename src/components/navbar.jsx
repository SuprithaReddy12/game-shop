import React from 'react'
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import './navbar.css';

function Navbar() {
  return (
    <>
    <div className='navbar'>
        <div className='links'>
          <h1 className="heading">Game Zone</h1>
            <div className='side-heading'>
            <Link to="/"><b>Shop</b></Link>
            <Link to="/cart"><ShoppingCart size={32}/></Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar
