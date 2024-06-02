import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';
import { AuthContext } from '../AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="bg-gray-800 text-white py-4 fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              <h1 className="text-white text-lg font-bold">AirsoftMunteanu</h1>
              <img
                src="https://via.placeholder.com/32"
                alt="Logo"
                className="w-8 h-8 ml-2 transition-transform transform hover:scale-110 hover:rotate-12"
              />
            </Link>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="relative z-50 w-8 h-8 flex flex-col justify-between">
              <span className={`block w-8 h-1 bg-white transition-transform ${menuOpen ? 'transform rotate-45 translate-y-2.5' : ''}`} />
              <span className={`block w-8 h-1 bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-8 h-1 bg-white transition-transform ${menuOpen ? 'transform -rotate-45 -translate-y-2.5' : ''}`} />
            </button>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/" className="text-white">Home</Link>
            <Link to="/shop" className="text-white">Shop</Link>
            <Link to="/events" className="text-white">Events</Link>
            <Link to="/about" className="text-white">About</Link>
            <Link to="/policies" className="text-white">Policies</Link>
            <Link to="/contact" className="text-white">Contact</Link>
            {user ? (
              <>
                <Link to="/profile" className="text-green-500">{user.username}</Link>
                <button onClick={logout} className="text-red-500">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-blue-500">Login</Link>
                <Link to="/register" className="text-green-500">Register</Link>
              </>
            )}
          </div>
        </div>
      </nav>
      <div className={`fixed top-0 right-0 w-64 h-full bg-gray-800 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 z-40`}>
        <div className="flex justify-end p-4">
          <FaTimes className="text-white w-6 h-6 cursor-pointer" onClick={toggleMenu} />
        </div>
        <div className="flex flex-col items-start p-4 space-y-4">
          <Link to="/" className="text-white" onClick={toggleMenu}>Home</Link>
          <Link to="/shop" className="text-white" onClick={toggleMenu}>Shop</Link>
          <Link to="/events" className="text-white" onClick={toggleMenu}>Events</Link>
          <Link to="/about" className="text-white" onClick={toggleMenu}>About</Link>
          <Link to="/policies" className="text-white" onClick={toggleMenu}>Policies</Link>
          <Link to="/contact" className="text-white" onClick={toggleMenu}>Contact</Link>
          {user ? (
            <>
              <Link to="/profile" className="text-green-500" onClick={toggleMenu}>{user.username}</Link>
              <button onClick={() => { logout(); toggleMenu(); }} className="text-red-500">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-blue-500" onClick={toggleMenu}>Login</Link>
              <Link to="/register" className="text-green-500" onClick={toggleMenu}>Register</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
