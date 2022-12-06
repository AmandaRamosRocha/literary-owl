import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../img/logo.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
            <div className='logo'><img src={Logo} alt="" /></div>
            <div className='links'>
              <Link className='link' to='/?cat=terror' ><h6>Terror</h6></Link>
              <Link className='link' to='/?cat=romance'><h6>Romance</h6></Link>
              <Link className='link'to='/?cat=fantasia'><h6>Fantasia</h6></Link>
              <span>Usuário</span>
              <span>Logout</span>
              <Link className='link' to='/write'>Write</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar