import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import "../Css/signin.css";
import { Link } from "wouter";
import coverimage1 from "../Images/hhhjjjjkkk-removebg-preview1.png";

function Signin() {

  const cookies = new Cookies();

  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://live-radio-backend.onrender.com/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        cookies.set('token', data.token, { path: '/' });
        console.log("registration is successful", data);

        // Redirect to the desired page (e.g., user profile, radio channels)
        
           window.location.href = 'https://live-radio-frontend.onrender.com/NewDelhi';

         
      } else {
        // Handle registration errors, display a message to the user, etc.
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <>
      <div className="main_container">
        <div className='img_container'>
          <img src ={coverimage1} alt = '' />
        </div>
        <div className="box">
          <h1>Sign Up</h1>
          <div className="user">
            <i className="fas fa-user"></i>
            <input type="text" name="username" id="username" placeholder="Username" onChange={handleChange} value={formData.username} />
            <i className="fas fa-user"></i>
            <input type="text" name="fullName" id="fullName" placeholder="Full Name" onChange={handleChange} value={formData.fullName} />
            <i className="fas fa-envelope"></i>
            <input type="text" name="email" id="email" placeholder="Email Address" onChange={handleChange} value={formData.email} />
            <i className="fas fa-unlock-alt"></i>
            <input type="password" name="password" id="password" placeholder="Password" onChange={handleChange} value={formData.password} />
          </div>
          <div className="login-btn">
            <button className="btn" onClick={handleSubmit}>Submit</button>
            <p className="signup">Already have an account?  <Link href ="/login"><p><span>Log In</span> </p></Link></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
