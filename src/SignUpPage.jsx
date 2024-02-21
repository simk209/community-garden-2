import React from 'react';
import {useState} from 'react'

function SignUpPage() {

  return (
    <div>
      <h2>Sign Up</h2>
      {/* Include your signup form here */}
      {/* you'll need an onsuvmit in the form */}
      <form>
        <div>
        <label> Name:</label>
        <input type="text" name="name"/>
        </div>

        <div>
        <label> Email:</label>
        <input type="text" name="email"/>
        </div>
        
        <div>
        <label> Password:</label>
        <input type="text" name = "password" />
        </div>

      </form>
    </div>
  );
}

export default SignUpPage;
