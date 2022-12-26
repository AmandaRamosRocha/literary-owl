import React from 'react'
import OwlUser from '../img/owlUser.svg'
import {Link} from 'react-router-dom'
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
import Menu from '../components/Menu'
import Post from '../temporary/Post'

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img src={Post.img} alt=''/>
        <div className='user'>
          <img src={OwlUser} alt=''/>
          <div className='info'>
            <span>Buraqueira</span>
            <p>Postado 2 dias atrás</p>
          </div>
          <div className='edit'>
            <Link to={'/write?edit=2'} ><p><AiFillEdit/></p></Link>
            <p><AiFillDelete/></p>
          </div>
        </div> 
        <h1>{Post.title}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Gravida quis blandit turpis cursus in. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Vel facilisis volutpat est velit egestas dui. Turpis egestas sed tempus urna et pharetra. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Duis convallis convallis tellus id interdum. Id venenatis a condimentum vitae sapien pellentesque. Pellentesque nec nam aliquam sem et tortor. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Amet mauris commodo quis imperdiet massa.</p>
        <p>Magna etiam tempor orci eu lobortis elementum. Vitae auctor eu augue ut lectus arcu bibendum at. Interdum velit euismod in pellentesque massa placerat duis. Bibendum est ultricies integer quis auctor elit. Consectetur a erat nam at lectus urna duis convallis convallis. Tempor orci dapibus ultrices in. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. A arcu cursus vitae congue mauris rhoncus aenean vel. Amet venenatis urna cursus eget nunc. Maecenas pharetra convallis posuere morbi leo urna molestie at</p>
      </div>
      <Menu/>
    </div>
  )
}

export default Single