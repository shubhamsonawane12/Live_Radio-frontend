import React, { useState, useEffect } from 'react';
import "../Css/Sidebar.css";
import { Link } from 'wouter';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'; // Import CloseIcon
import avatar from "../Images/Profile.png";
import { Button } from "@mui/material";


function Sidebar(props) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
      const { userData, removeData } = props;

 function removedata() {
        removeData();
    }

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
   
  // const closeSidebar = () => { // Function to close sidebar
  //   setSidebarOpen(false);
  // };

  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('keyup', handleEscKey);

    return () => {
      document.removeEventListener('keyup', handleEscKey);
    };
  }, []);

  return (
    <div className='Sidebar'>
      <div className='Sidebar-container'>
        <h1><span>l</span>ive <span>R</span>adio</h1>
        <div className='In_states'>
          <div class="mobile_view">
            <div class="s-layout">
              <div class="s-layout__sidebar">
                <a class="s-sidebar__trigger" href="#0" onClick={toggleSidebar}> {/* Use toggleSidebar */}
                  {isSidebarOpen ? <CloseIcon className="fa fa-times" id="close" /> : <MenuIcon className="fa fa-bars" id="handburger" />}
                </a>
                <nav class="s-sidebar__nav" style={{ display: isSidebarOpen ? 'block' : 'none' }}> {/* Show/hide based on isSidebarOpen */}
                  <ul>
                    <li>
                      <a class="s-sidebar__nav-link" href="#0">
                        <Link href="/">   <i class="fa fa-home"></i><em>Maharashtra</em></Link>
                      </a>
                    </li>


                     <li>
             <a class="s-sidebar__nav-link" href="#0">
             <Link href="/NewDelhi"> <i class="fa fa-user"></i><em>New Delhi</em></Link> 
             </a>
          </li>
          <li>
             <a class="s-sidebar__nav-link" href="#0">
               <Link href="/Rajastani"> <i class="fa fa-camera"></i><em>Rajastan</em></Link>
             </a>
          </li>
          <li>
             <a class="s-sidebar__nav-link" href="#0">
               <Link href="/Gujrat"> <i class="fa fa-camera"></i><em>Gujrat</em></Link>
             </a>
          </li>
          <li>
             <a class="s-sidebar__nav-link" href="#0">
              <Link href="/AndhraPradesh">  <i class="fa fa-camera"></i><em>Andhra Pradesh</em></Link>
             </a>
          </li>
         
                 {!userData && (
           <li>
             <a class="s-sidebar__nav-link" href="#0">
         <Link href="/login"><i class="fa fa-camera"></i><em>Login</em></Link> 
             </a>
          </li>
                )} {!userData && (
           <li>
             <a class="s-sidebar__nav-link" href="#0">
         <Link href="/signin"><i class="fa fa-camera"></i><em>Signup</em></Link> 
             </a>
          </li>
             )}
             {userData && (
           <li>
             <a class="s-sidebar__nav-link" href="#0">
          
         <Link href="/Profile">    <i class="fa fa-camera"><img  id="sidebar_profileavatar"  src={avatar}alt="avatar"/></i><em  id="ProfileBtn">Profile</em></Link> 
             </a>
          </li>
             )}
             {userData && (
      <a class="s-sidebar__nav-link" href="#0">
            <Button onClick={removedata}><h3 id="login">Logout</h3></Button>
        
          </a>
        )}
       </ul>
   
                 
                </nav>
              </div>
              <main class="s-layout__content"></main>
            </div>
          </div>
        </div>

        {!userData && (
          <div className='User_profile'>
            <Link href="/login"><h3 id="login">Log In</h3></Link>
            <Link href="/signin"> <h3 id="signin">Sign In </h3></Link>
          </div>
        )}

        {userData && (
          <div className='User_profile'>
            <img className='User_profile_photo' id="sidemenu_img6" src={avatar} alt="" />
            <Link href="/Profile"><p>Profile</p></Link>
          </div>
        )}
        
      </div>
    </div>
  );
}

export default Sidebar;
