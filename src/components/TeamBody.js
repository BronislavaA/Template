import React from 'react';

export default function TeamBody({description}) {
  return (
    <div className='card-body'>
      <p className='description'>{description}</p>
    </div>
  )
}