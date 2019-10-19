import React from 'react';

export default function LabeledInput({label, type}) {
  return (
    <div className='labeled-input'>
      <div className='columns justify-start'>
        <label>{label}</label>
        <input type={type}></input>
      </div>
    </div>
  )
}