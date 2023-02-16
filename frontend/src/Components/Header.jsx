import React from 'react';
import {Link} from 'react-router-dom';
import chef from '../assets/images/chef.png';
import cart from '../assets/images/cart.png';


function Header() {
  return (
    <nav id="header" className="bg-black text-white">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
            <div className="logo-wrapper pl-4 flex items-center">
                <Link to="/" className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                    <img src={chef} alt="logo" className='w-40 h-40'/>
                </Link>
            </div>
            <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="flex items-center justify-center space-x-4">
                <Link to="/cart" className="h-15 w-14 mr-4 relative">
                    <img src={cart} alt="cart"/>
                </Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Signup</Link>
            </div>
        </div>
    </nav>
  )
}

export default Header;