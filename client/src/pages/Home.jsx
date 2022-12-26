import React from 'react'
import { Link } from 'react-router-dom'
import Posts from '../temporary/shortsPost'

const Home = () => {
  return (
    
    <div className='home'>
      <div className='posts'>
        {Posts.map((post)=>(
          <div className='post' key={post.id}>
            <div className='img'><img src={post.img} alt=""/></div>
            <div className='content'>
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
                <button>Ler mais</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home