import React from 'react';

export default function Pokemon({ pokemon }) {
  return (
    <div className='poke-item'>
      <h4>{pokemon.pokemon}</h4>
      <img src={`${pokemon.url_image}`}/>
    </div>
  );
}
