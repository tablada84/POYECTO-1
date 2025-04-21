
import './contador.css'
import React ,{useEffect, useState} from 'react'




export const ItemContador = ({initial, stock, onAdd}) => {

const [count, setCount]= useState(parseInt(initial));

const sumar = ()=>{
  setCount(count + 1)
}
const restar = ()=>{
  setCount(count - 1)
}
useEffect(()=>{
  setCount(parseInt(initial))
}, [initial])

  return (
    <div className='contador'>
        <button disabled ={count >= stock} onClick={sumar}>+</button>
        <span>{count}</span>
        <button disabled ={count <= 1} onClick={restar}>-</button>
        <div>
            <button disabled = {stock <= 0} onClick={()=> onAdd(count)}>Comprar</button>
        </div>
    </div>
  )
}

export default ItemContador