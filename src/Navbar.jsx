import React from 'react'
import { Link } from 'react-router-dom'
 
function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="nav navbar-nav">
         <Link className="nav-item nav-link" to='/expert'>Experts List</Link>
         <Link className="nav-item nav-link" to='/evenement'>Event List</Link>
         <Link className='nav-item nav-link' to='/formulaire'>Formulaire</Link>
      </div>
    </nav>
    
  )
}
 
export default Navbar
 