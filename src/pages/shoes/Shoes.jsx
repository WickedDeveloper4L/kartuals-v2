import React, { Component } from 'react'
import SHOP_DATA from '../shop.data';
import Item from '../../components/Item/Item';
import './shoe.scss'

export default class Shoes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shop: SHOP_DATA
        }
    }
    
  render() {
    return (
      <div className='shoes'>
      <h3 className="title">SHOES</h3>
      {this.state.shop[1].items.map(({id, ...otherProps}) => <Item key={id} {...otherProps}/>)}
      </div>
    )
  }
}
