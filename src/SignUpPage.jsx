import React from 'react';
import {useState} from 'react'

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

  const handleSubmit = event => {
    console.log('formdata at submit',formData)
    event.preventDefault()
    // send info to backend
    const form = event.target
    console.log(form.name.value)
    console.log(form.email.value)
    console.log(form.password.value)
    }

  return (
    <div>
      <h2>Sign Up</h2>
      {/* Include your signup form here */}
      {/* you'll need an onsuvmit in the form */}
      <form onSubmit={handleSubmit}>
        <div>
        <label> Name:</label>
        <input type="text" name="name" onChange={handleChange} required/>
        </div>

        <div>
        <label> Email:</label>
        <input type="text" name="email" onChange={handleChange} required/>
        </div>
        
        <div>
        <label> Password:</label>
        <input type="password" name = "password" onChange={handleChange} required/>
        </div>

        <button type="submit">Sign Up</button>


      </form>
    </div>
  );
}

export default SignUpPage;
