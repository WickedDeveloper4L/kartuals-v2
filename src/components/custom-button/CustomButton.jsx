import React from 'react'
import './button.styles.scss'

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => {
  return (
    <button {...otherProps} className={`${isGoogleSignIn ? 'google-sign-in' : ''} item custom-button`}>
    {children}
    </button>
  )
}

export default CustomButton