import React from 'react';
import {useState} from 'react'
import './SignUpPage.css'
function SignUpPage() {

  const [formData, setFormData] = useState({})

  const handleChange = (e) => {
    // const { name, value } = e.target;
    // here e.target is basically your input div
    const name = e.target.name;
    const value = e.target.value
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    console.log('formdata at input change',formData)
  };

  const handleSubmit = async event => {
    console.log('formdata at submit',formData)
    event.preventDefault()
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      console.log(response)
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

        <div>Sign Up</div>
        <form onSubmit={handleSubmit}>
          <div>
          {/* <label> Name:</label> */}
          <input type="text" name="name" onChange={handleChange} placeholder='Name' required/>
          </div>

          <div>
          {/* <label> Email:</label> */}
          <input type="text" name="email" onChange={handleChange} placeholder='Email' required/>
          </div>
          
          <div>
          {/* <label> Password:</label> */}
          <input type="password" name = "password" onChange={handleChange} placeholder='Password' required/>
          </div>

          <button type="submit">Sign Up</button>


        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
