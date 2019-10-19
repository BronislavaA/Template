import React from 'react';

export default function TeamTitle({fullname, position}) {
  return (
    <div className='card-title'>
      <h5 className='member-name'>{fullname}</h5>
      <p className='member-position'>{position}</p>
    </div>
  )
}