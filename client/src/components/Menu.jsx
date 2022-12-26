import React from 'react'
import { Link } from 'react-router-dom'
import Posts from '../temporary/shortsPost'

const Menu = () => {
  return (
    Posts.map((post)=>(
      <div className='post' key={post.id}>
        <img src={post.img} alt=""/>
        <Link className='link' to={`/post/${post.id}`}>
          <h1>{post.title}</h1>
          <p>{post.desc}</p>
          <button>Ler mais</button>
        </Link>
      </div>
    ))
  )
}

export default Menu