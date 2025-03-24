import React from 'react'
import './Header.css'
import search from '../../assets/search.png'
import Wishlist from '../../assets/Wishlist.png'
import Cart from '../../assets/Cart.png'
import user from '../../assets/user.png'

const Header = () => {
  return (
    <div className='Header'> 
    <h3>Exclusive</h3>
    <nav className='contaner'> <ul>
    <li><a href='/Error'> Home </a></li>
    <li><a href="">  Contact </a> </li>
    <li><a href=''>About </a> </li>
    <li> <a href='/Signup'> Sign up </a> </li>
    </ul>
    </nav>

    <div className="search">
      <div className="search-wrapper">
        <img src={search} alt="" className="search-icon" />
        <input type="search" placeholder="What are you looking for?" />
      </div>
      
   
      
    </div>
    <div className="headericons">
      <div className="symbols">
        <img src={Wishlist} alt='' />
        <img src={Cart} alt='' />
        <img src={user} alt='' />
      </div>
    </div>
    
    </div>
  )
}

export default Header
