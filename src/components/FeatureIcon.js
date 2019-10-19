import React from 'react';
import Icon from './Icon';

export default function FeatureIcon({icon}) {
  return (
    <div className='feature-icon'>
      <Icon name={icon} />
    </div>
  )
}