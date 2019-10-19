import React from 'react';
import FeatureCard from './FeatureCard';
import { loremIpsum } from 'react-lorem-ipsum';

export default function SectionFeature({title, subtitle}) {
  return (
    <section id='feature'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1>{title}</h1>
            <hr></hr>
            <p>{subtitle}</p>
          </div>
        </div>
        <div className='row'>
          <div className='col col-6'>
            <FeatureCard
            icon='house'
            title='Title'
            subtitle={loremIpsum({ avgSentencesPerParagraph: 2 })}
            />
          </div>
          <div className='col col-6'>
            <FeatureCard
            icon='house'
            title='Title'
            subtitle={loremIpsum({ avgSentencesPerParagraph: 2 })}
            />
          </div>
          <div className='col col-6'>
            <FeatureCard
            icon='house'
            title='Title'
            subtitle={loremIpsum({ avgSentencesPerParagraph: 2 })}
            />
          </div>
          <div className='col col-6'>
            <FeatureCard
            icon='house'
            title='Title'
            subtitle={loremIpsum({ avgSentencesPerParagraph: 2 })}
            />
          </div>
        </div>
      </div>
    </section>
  )
}