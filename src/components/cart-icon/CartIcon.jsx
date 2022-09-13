import {ReactComponent as Cart}from '../../assets/shopping-bag.svg';
import './carticon.scss';
import React from 'react'
import { connect } from 'react-redux/es/exports';
import toggleCartHidden from '../../redux/cart/cart.actions'; 

const CartIcon = ({toggleCartHidden}) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <Cart className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
  )
}
const mapDispatchToProps=dispatch=>({
  toggleCartHidden: ()=>dispatch(toggleCartHidden())
})
export default connect(null, mapDispatchToProps)(CartIcon)