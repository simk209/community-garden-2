import React from 'react';
import {useState} from 'react'
import './LoginPage.css'


function LoginPage() {
  const [formData, setFormData] = useState({})

  const handleChange = (event) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }))

  }

  const handleSubmit = async (event) =>{
    event.preventDefault()
    // send fetch req to backend to check user info
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) console.log('Completed Login Successfully')
      else console.log('Not receiving 200 OK for Signup')
    }
    catch(err){
      console.log('Error during signup:',err)
    }
  }
  return (
    <div className='body-container'>
      <div className='sign-up-container'>
      <div>Log In</div>
      {/* Include your login form here */}
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Email' name='email' onChange ={handleChange} />

        <input type='password' placeholder='Password' name='password' onChange ={handleChange} />

        <button type="submit">Log In</button>
        
      </form>
      </div>
    </div>
  );
}

export default LoginPage;
