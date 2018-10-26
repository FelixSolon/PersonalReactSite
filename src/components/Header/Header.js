import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      I'm a header!
      <Link to="/">Home</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Header
