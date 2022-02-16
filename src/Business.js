import React from 'react';

export default function Business({ business }) {
  return (
    <div className='business'>
      <h3>{business.name}</h3>
      <p>Rating: {business.rating}</p>
      <p>Category: {business.categories[0].title}</p>
      <img src={`${business.image_url}`} />
    </div>
  );
}
