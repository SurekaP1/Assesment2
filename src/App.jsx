
import React, { useState } from 'react'
import TopHeader from './Components/TopHeader/TopHeader'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Signup from './Components/SignUp/Signup'
import Error from './Components/Error/Error'
import Login from './Components/Login/Login'

const App = () => {
  const [page, setPage] = useState(window.location.pathname);

  return (
    <div>
       <TopHeader/>
      <Header setPage={setPage} />  
     
      {page === "/Signup" && <Signup />}
      {page === "/Error" && <Error />}
      {page === "/Login" && <Login />}
      
     <Footer/>
       
    </div>
  )
}

export default App