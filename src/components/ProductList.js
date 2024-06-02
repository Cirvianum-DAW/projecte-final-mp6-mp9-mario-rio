import React, { useState, useEffect } from 'react';
import { getProducts } from '../api/api';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(data => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product.id} className="border p-4">
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p>${product.price}</p>
          <button className="bg-blue-500 text-white p-2 mt-2">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
