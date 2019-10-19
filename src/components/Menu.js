import React from 'react';
import MenuLink from './MenuLink'

export default function Menu() {
  return (
    <ul className='menu'>
      <MenuLink
      link='index.html'
      name='Home'
      />
      <MenuLink
      link='#about'
      name='About'
      />
      <MenuLink
      link='#features'
      name='Features'
      />
      <MenuLink
      link='#contact'
      name='Contact'
      />
    </ul>
  )
}