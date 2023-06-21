import React from 'react';
import { useParams } from 'react-router-dom';

const BuyPage = () => {
  const { name } = useParams();

  return (
    <div>
      <h2>Buy Page</h2>
      <p>Product Name: {name}</p>
      {/* Add the content for the Buy page */}
    </div>
  );
};

export default BuyPage;
