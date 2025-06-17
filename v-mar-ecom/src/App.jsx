import { useState } from 'react'

import './App.css'
import ProductCardList from './Componets/Products'

function App() {
  

  return (
    <>
     <div className="App">
      <h1 style={{textAlign:"center",color:"#050b1a",fontFamily:"Poppins,san-serif",fontWeight: 700}}>Featured Products</h1>
      <p style={{textAlign:"center",color:"#8e9399",fontFamily:"Poppins, algeria"}}>Discover our handpicked selection of freshest vegetables,sourced directly from local farms</p>
      <ProductCardList/>
     </div> 
    </>
  )
}

export default App
