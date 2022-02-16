import React from 'react';
import Business from './Business';

export default function BusinessList({ businesses }) {
  return (
    <>
      <div>Business List</div>
      {businesses.map((business, i) => <Business key={`${business}-${i}`} business={business} />)}
    </>
  );
}
