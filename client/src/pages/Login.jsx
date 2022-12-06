import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
        <h1>Login</h1>
        <form >
            <input required type="text" placeholder='Nome de usuário' />
            <input required type="password" placeholder='Senha' />
            <button>Login</button>
            <p>Isto é um erro</p>
            <span>Ainda não tem uma conta? <Link to='/register'>Registre-se</Link> </span>
        </form>
    </div>
  )
}

export default Login