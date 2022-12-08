import React from 'react'
import OwlUser from '../img/owlUser.svg'
import Edit from '../img/edit.svg'

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img src='https://img.freepik.com/fotos-gratis/livro-aberto-com-fundo-branco_23-2148882765.jpg' alt=''/>
        <div className='user'>
          <img src={OwlUser} alt=''/>
          <div className='info'>
            <span>Buraqueira</span>
            <p>Postado 2 dias atrás</p>
          </div>
          <div className='edit'>
            <link to={'/write?edit=2'}>
              <img src={Edit} alt="" />
            </link>
          </div>
        </div> 
      </div>
      <div className='menu'>m</div>
    </div>
  )
}

export default Single