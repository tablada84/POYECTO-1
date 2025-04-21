import ItemContador from "../itemContador";
import ItemList from "../ItemList";
import React,{useState, useEffect} from "react";
import Title from "../Title";
import { useParams } from "react-router-dom";
const autos =[
  {
id:1, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzolJdgHgqraUidJCkI_pOJYNNBdqvFMSQ5A&s", categoria: "Mercedes Benz",
  
Marcas:"Mercedes Benz", precio:30000},
  {
id:2, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzolJdgHgqraUidJCkI_pOJYNNBdqvFMSQ5A&s", categoria: "Maserati",
Marcas:"Maserati", precio:700000 
},
  {
id:3, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzolJdgHgqraUidJCkI_pOJYNNBdqvFMSQ5A&s", categoria: "BMW",
Marcas:"BMW", precio:40000      
},
  {
id:4, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzolJdgHgqraUidJCkI_pOJYNNBdqvFMSQ5A&s", categoria: "Volvo",
Marcas:"Volvo",precio:200000
              },
]

export const ItemListContainer = ({texto}) => {

const [data, setData]=useState([]);

const {categoriaId}= useParams();

useEffect(()=>{
const getData = new Promise(resolve =>{
  setTimeout(()=>{
    resolve(autos)
  }, 2000)
})

if(categoriaId){
  getData.then(res=> setData(res.filter(auto=> auto.categoria === categoriaId)))
}else{
  getData.then(res => setData(res))
}



},[categoriaId])

const onAdd =(quantity)=>{
  console.log(`compraste ${quantity} unidades`)
}

  return (
    <>
  <Title greeting ={texto} />
 <ItemContador initial={1} stock={5} onAdd={onAdd} />
 <ItemList data={data}/>
  </>
  )
}

export default ItemListContainer;