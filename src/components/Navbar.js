import React from 'react';
import logo from '../assets/images/logo.svg';
import Menu from './Menu';
import MenuLogo from './MenuLogo';


export default function Navbar ({style}) {
  
  return (
    <nav id='navigation' style={style}>
      <MenuLogo link='index.html' logo={logo} />
      <Menu />
    </nav>
  )
}
