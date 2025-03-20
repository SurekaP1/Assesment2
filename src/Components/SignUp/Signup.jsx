import React from 'react'
import './Signup.css'
import SideImage from '../../assets/SideImage.png'
import Header from '../Header/Header'
import SubHeader from '../TopHeader/TopHeader'
import Footer from '../Footer/Footer'
import Google from '../../assets/IconGoogle.png'
import TopHeader from '../TopHeader/TopHeader'


const Signup = () => {
  return (
    <div className="signup-import">
    <Header/>
      <TopHeader/>
      <div className="signup">
        {/* side image */}
        <div className="side-image">
          <img src={SideImage} alt="" />
        </div>

        
        <div className="signup-form">
          <h1>Create an account</h1>
          <h3>Enter your details below</h3>
          <h2></h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email or Phone Number" />
            <input type="password" placeholder="Password" />
            
            <button className="create-accout">Create Account</button>
            <button className="sign-with-google">
              
              <img src={IconGoogle} alt="" className="google" />
              Sign up with Google
            </button>
          </form>
          <div className="login-meg">
            <h4>Already have account?</h4>
            <a href="#">Login</a>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Signup