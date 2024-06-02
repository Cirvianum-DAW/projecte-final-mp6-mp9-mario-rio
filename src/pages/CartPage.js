// src/pages/CartPage.js
import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import { Helmet } from 'react-helmet';

const CartPage = () => {
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/orders?user_id=${user.id}`);
        setCartItems(response.data);
        calculateTotalPrice(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    if (user) {
      fetchCartItems();
    }
  }, [user]);

  const calculateTotalPrice = (items) => {
    const total = items.reduce((acc, item) => acc + item.total_price, 0);
    setTotalPrice(total);
  };

  const handleRemoveFromCart = async (orderId) => {
    try {
      await axios.delete(`http://localhost:3001/orders/${orderId}`);
      setCartItems(cartItems.filter((item) => item.id !== orderId));
      calculateTotalPrice(cartItems.filter((item) => item.id !== orderId));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const handleBuy = async () => {
    try {
      // Empty the cart after purchase
      const promises = cartItems.map((item) =>
        axios.delete(`http://localhost:3001/orders/${item.id}`)
      );
      await Promise.all(promises);
      setCartItems([]);
      setTotalPrice(0);
      alert('Purchase successful!');
    } catch (error) {
      console.error('Error processing purchase:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Cart | AirsoftMunteanu</title>
      </Helmet>
      <div className="container mx-auto mt-20 flex flex-col items-center flex-grow">
        <section className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="mb-4">
                <p><strong>Product ID:</strong> {item.product_id}</p>
                <p><strong>Quantity:</strong> {item.quantity}</p>
                <p><strong>Total Price:</strong> ${item.total_price}</p>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded mt-2"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p><strong>Total Price:</strong> ${totalPrice}</p>
            <button
              className="bg-blue-500 text-white px-6 py-3 rounded-full mt-4"
              onClick={handleBuy}
            >
              Buy Now
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CartPage;
