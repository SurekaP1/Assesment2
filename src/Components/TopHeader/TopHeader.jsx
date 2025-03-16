import React from 'react'
import './TopHeader.css'
import arrow  from '../../assets/arrow.png'

const TopHeader = () => {
  return (
    <div className='TopHeader'>
      <p>Summer Sale For All Swim Suits And Free Express Delivery-OFF 50%! </p>
      <h5>Shop Now</h5>
      
      <div className="English">
        <h5>
          English <img src={arrow} alt="" /> 
        </h5>
      </div>
    </div>
  )
}

export default TopHeader
