import React from 'react'
import './CustomButton.scss'

export const CustomButton = ({ children, ...otherProps}) => {
  return (
    <button className="custom__button" {...otherProps}>
      {children}
    </button>
  )
}
