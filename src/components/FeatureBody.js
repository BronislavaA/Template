import React from 'react';

export default function FeatureBody({title, subtitle}) {
  return (
    <div className='feature-body'>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  )
}