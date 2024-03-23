import React,{useState,useEffect} from 'react';
import Sidebar from './Components/Sidebar';
// import { BrowserRouter, Route, Route } from 'react-router-dom';
import Sidemenu from "./Components/sidemenu.js"
import "./Css/Main.css"
import Maharashtra from './Components/Maharashtra';
import NewDelhi from './Components/New Delhi';
import Rajastan from './Components/Rajastan';
import Login from "./Components/login.js";
import { Router, Route } from 'wouter';
import Gujrat from './Components/Gujrat';
import AndhraPradesh from './Components/Andhra Pradesh';
import Signin from './Components/signin';
import {Profile} from "./Components/profile.js"
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const token = cookies.get('token');



function Main() {

  const [userData, setUserData] = useState(null); 
    const removeData = () => {
    setUserData(null);
  };


 useEffect(() => {
    
    // Fetch user details when the component mounts
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      // Make an HTTP request to your backend API to get user details
      const response = await fetch('http://localhost:3000/api/auth/profile', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, // Include the user token
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserData(data); // Update state with user data
      } else {
        console.error('Failed to fetch user data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  console.log("userdata from main:",userData)
  return (
    <>

   
      {/* <div className="background-Transition">
     <video
        autoPlay
        loop
        muted
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: '-1',
        }}
      >
        <source src={OceanVideo} type="video/mp4" />
      </video> */}
    
    <Sidebar userData={userData} removeData={removeData}/>
    <div className='main'>

   <Sidemenu userData={userData} removeData={removeData}/>
 <Router>

      <Route path="/" component={() => <Maharashtra userData={userData} />} />
      <Route path="/login"  component={() => <Login userData={userData} />}/>
      <Route path="/signin"  component={() => <Signin  userData={userData}/>}/>
      <Route path="/NewDelhi" component={() => <NewDelhi userData={userData} />} /> 
      <Route path="/Rajastani" component={() => <Rajastan userData={userData} />}/>
      <Route path="/Gujrat"  component={() => <Gujrat userData={userData} />}/>
       <Route path="/AndhraPradesh" component={() => <AndhraPradesh userData={userData} />}/>
      <Route path="/Profile" component={() => <Profile userData={userData} />}/>
    </Router>




{/* 
<Maharashtra/>
<NewDelhi/>
<Rajastan/> */}
  
    </div>
   

    </>
  )
}

export default Main;