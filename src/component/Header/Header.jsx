import React from 'react';
import { BsCart, BsHeart } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import logo from '../../assets/images/logo';


import "./Header.css";

export const Header = () => {
  return (
    <div className='headerContainer'>
      <div className='headerLeft'>
      <img className='logo' src={logo} alt="" />
    <div>
      <p className='headerLeftLogoFont'> REACT SNEAKERS</p>
      <p className='headerText'> Магазин лучших кроссовок</p>
    </div>
    </div>
    <div className='headerRight'>
      <span>
        <BsCart/>
      </span>
      <span className='sena'>1205 руб.</span>
      <span>
        <BsHeart/>
      </span>
      <span>
        <BiUserCircle/>
      </span>
    </div>
    </div>
    
  )
}

