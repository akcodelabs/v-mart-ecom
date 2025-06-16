import { useState } from 'react'

import './App.css'
import ProductCardList from './Componets/Products'

function App() {
  

  return (
    <>
     <div className="App">
      <h1 style={{textAlign:"center"}}>V-Mart Products</h1>
      <ProductCardList/>
     </div> 
    </>
  )
}

export default App
