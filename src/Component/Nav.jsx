import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div> <nav className='navbar'>
    <div><h1>Geekster</h1></div>
    <div><Link to={'/'}>Home</Link>
    <Link to={'/Contact'}>Contact</Link>
    <Link to={'/Service'}>Service</Link>
    </div>
</nav></div>
  )
}

export default Nav