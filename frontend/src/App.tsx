import { useState } from 'react'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home.tsx'
import Contact from './pages/Contact.tsx'
import Login from './pages/Login.tsx'
import PlaceOrder from './pages/PlaceOrder.tsx'
import Orders from './pages/Orders.tsx'
import Product from './pages/Product.tsx'
import Cart from './pages/Cart.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import Collections from './pages/Collections.tsx'

function App() {
 

  return (
    <div>
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/contact"  element={<Contact/>}/>
      <Route path="/create-account"  element={<Login/>}/>
      <Route path="/place-order"  element={<PlaceOrder/>}/>
      <Route path="/orders"  element={<Orders/>}/>
      <Route path="/products/:id"  element={<Product/>}/>
      <Route path="/cart"  element={<Cart/>}/>
      <Route path="/collection"  element={<Collections/>}/>
      <Route path="/*"  element={<ErrorPage/>}/>
    </Routes>
    </div>
  )
}

export default App
