import React,{useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail'



const autos=  {
    id:1, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzolJdgHgqraUidJCkI_pOJYNNBdqvFMSQ5A&s",
    Marcas:"audi", precio:40000      
    };

export const ItemDetailContainer = () => {
    const [data, setData]=useState({})

    useEffect(()=>{
    const getData = new Promise(resolve =>{
      setTimeout(()=>{
        resolve(autos)
      }, 3000)
    })
    getData.then(res => setData(res))
    
    },[])

  return (
   <ItemDetail data={data} />
  )
}
export default ItemDetailContainer