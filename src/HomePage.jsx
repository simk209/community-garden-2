import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'

function HomePage() {
  return (
    <div className='body-container'>
      <div className='container'>
        <h1>Welcome to our Community Garden! </h1>
        <div className='description'>
        Check resource availability, reserve what you need, and contribute to the garden!
        </div>
        <div className='links'>
        <Link to="/signup" className='button'>Sign Up</Link>
        <Link to="/login" className = 'button'>Log In</Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;