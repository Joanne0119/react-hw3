import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home'
import BookDetials from './components/BookDetials'
import Nav from './components/Nav'
import Footer from './components/Footer'


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="book/:id" element={<BookDetials />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
