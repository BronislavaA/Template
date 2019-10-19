import React from 'react';

export default function LabeledArea({label, type}) {
  return (
    <div className='labeled-input'>
      <div className='columns justify-start'>
        <label>{label}</label>
        <textarea type={type}></textarea>
      </div>
    </div>
  )
}