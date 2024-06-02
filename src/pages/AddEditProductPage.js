// src/pages/AddEditProductPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AddEditProductPage = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState({
    name: '',
    image: '',
    price: '',
    stock: ''
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/products/${id}`);
          setProductData(response.data);
          setIsEditMode(true);
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };
      fetchProduct();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditMode) {
        await axios.put(`http://localhost:3001/products/${id}`, productData);
      } else {
        await axios.post('http://localhost:3001/products', productData);
      }
      navigate('/shop');
    } catch (error) {
      console.error('Error saving product:', error);
      alert('Error saving product.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>{isEditMode ? 'Edit Product' : 'Add Product'} | AirsoftMunteanu</title>
      </Helmet>
      <div className="container mx-auto mt-20 flex justify-center items-center flex-grow">
        <section className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">{isEditMode ? 'Edit Product' : 'Add Product'}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-600">
                Product Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={productData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="image" className="block text-gray-600">
                Image URL:
              </label>
              <input
                type="text"
                id="image"
                name="image"
                value={productData.image}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="price" className="block text-gray-600">
                Price:
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={productData.price}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="stock" className="block text-gray-600">
                Stock:
              </label>
              <input
                type="number"
                id="stock"
                name="stock"
                value={productData.stock}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
              {isEditMode ? 'Update Product' : 'Add Product'}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddEditProductPage;
