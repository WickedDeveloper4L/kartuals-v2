import React from 'react'
import './checkout.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'


const Checkout = ({cartItems, total}) => {
  return (
    <div className='checkout-page'>
        <h1 className="title">COMPLETE ORDER</h1>
        <div className='checkout-items'>
            {cartItems.map(cartItem => <CheckoutItem cartItem={cartItem} key={cartItem.id}/>)}
        </div>
        <div className='total'>TOTAL: ${total}</div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})


export default connect(mapStateToProps)(Checkout)