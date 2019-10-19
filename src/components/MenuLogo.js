import React from 'react';

export default function MenuLogo ({link, logo}) {
  return (
    <a className='logo' href={link}>
      <img src={logo} alt="logo"/>
      Company
    </a>
  )
}