import React from 'react'
import Layout from './components/shared/Layout'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Product from './components/Product'
import Customers from './components/shared/Customers'
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Dashboard />} /> 
        <Route path="product" element={<Product />} /> 
        <Route path="customer" element={<Customers />} />
      </Route>
      <Route path="login" element={<div>this is login page</div>} /> 
    </Routes>
    </Router>
  )
} 

export default App