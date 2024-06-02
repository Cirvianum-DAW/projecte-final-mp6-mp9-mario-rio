import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import { Helmet } from 'react-helmet';

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [flashMessage, setFlashMessage] = useState('');
  const { user } = useContext(AuthContext);

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

  const handleAddToCart = async (productId, quantity) => {
    if (!user) {
      setFlashMessage('You need to log in to add products to the cart.');
      setTimeout(() => setFlashMessage(''), 3000);
      return;
    }

    try {
      const response = await axios.get('http://localhost:3001/orders');
      const orders = response.data;
      const newOrderId = orders.length > 0 ? Math.max(...orders.map(order => order.id)) + 1 : 1;

      await axios.post('http://localhost:3001/orders', {
        id: newOrderId,
        user_id: user.id,
        product_id: productId,
        quantity,
        total_price: products.find(product => product.id === productId).price * quantity,
        date: new Date().toISOString()
      });

      setFlashMessage('Product added to cart successfully.');
      setTimeout(() => setFlashMessage(''), 3000);
    } catch (error) {
      console.error('Error adding to cart:', error);
      setFlashMessage('Error adding to cart.');
      setTimeout(() => setFlashMessage(''), 3000);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Shop | AirsoftMunteanu</title>
      </Helmet>
      <div className="container mx-auto mt-20 flex flex-col items-center flex-grow">
        <h1 className="text-3xl font-bold mb-8">Shop</h1>
        {flashMessage && <div className="bg-red-500 text-white p-2 rounded mb-4">{flashMessage}</div>}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {products.map((product) => (
            <article key={product.id} className="bg-white p-4 rounded shadow-md flex flex-col">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-600">Price: ${product.price}</p>
              <p className="text-gray-600">Stock: {product.stock}</p>
              <div className="mt-4">
                <input
                  type="number"
                  min="1"
                  max={product.stock}
                  defaultValue="1"
                  className="w-full p-2 border rounded"
                  id={`quantity-${product.id}`}
                />
                <button
                  className="bg-blue-500 text-white px-6 py-3 rounded-full mt-4"
                  onClick={() =>
                    handleAddToCart(
                      product.id,
                      parseInt(document.getElementById(`quantity-${product.id}`).value)
                    )
                  }
                >
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ShopPage;
