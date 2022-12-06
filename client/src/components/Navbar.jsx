import React from 'react'
import Logo from '../img/logo.svg'
import '../img/owl.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
            <div className='logo'><img src={Logo} alt="" /></div>
            <div className='links'>Links</div>
        </div>
    </div>
  )
}

export default Navbar