import React from 'react'
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
      <Header setPage={setPage} />

      {page === "/Error" && <ErrorPage />}
      {page === "/Signup" && <SignUpPage />}
      {page !== "/Error" && page !== "/Signup" && <h1>Welcome to Home Page</h1>}
      <Error/> 
     
       
    </div>
  )
}

export default App