import React, { Component } from 'react'
import SHOP_DATA from '../shop.data';
import Item from '../../components/Item/Item';
import './mens.scss'

export default class Mens extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shop: SHOP_DATA
        }
    }
    
  render() {
    return (
      <div className='mens'>
      <h3 className="title">MEN'S</h3>
      {this.state.shop[4].items.map((item) => <Item key={item.id} item={item}/>)}
      </div>
    )
  }
}
