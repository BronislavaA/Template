import React from 'react';
import Copyright from './Copyright'

export default function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='columns justify-center'>
          <Copyright
          text='Copyright © All rights reserved'
          />
        </div>
      </div>
    </footer>
  )
}