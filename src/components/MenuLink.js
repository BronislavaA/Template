import React from 'react';

export default function MenuLink({link, name}) {
  return (
    <li className='menu-item'>
      <a className='menu-link' href={link}>{name}</a>
    </li>
  )
}