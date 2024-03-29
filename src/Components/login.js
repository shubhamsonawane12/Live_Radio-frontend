import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// import { useNavigate } from 'wouter';

import Cookies from 'universal-cookie';
import "../Css/login.css";
import coverimage1 from "../Images/hhhjjjjkkk-removebg-preview1.png";

function Login() {
  const cookies = new Cookies();
  // const navigate = useNavigate();

  // State for form inputs
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Update form input values
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
   

    try {
      const response = await fetch('https://live-radio-backend.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {   
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
       
     
        // Handle successful login, for example, storing the token and redirecting
        console.log('Login successful:', data);

        // Store token in a cookie
        cookies.set('token', data.token, { path: '/' });

        // Use the navigate function to redirect to /profile
        // navigate('/profile');
      window.location.href = 'https://live-radio-frontend.onrender.com/Profile';
         
      } else {
        // Handle login errors, display a message to the user, etc.
        console.error('Login error:', data.message);
      }
    } catch (error) {
      console.error('Request failed:', error);
    }
  };

  return (
    <>
      <div className="main_container">
        <div className='img_container'>
          <img src={coverimage1} alt='' />
        </div>
        <div className="box_login">
          <h1>Log in</h1>
          <div className="user">
            <input type="text" name="email" id="email" placeholder="Email" onChange={handleChange} value={formData.email} />
            <i className="fas fa-unlock-alt"></i>
            <input type="password" name="password" id="password" placeholder="Password" onChange={handleChange} value={formData.password} />
          </div>
          <div className="login-btn">
            <button className="btn" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>


    </>
  );
}

export default Login;
