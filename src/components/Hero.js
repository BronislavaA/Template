import React from 'react';
import Button from './Button'

export default function Hero({title, subtitle}) {

  return (
    <section id='home'>
      <div className='container'>
        <div className='columns align-center justify-center'>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <Button type='button' link='#about' name='Learn More' />
        </div>
      </div>
    </section>
  )
}