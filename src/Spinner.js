import React from 'react';
import spinner from './simple_pokeball.gif';

export default function Spinner() {
  console.log('||', spinner);
  return (
    <div>
      <img src={`${spinner}`} />
    </div>
  );
}
