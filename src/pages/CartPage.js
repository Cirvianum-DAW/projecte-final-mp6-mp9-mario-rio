import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import { Helmet } from 'react-helmet';

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/orders?user_id=${user.id}`);
        setCart(response.data);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    if (user) {
      fetchCart();
    }
  }, [user]);

  const handlePurchase = async () => {
    try {
      // Add logic to handle purchase, for now, we will just clear the cart
      setCart([]);
      alert('Purchase successful');
    } catch (error) {
      console.error('Error completing purchase:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Cart | AirsoftMunteanu</title>
      </Helmet>
      <div className="container mx-auto mt-20 flex flex-col items-center flex-grow">
        <h1 className="text-3xl font-bold mb-8">Cart</h1>
        <section className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">My Cart</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="mb-4">
                <p><strong>Product ID:</strong> {item.product_id}</p>
                <p><strong>Quantity:</strong> {item.quantity}</p>
                <p><strong>Total Price:</strong> ${item.total_price}</p>
                <p><strong>Date:</strong> {new Date(item.date).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
          {cart.length > 0 && (
            <button className="bg-green-500 text-white p-2 rounded mt-4" onClick={handlePurchase}>
              Purchase
            </button>
          )}
        </section>
      </div>
    </div>
  );
};

export default CartPage;
