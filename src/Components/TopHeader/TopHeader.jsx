import React from 'react'
import './TopHeader.css'
import arrow  from '../../assets/arrow.png'

const TopHeader = () => {
  return (
    <div className='TopHeader'>
      <p>Summer Sale For All Swim Suits And Free Express Delivery-OFF 50%! </p>
      <h4>Shop Now</h4>
      
      <div className="English">
        <h4>
          English <img src={arrow} alt="" /> 
        </h4>
      </div>
    </div>
  )
}

export default TopHeader
