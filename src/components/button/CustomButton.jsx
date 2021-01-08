import React from 'react'
import './CustomButton.scss'

export const CustomButton = ({ children, isGoogleSignIn, ...otherProps}) => {
  return (
    <button className={`${isGoogleSignIn ? 'google__signIn' : ''} custom__button`} {...otherProps}>
      {children}
    </button>
  )
}
