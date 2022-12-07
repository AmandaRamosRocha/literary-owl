import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const posts = [
    {
      id:1,
      title: 'Lorem ipsum dolor sit amet',
      desc: 'Lorem ipsum dolor sit amet. Est officia officia qui laborum corrupti sit voluptatibus galisum qui velit consequatur? Non voluptatem cumque est neque Quis qui itaque ipsa et quam quidem ab laborum corrupti',
      img: 'https://img.freepik.com/fotos-gratis/livro-aberto-com-fundo-branco_23-2148882765.jpg',
    },
    {
      id:2,
      title: 'Lorem ipsum dolor sit amet',
      desc: 'Lorem ipsum dolor sit amet. Est officia officia qui laborum corrupti sit voluptatibus galisum qui velit consequatur? Non voluptatem cumque est neque Quis qui itaque ipsa et quam quidem ab laborum corrupti',
      img: 'https://img.freepik.com/fotos-gratis/livro-aberto-com-fundo-branco_23-2148882765.jpg',
    },
    {
      id:3,
      title: 'Lorem ipsum dolor sit amet',
      desc: 'Lorem ipsum dolor sit amet. Est officia officia qui laborum corrupti sit voluptatibus galisum qui velit consequatur? Non voluptatem cumque est neque Quis qui itaque ipsa et quam quidem ab laborum corrupti',
      img: 'https://img.freepik.com/fotos-gratis/livro-aberto-com-fundo-branco_23-2148882765.jpg',
    },
    {
      id:4,
      title: 'Lorem ipsum dolor sit amet',
      desc: 'Lorem ipsum dolor sit amet. Est officia officia qui laborum corrupti sit voluptatibus galisum qui velit consequatur? Non voluptatem cumque est neque Quis qui itaque ipsa et quam quidem ab laborum corrupti',
      img: 'https://img.freepik.com/fotos-gratis/livro-aberto-com-fundo-branco_23-2148882765.jpg',
    },
  ]


  return (
    
    <div className='home'>
      <div className='posts'>
        {posts.map((post)=>(
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