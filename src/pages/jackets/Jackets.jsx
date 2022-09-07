import React, { Component } from 'react'
import SHOP_DATA from '../shop.data';
import Item from '../../components/Item/Item';
import './jackets.scss'

export default class Jackets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shop: SHOP_DATA
        }
    }
    
  render() {
    return (
      <div className='jackets'>
      <h3 className="title">JACKETS</h3>
      {this.state.shop[2].items.map(({id, ...otherProps}) => <Item key={id} {...otherProps}/>)}
      </div>
    )
  }
}
