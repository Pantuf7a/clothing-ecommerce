import React from 'react'
import { Link } from 'react-router-dom';
import './Header.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

export const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/" className="logo__container">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/shop" className="option">
          CONTACT
        </Link>
        {
          currentUser ? 
            <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
            :
            <Link to="/signin" className="option">SIGN IN</Link>
          
        }
      </div>
    </div>
  )
}
