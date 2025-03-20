import React from 'react'
import TopHeader from './Components/TopHeader/TopHeader'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Signup from './Components/SignUp/Signup'
import Error from './Components/Error/Error'

const App = () => {
  return (
    <div>
        <TopHeader/>
        <Header/>
        <Footer/>
        <Signup/>
        <Error/>
    </div>
  )
}

export default App