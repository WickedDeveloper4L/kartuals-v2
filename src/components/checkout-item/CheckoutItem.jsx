import React from 'react'
import CustomButton from '../custom-button/CustomButton'
import './checkoutitem.scss'
import { connect } from 'react-redux/es/exports'
import { clearCartItem } from '../../redux/cart/cart.actions'

const CheckoutItem = ({cartItem, clearItem}) => {

    const {imageUrl, name, price, quantity} = cartItem
  return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt="ItemImage" />
        </div>
        <span className="description">{name}</span>
        <div className='controls'>
            <span className='price'>${price}</span>
            <span className='quantity'>{quantity}</span>
        </div>
        <CustomButton className='button' onClick={() => clearItem(cartItem)}>Remove</CustomButton>
    </div>
  )
}

const mapDispatchToProps = dispatch =>({
    clearItem: item => dispatch(clearCartItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)