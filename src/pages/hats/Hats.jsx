import React, { Component } from 'react'
import SHOP_DATA from '../shop.data';
import Item from '../../components/Item/Item';
import './hats.scss'

export default class Hats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shop: SHOP_DATA
        }
    }
    
  render() {
    return (
      <div className='hats'>
      <h3 className="title">HATS</h3>
      {this.state.shop[0].items.map(({id, ...otherProps}) => <Item key={id} {...otherProps}/>)}
      </div>
    )
  }
}
