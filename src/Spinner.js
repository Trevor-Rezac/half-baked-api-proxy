import React from 'react';
import spinner from './simple_pokeball.gif';

export default function Spinner() {
  
  return (
    <div className='spinner'>
      <img src={`${spinner}`} />
    </div>
  );
}
