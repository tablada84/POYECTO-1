import Item from '../Item'
import React from 'react'


const ItemList = ({data =[]}) => {
  return (
 data.map(autos => <Item key= {autos.id} info={autos} />)
  )
}

export default ItemList;