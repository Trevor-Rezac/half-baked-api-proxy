import React from 'react';
import Pokemon from './Pokemon';

export default function PokemonList({ pokemon }) {
  
  return (
    <>
      <h3>PokemonList</h3>
      {pokemon.map((pokemon, i) => <Pokemon key={`${pokemon}-${i}`} pokemon={pokemon}/>)}
    </>
  );
}
