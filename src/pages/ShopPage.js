import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ShopPage = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = async (product) => {
    if (!user) {
      alert('You must be logged in to add items to the cart.');
      return;
    }
    try {
      await axios.post('http://localhost:3001/orders', {
        user_id: user.id,
        product_id: product.id,
        quantity,
        total_price: product.price * quantity,
        date: new Date().toISOString()
      });
      alert('Item added to cart successfully.');
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Error adding to cart.');
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:3001/products/${productId}`);
      setProducts(products.filter((product) => product.id !== productId));
      alert('Product deleted successfully.');
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Error deleting product.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Shop | AirsoftMunteanu</title>
      </Helmet>
      <div className="container mx-auto mt-20 flex flex-col items-center flex-grow">
        <h1 className="text-3xl font-bold mb-8">Shop</h1>
        {user?.is_admin && (
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-full mb-8"
            onClick={() => navigate('/products/add')}
          >
            Add Product
          </button>
        )}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {products.map((product) => (
            <article key={product.id} className="bg-white p-4 rounded shadow-md flex flex-col">
              <div className="flex-grow mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              </div>
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-600">Price: ${product.price}</p>
              <p className="text-gray-600">Stock: {product.stock}</p>
              {user?.is_admin ? (
                <div className="flex justify-between mt-4">
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded"
                    onClick={() => navigate(`/products/edit/${product.id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </div>
              ) : (
                <div className="flex mt-4">
                  <input
                    type="number"
                    min="1"
                    max={product.stock}
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-16 p-2 border rounded mr-2"
                  />
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              )}
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ShopPage;
