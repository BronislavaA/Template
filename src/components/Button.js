import React from 'react';

export default function Button({link, type, name}) {
  return (
    <a className='button' type={type} href={link}>{name}</a>
  )
}