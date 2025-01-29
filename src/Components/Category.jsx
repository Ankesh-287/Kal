import React from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
  const { category } = useParams();

  const products = {
    men: [
      { id: 1, name: 'Men T-Shirt', price: 20 },
      { id: 2, name: 'Men Jacket', price: 50 },
    ],
    women: [
      { id: 3, name: 'Women Dress', price: 30 },
      { id: 4, name: 'Women Scarf', price: 15 },
    ],
  };

  return (
    <div>
      <h2>Category: {category}</h2>
      <div>
        {products[category] ? (
          products[category].map((product) => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Category;