import React from 'react';
import LabeledInput from './LabeledInput';
import LabeledArea from './LabeledArea';

export default function ContactForm() {
  return (
    <form className='contact-form col col-8'>
      <div className='row'>
        <div className='col col-6'>
          <LabeledInput
          label='Your Name'
          type='text'
          />
        </div>
        <div className='col col-6'>
          <LabeledInput
          label='Your Email'
          type='email'
          />    
        </div>
        <div className='col col-12'>
          <LabeledArea
          label='Your Message'
          type='text'
          />
        </div>
      </div>
      <div className='columns align-end'>
        <div className='submit-button'>
          <button type='submit'>Send</button>
        </div>
      </div>
    </form>
  )
}