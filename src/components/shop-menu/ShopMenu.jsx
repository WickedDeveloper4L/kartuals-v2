import React from 'react'
import './shopMenu.scss'
import { Link } from 'react-router-dom'

const ShopMenu = ({linkUrl, imageUrl, title, intro}) => {
  return (
    <Link to={linkUrl} className='menu-item'>
        <div style={{backgroundImage: `url(${imageUrl})`}} className='background-image'></div>
        <div className="content">
        <h3 className="title">{title}</h3>
        <p className='subtitle'>{intro}</p>
        </div>
    </Link>
  )
}

export default ShopMenu