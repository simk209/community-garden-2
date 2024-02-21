import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'

function HomePage() {
  return (
    <div className='container'>
      <h1>Welcome to our Community Garden! </h1>
      <p>Check resource availability, reserve what you need, and contribute to the garden!</p>
      <Link to="/signup" className='button'>Sign Up</Link>
      <Link to="/login" className = 'button'>Log In</Link>
    </div>
  );
}

export default HomePage;