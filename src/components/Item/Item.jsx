import React from 'react'
import './item.scss'
import CustomButton from '../custom-button/CustomButton'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'

const Item = ({ item, addItem}) => {
  const {imageUrl, name, price} = item
  return (
    <div className="collection-item">
        <div className='image' style={{backgroundImage: `url(${imageUrl})`}}>
        </div>
        <div className='collection-footer'>
            <span className="name">{name}</span>
            <span className="price">{`${"$"}${price}`}</span>
        </div>
        <CustomButton item onClick={()=> addItem(item)} >Add to Cart</CustomButton>
    </div>
  )
}

const mapDispatchToProps = dispatch =>({
  addItem: item=> dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(Item)