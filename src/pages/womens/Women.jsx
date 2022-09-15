import React, { Component } from 'react'
import SHOP_DATA from '../shop.data';
import Item from '../../components/Item/Item';
import './women.scss'

export default class Women extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shop: SHOP_DATA
        }
    }
    
  render() {
    return (
      <div className='womens'>
      <h3 className="title">WOMEN'S</h3>
      {this.state.shop[3].items.map((item) => <Item key={item.id} item={item}/>)}
      </div>
    )
  }
}
