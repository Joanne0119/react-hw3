import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home'
import BookDetials from './components/BookDetials'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { useState } from 'react'


function App() {
  const [cartCount, setCartCount] = useState(0);
  return (
    <BrowserRouter>
      <Nav cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="book/:id" element={<BookDetials setCartCount={setCartCount}/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
