import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';
import EventPage from './pages/EventPage';
import AboutPage from './pages/AboutPage';
import PoliciesPage from './pages/PoliciesPage';
import ContactPage from './pages/ContactPage';
import ProfilePage from './pages/ProfilePage';
import AddEditEventPage from './pages/AddEditEventPage';
import UserManagementPage from './pages/UserManagementPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/events" element={<EventPage />} />
              <Route path="/events/add" element={<AddEditEventPage />} />
              <Route path="/events/edit/:id" element={<AddEditEventPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/policies" element={<PoliciesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/manage-users" element={<UserManagementPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
