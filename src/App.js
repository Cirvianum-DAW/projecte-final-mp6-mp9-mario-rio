import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import EventPage from './pages/EventPage';
import AddEditEventPage from './pages/AddEditEventPage';
import ShopPage from './pages/ShopPage';
import AddEditProductPage from './pages/AddEditProductPage';
import CartPage from './pages/CartPage';
import UserManagementPage from './pages/UserManagementPage';
import AboutPage from './pages/AboutPage';
import PoliciesPage from './pages/PoliciesPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer'; 
import { AuthProvider } from './AuthContext';
import './styles/tailwind.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/events" element={<EventPage />} />
              <Route path="/events/add" element={<AddEditEventPage />} />
              <Route path="/events/edit/:id" element={<AddEditEventPage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/products/add" element={<AddEditProductPage />} />
              <Route path="/products/edit/:id" element={<AddEditProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/user-management" element={<UserManagementPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/policies" element={<PoliciesPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
