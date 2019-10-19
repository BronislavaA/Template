import React from 'react';
import { loremIpsum } from 'react-lorem-ipsum'

export default function SectionTestimonials({title}) {
  return (
    <section id='testimonials'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1>{title}</h1>
            <p className='description'>{loremIpsum({ avgSentencesPerParagraph: 4 })}</p>
          </div>
        </div>
      </div>
    </section>
  )
}