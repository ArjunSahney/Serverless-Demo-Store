import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import ProductPage from './routes/ProductPage'
import Home from './routes/Home'
import NotFound from './routes/NotFound'

function App () {
  return <div id="app">
    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

    <Footer />
  </div>
}

export default App
