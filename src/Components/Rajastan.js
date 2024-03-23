// import React from 'react';
import "../Css/Maharashtra.css";
import React, {useState} from 'react';
import 'react-h5-audio-player/lib/styles.css'; 
import AudioPlayer from 'react-h5-audio-player';
import axios from 'axios';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import "../Css/Radioplayer.css";


import ReactAudioPlayer from 'react-audio-player';

import {radioData14}  from './data';
import {radioData15}  from './data';
import {radioData10}  from './data';
import {radioData11}  from './data';
import {radioData12}  from './data';


function Rajastan(  props,{ disableShuffle } ) {
  

  

 const userData = props.userData;
 
   
   let userId = null;

//  console.log("USERDATA:",userData.userId);
  if (userData) {
    
      userId = userData.userId;
  
  }
  
 


// const userId = userData.userId;
 const [likedStations, setLikedStations] = useState({});

  const toggleLike = ( imagePath,stationName,frequency,stationLink) => {
console.log("imagePath:", imagePath);
   console.log("userid:", userId);
      console.log("The station is liked:", stationName);
    console.log("Link to the station:",stationLink);
     console.log("Link to the frequency:",frequency);
  // console.log("userdata:", userData)
    setLikedStations(prevLikedStations => ({
      ...prevLikedStations,
      [stationName]: !prevLikedStations[stationName]
    }));
     axios.post('https://live-radio-backend.onrender.com/api/auth/favchannels', {
      userId: userId , 
      imagePath:imagePath,
      stationName: stationName ,
      frequency:  frequency,
      stationLink: stationLink
      
    })
    .then(response => {
      console.log('Liked station stored in backend:', response.data);
    })
    .catch(error => {
      console.error('Error storing liked station:', error);
    });
  }

  
const [CurrentimageUrl, setCurrentimageUrl] = useState(null); 
const [Currentfrequency, setCurrentfrequency] = useState(null); 
const [CurrentstationName, setCurrentstationName] = useState(null); 
const [CurrentstationLink, setCurrentstationLink] = useState(null);    
const [Currentinformation, setCurrentinformation] = useState(null);
 const  playAudio = (imageUrl,frequency,stationName,stationLink,information) => {
    
    setCurrentimageUrl(imageUrl);
    setCurrentfrequency(frequency); 
    setCurrentstationName(stationName);
    setCurrentstationLink(stationLink);
    setCurrentinformation(information);


  };

  return (
    <>
       {CurrentstationLink && ( 

    <div className="radio-player">

      {/* <player_card> */}
      {/* <img src={imagina} alt="" id="top_img"></img> */}
  {/* <div className="player-card"> */}
   <div className="name_image">
    <div className="station_img">
    <img src={CurrentimageUrl} alt='radio_img'/>
<div>
  <h4 id="currentstationname">{CurrentstationName}</h4>
   <p id="currentstationname2">From maharashtra</p>
   </div>
  </div>
</div>
<div className="react_player">

      <card>

  {/* <h4>{CurrentstationName}</h4> */}

       <AudioPlayer
        autoPlay 
        src={CurrentstationLink}
     showJumpControls={false}
  customAdditionalControls={[]}
  customProgressBarSection={[]} 
  
      />
       {/* <ReactAudioPlayer 
        src={CurrentstationLink} 
        controls 
        autoPlay
      className="react-audio-player-no-background"
      /> */}
      </card>
      </div>
  
</div>
  )}


    <div  className="Container">
    <div className='Maharashtra'>
  

       <div className="Cards-Container">
  {radioData14.map((station, index) => {
    if (index % 2 === 0) {
      // Render two cards for every even index
      const nextStation = radioData14[index + 1]; // Get the next station for pairing
      return (
        <div className="CardPair" key={index}>
          <div className="Cards" onClick={() => playAudio(station.imageUrl, station.frequency, station.stationName, station.stationLink, station.information)}>
            <img src={station.imageUrl} alt="radio_img" />
             
            <div className="favbutton_container">
              <div className="LikeButton" onClick={() => toggleLike(station.imagePath,station.stationName,station.frequency,station.stationLink)}>
                      {likedStations[station.stationName] ? <FaHeart color="red " /> : <FaRegHeart />}
                    </div>
            <p>{station.frequency} {station.stationName}</p>
            </div>
          </div>
          {nextStation && (
            <div className="Cards" onClick={() => playAudio(nextStation.imageUrl, nextStation.frequency, nextStation.stationName, nextStation.stationLink, nextStation.information)}>
              <img src={nextStation.imageUrl} alt="radio_img" />
              
                 <div className="favbutton_container">
                 
                    <div className="LikeButton" onClick={() => toggleLike(nextStation.imagePath,nextStation.stationName,nextStation.frequency,nextStation.stationLink)}>
                        {likedStations[nextStation.stationName] ? <FaHeart color="red" /> : <FaRegHeart />}
                      </div>
                
              <p>{nextStation.frequency} {nextStation.stationName}</p>
              </div>
            </div>
          )}
        </div>
      );
    }
    return null; // Skip odd-indexed stations, as they are already paired with the previous even-indexed station
  })}
</div>

  
       <div className="Cards-Container">
  {radioData15.map((station, index) => {
    if (index % 2 === 0) {
      // Render two cards for every even index
      const nextStation = radioData15[index + 1]; // Get the next station for pairing
      return (
        <div className="CardPair" key={index}>
          <div className="Cards" onClick={() => playAudio(station.imageUrl, station.frequency, station.stationName, station.stationLink, station.information)}>
            <img src={station.imageUrl} alt="radio_img" />
          
            <div className="favbutton_container">
              <div className="LikeButton" onClick={() => toggleLike(station.imagePath,station.stationName,station.frequency,station.stationLink)}>
                      {likedStations[station.stationName] ? <FaHeart color="red " /> : <FaRegHeart />}
                    </div>
            <p>{station.frequency} {station.stationName}</p>
            </div>
          </div>
          {nextStation && (
            <div className="Cards" onClick={() => playAudio(nextStation.imageUrl, nextStation.frequency, nextStation.stationName, nextStation.stationLink, nextStation.information)}>
              <img src={nextStation.imageUrl} alt="radio_img" />
              
                 <div className="favbutton_container">
                 
                    <div className="LikeButton" onClick={() => toggleLike(nextStation.imagePath,nextStation.stationName,nextStation.frequency,nextStation.stationLink)}>
                        {likedStations[nextStation.stationName] ? <FaHeart color="red" /> : <FaRegHeart />}
                      </div>
                
              <p>{nextStation.frequency} {nextStation.stationName}</p>
              </div>
            </div>
          )}
        </div>
      );
    }
    return null; // Skip odd-indexed stations, as they are already paired with the previous even-indexed station
  })}
</div>


    
       <div className="Cards-Container">
  {radioData10.map((station, index) => {
    if (index % 2 === 0) {
      // Render two cards for every even index
      const nextStation = radioData10[index + 1]; // Get the next station for pairing
      return (
        <div className="CardPair" key={index}>
          <div className="Cards" onClick={() => playAudio(station.imageUrl, station.frequency, station.stationName, station.stationLink, station.information)}>
            <img src={station.imageUrl} alt="radio_img" />
      
            <div className="favbutton_container">
              <div className="LikeButton" onClick={() => toggleLike(station.imagePath,station.stationName,station.frequency,station.stationLink)}>
                      {likedStations[station.stationName] ? <FaHeart color="red " /> : <FaRegHeart />}
                    </div>
            <p>{station.frequency} {station.stationName}</p>
            </div>
          </div>
          {nextStation && (
            <div className="Cards" onClick={() => playAudio(nextStation.imageUrl, nextStation.frequency, nextStation.stationName, nextStation.stationLink, nextStation.information)}>
              <img src={nextStation.imageUrl} alt="radio_img" />
              
                 <div className="favbutton_container">
                 
                    <div className="LikeButton" onClick={() => toggleLike(nextStation.imagePath,nextStation.stationName,nextStation.frequency,nextStation.stationLink)}>
                        {likedStations[nextStation.stationName] ? <FaHeart color="red" /> : <FaRegHeart />}
                      </div>
                
              <p>{nextStation.frequency} {nextStation.stationName}</p>
              </div>
            </div>
          )}
        </div>
      );
    }
    return null; // Skip odd-indexed stations, as they are already paired with the previous even-indexed station
  })}
</div>


       <div className="Cards-Container">
  {radioData11.map((station, index) => {
    if (index % 2 === 0) {
      // Render two cards for every even index
      const nextStation = radioData11[index + 1]; // Get the next station for pairing
      return (
        <div className="CardPair" key={index}>
          <div className="Cards" onClick={() => playAudio(station.imageUrl, station.frequency, station.stationName, station.stationLink, station.information)}>
            <img src={station.imageUrl} alt="radio_img" />
           
            <div className="favbutton_container">
              <div className="LikeButton" onClick={() => toggleLike(station.imagePath,station.stationName,station.frequency,station.stationLink)}>
                      {likedStations[station.stationName] ? <FaHeart color="red " /> : <FaRegHeart />}
                    </div>
            <p>{station.frequency} {station.stationName}</p>
            </div>
          </div>
          {nextStation && (
            <div className="Cards" onClick={() => playAudio(nextStation.imageUrl, nextStation.frequency, nextStation.stationName, nextStation.stationLink, nextStation.information)}>
              <img src={nextStation.imageUrl} alt="radio_img" />
              
                 <div className="favbutton_container">
                 
                    <div className="LikeButton" onClick={() => toggleLike(nextStation.imagePath,nextStation.stationName,nextStation.frequency,nextStation.stationLink)}>
                        {likedStations[nextStation.stationName] ? <FaHeart color="red" /> : <FaRegHeart />}
                      </div>
                
              <p>{nextStation.frequency} {nextStation.stationName}</p>
              </div>
            </div>
          )}
        </div>
      );
    }
    return null; // Skip odd-indexed stations, as they are already paired with the previous even-indexed station
  })}
</div>
    

    </div>







    </div>
    </>
  );
}

export default Rajastan;
