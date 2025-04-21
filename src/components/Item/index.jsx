import './Item.css'
import React from 'react'

 const Item = ({info}) => {
  return (
   <a href="" className='autos'>
    <img src={info.image} alt="" />
    <p>{info.Marcas}</p>
    <p>${info.precio}</p>
   </a>
  )
}
export default Item;