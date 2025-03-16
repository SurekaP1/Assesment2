import React from 'react'
import './Header.css'
import search from '../../assets/search.png'

const Header = () => {
  return (
    <div className='Header'> 
    <h3>Exclusive</h3>
    <nav className='contaner'> <ul>
    <li>Home</li>
    <li> Contact</li>
    <li>About</li>
    <li>Sign up</li>
    </ul>
    </nav>

    <div className='search'>
      <input  type="text"  placeholder="What are you looking for?"/>
      <button className='button'> <img src={search} alt='' /> </button>
      
    </div>
   

      
    </div>
  )
}

export default Header
