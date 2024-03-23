import React, { useState, useEffect } from 'react';
import "../Css/profile-container.css";
import useravtar from "../Images/user.png";
import axios from 'axios';
import Slider from "react-slick";
import { Carousel } from 'react-responsive-carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AudioPlayer from 'react-h5-audio-player';

function Profile(props) {
  const [favoriteChannels, setFavoriteChannels] = useState([]);
  const userData = props.userData;
  const [showCarousel, setShowCarousel] = useState(null);



  

  useEffect(() => {
    const fetchFavoriteChannels = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/auth/user/${userData.userId}/getfavchannel`);
        setFavoriteChannels(response.data.favoriteChannels);
        // Show carousel if more than 7 channels
        if (response.data.favoriteChannels.length > 9) {
          setShowCarousel(1);
        }
      } catch (error) {
        console.error('Error fetching user favorite channels:', error);
      }
    };

    if (userData) {
      fetchFavoriteChannels();
    }
  }, [userData]);

  console.log("userdata from profile: ", userData);
  console.log("favorite channels from profile: ", favoriteChannels);


  const [CurrentimagePath, setCurrentimagePath] = useState(null); 
  const [Currentfrequency, setCurrentfrequency] = useState(null); 
  const [CurrentstationName, setCurrentstationName] = useState(null); 
  const [CurrentstationLink, setCurrentstationLink] = useState(null);    
  const [Currentinformation, setCurrentinformation] = useState(null);

  const playAudio = (imagePath,frequency,stationName,stationLink,information) => {    
    setCurrentimagePath(imagePath);
    setCurrentfrequency(frequency); 
    setCurrentstationName(stationName);
    setCurrentstationLink(stationLink);
    setCurrentinformation(information);
  };
  
  return (
    <>
      
      <div className="profile-container_profilejs">
        <div className="user_container_profilejs">
          <div className="user_profilejs">
            <img src={useravtar} alt='' />
            <div className="text_box_profilejs">
              {userData ? (
                <>
                  <h4 id="username"> <b>{userData.username}</b></h4>
                  <h4 id="name">..{userData.fullName}</h4>
                  <h4 id="email">....{userData.email}</h4>
                </>
              ) : (
                <p>Loading user data...</p>
              )}
            </div>
             {/* favoriteChannels.map */}
          </div>
        </div>
    
<div className="favchannel_container">
 <div className='profile_title_container'>
     <p> Favorite Channels</p>
     </div>

        <Carousel  showArrows={true}>
          {favoriteChannels.map((station, index) => (
            <div className="card" key={index} onClick={() => playAudio(station.imagePath, station.frequency, station.stationName, station.stationLink, station.information)}>
              <img src={station.imagePath} alt="radio_img" />
              <div className="favbutton_container">
                <p>{station.frequency} {station.stationName}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>








      </div>
       {CurrentstationLink && ( 
          <div className="radio-player">
            <div className="name_image">
              <div className="station_img">
                <img src={CurrentimagePath} alt='radio_img'/>
                <div>
                  <h4 id="currentstationname">{CurrentstationName}</h4>
                  <p id="currentstationname2">From maharashtra</p>
                </div>
              </div>
            </div>
            <div className="react_player">
              <card>
                <AudioPlayer
                  autoPlay 
                  src={CurrentstationLink}
                  showJumpControls={false}
                  customAdditionalControls={[]} 
                  customProgressBarSection={[]} 
                />
              </card>
            </div>
          </div>
       )}
    
    </>
  );
}

export { Profile };
