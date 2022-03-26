import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllProducts from '../pages/AllProducts'
import Home from '../pages/Home'
import Product from '../pages/Product'

function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/products' element={<AllProducts/>} > </Route>
      <Route path='/products/:id' element={<Product/>}> </Route>
      <Route path='*' element={<div>Route Not Found</div>}/>
    </Routes>
  )
}

export default AllRoutes