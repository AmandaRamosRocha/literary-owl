import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.svg'

const Register = () => {
  return (
    <div className='auth'>
        <h1>Registre-se</h1>
        <form >
            <input required type="text" placeholder='Nome de usuário' />
            <input required type="text" placeholder='E-mail' />
            <input required type="password" placeholder='Senha' />
            <input required type="password" placeholder='Confirme a senha' />
            <button>Registrar</button>
            <p>Isto é um erro</p>
            <span>Já tem uma conta? <Link to='/login'>Login</Link> </span>
            <div className='logo'><img src={Logo} alt="" /></div>
        </form>
    </div>
  )
}

export default Register