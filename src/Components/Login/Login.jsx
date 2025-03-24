import React from 'react'
import './Login.css'
import SideImage from '../../assets/SideImage.png'
import Footer from '../Footer/Footer'
import TopHeader from '../TopHeader/TopHeader'
import Header from '../Header/Header'

const Login = () => {
  return (
    <div className="login-import">
      <div className="log-in">
        <div className="signup">

          <div className="side-image">
            <img src={SideImage} alt="" />
          </div>

          <div className="login-form">
            <h1>Log in to Exclusive</h1>
            <h3>Enter your details below</h3>
            <h2></h2>
            <form>
              <input type="email" placeholder="Email or Phone Number" />
              <input type="password" placeholder="Password" />

              <div class="container">
                <button>Log In</button>
                <a href="">Forget Password?</a>
              </div>
             
            </form>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
