import React from 'react'
import './cartItem.scss'

const Cartitem = ({item}) => {
  const {imageUrl, name, price, quantity} = item

  return (
    <div className='cart-item'>
        <img src={imageUrl} alt="item" />
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">{quantity} x ${price}</span>
        </div>
    </div>
  )
}

export default Cartitem