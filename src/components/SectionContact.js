import React from 'react';
import ContactForm from './ContactForm';

export default function SectionContact({title, subtitle}) {
  return (
    <section id='contact'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1>{title}</h1>
            <hr></hr>
            <p className='description'>{subtitle}</p>
          </div>
        </div>
        <div className='row justify-center'>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}