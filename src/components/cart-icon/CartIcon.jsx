import {ReactComponent as Cart}from '../../assets/shopping-bag.svg';
import './carticon.scss';
import React from 'react'
import { connect } from 'react-redux/es/exports';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({toggleCartHidden, itemCount}) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <Cart className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
  )
}

const mapStateToProps=state =>({
  itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps=dispatch=>({
  toggleCartHidden: ()=>dispatch(toggleCartHidden())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)