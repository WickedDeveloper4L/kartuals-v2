import React, { Component } from 'react'
import ShopMenu from '../../components/shop-menu/ShopMenu';

export default class Shop extends Component {
  constructor() {
    super();
    this.state = {
      section: [
        {
          title: 'HATS',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/hats',
          intro: "check out our Amazing collection of hats for your everyday styles, that's why we are here for !",
          shopSection: 'hats'
        },
        {
          title: 'JACKETS',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets',
          intro: "view our Jacket collection with variety of styles, you can never go wrong with Kartuals!",
          shopSection: 'jackets'

        },
        {
          title: 'SHOES',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/shoes',
          intro: "from sport to casuals, from formal to sneakers, we got the sole that holds your shoe tastes!",
          shopSection: 'sneakers'
        },
        {
          title: "WOMEN'S",
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens',
          intro: "Is there anything like that cute feminine look? check out our vast store now!",
          shopSection: 'womens'

        },
        {
          title: "MEN'S",
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens',
          intro: "No long talks needed, Just for MEN!",
          shopSection: 'mens'

        }
      ]
    }
  }
  
  render() {
    return (
      <div>
      {this.state.section.map(({id, ...otherSectionProps})=> 
        <ShopMenu key={id} {...otherSectionProps}/>
      )}
      </div>
    )
  }
}
