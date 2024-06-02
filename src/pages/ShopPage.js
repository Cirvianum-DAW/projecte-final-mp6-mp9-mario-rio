import React from 'react';
import { Helmet } from 'react-helmet';
import ProductList from '../components/ProductList';

const ShopPage = () => {
  return (
    <div className="p-4">
      <Helmet>
        <title>AirsoftMunteanu | Shop</title>
      </Helmet>
      <h1 className="text-2xl font-bold">Shop</h1>
      <ProductList />
    </div>
  );
};

export default ShopPage;
