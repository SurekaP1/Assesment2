import React from 'react'
import './Error.css'
import Footer from '../Footer/Footer'
import TopHeader from '../TopHeader/TopHeader'
import Header from '../Header/Header'


const Error = () => {
  return (
    <div className="error-page">
   <div className="bar">
    <h5>Home</h5>
    <h4>/</h4>
    <h4>404 Error</h4>
   </div>

   <h1>404 Not Found</h1>
   <p>Your Visited Page not found. You may go home page.</p>
   <div className="btn">
    <center>
        <button>Back to home Page</button>
    </center>
   </div>
  </div>
  )
}

export default Error
