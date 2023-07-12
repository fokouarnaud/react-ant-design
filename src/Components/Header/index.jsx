import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
        <Link to="/">Acceuil</Link>
        <Link to="/todo">Todo</Link>
    </nav>
  )
}

export default Header