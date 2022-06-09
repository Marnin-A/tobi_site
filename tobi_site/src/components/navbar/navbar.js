import React from 'react'
import navbarcss from './navbar.module.css'

const Navbar = () => {
  return (
    <nav className={`${navbarcss.nav}`}>
      <a href="/"><button className={`${navbarcss.navbtn}`}>Home</button></a>
      <a href="/products"><button className={`${navbarcss.navbtn}`}>Products</button></a>
    </nav>
  )
}

export default Navbar