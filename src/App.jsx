import Home from "./components/Home"
import Nav from "./components/Nav"
import { Routes, Route } from 'react-router-dom'
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Details from "./components/Details"
import SignUp from "./components/SignUp"
import Login from "./components/Login"
import PersonalData from "./components/PersonalData"



function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/details/:id' element={<Details/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/personal' element={<PersonalData/>} />
      </Routes>
      <Footer/>


    </>
  )
}

export default App
