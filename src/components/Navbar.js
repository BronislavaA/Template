import React from 'react';
import logo from '../assets/images/logo.svg';
import Menu from './Menu';
import MenuLogo from './MenuLogo';

export default function Navbar () {
  return (
    <nav id='navigation'>
      <MenuLogo link='index.html' logo={logo} />
      <Menu />
    </nav>
  )
}