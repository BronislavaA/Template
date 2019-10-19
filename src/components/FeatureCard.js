import React from 'react';
import FeatureIcon from './FeatureIcon';
import FeatureBody from './FeatureBody';

export default function FeatureCard({icon, title, subtitle}) {
  return (
    <div className='feature-card'>
      <div className='row'>
        <div className='column col-2'>
          <FeatureIcon icon={icon} />
        </div>
        <div className='column col-10'>
          <FeatureBody
          title={title}
          subtitle={subtitle}
          />
        </div>
      </div>
    </div>
  )
}