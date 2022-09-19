import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'
import { auth } from '../firebase/firebase.utils'
import { connect } from 'react-redux'
import CartDropdown from '../cart-dropdown/CartDropdown'
import CartIcon from '../cart-icon/CartIcon'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'

const Header = ({currentUser, hidden}) => {
  return (
    <div className='header'>
    <Link to='/' className='logo'>
      <Logo className="chips"/>
      <h1 className="name">kartuals</h1>
    </Link>
    <div className='links'>
        <Link className="header_links" to='/shop'>SHOP</Link>
        <Link className="header_links" to='/contact'>CONTACT</Link>

        {currentUser ? 
          <div className='header_links' onClick={() => auth.signOut()}>LOG OUT</div> :
          <Link className="header_links" to='/userAuth'>LOG IN</Link>
        }
        <CartIcon/>
        
        {hidden ? null : <CartDropdown/>}
    </div>
    </div>
  )

  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)