import { useState } from 'react'
import './App.css'
import Navbar from './nav'
import Hero from './heor'
import Footer from './Footer'
import Signup from './signup'
import Signin from './Signin'
import Dashboard from './Dashboard'
import Home from './Home'
import WalletRecharge from './walletcharge'
import RTIForm from './RTIFilling'
import About from './Aboutus'
import PIOSearch from './PioSearch'
import Product from './Product'

import { Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
        <Navbar />
        
           <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup/Frontend/Home" element={<Home/>}/>
      <Route path="/signin/Frontend/Home" element={<Home/>}/>
      <Route path="/Aboutus" element={<About/>}/>
      <Route path="/signin" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/walletrecharge" element={<WalletRecharge />} />
      <Route path="/rti" element={<RTIForm />} />
      <Route path="/pio-search" element={<PIOSearch />} />
      <Route path="/product" element={<Product />} />
    </Routes>
        <Footer />
        </>
  )
}

export default App
