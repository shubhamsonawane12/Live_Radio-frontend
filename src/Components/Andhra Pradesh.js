// import React from 'react';
import "../Css/Maharashtra.css";
import React, {useState} from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css'; // Import the styles for the audio player
import "../Css/Radioplayer.css";
import axios from 'axios';
import { FaHeart, FaRegHeart } from 'react-icons/fa';



import {radioData18} from './data'; 
import {radioData2}  from './data';
import {radioData3}  from './data';
import {radioData4}  from './data';
import {radioData5}  from './data';
import {radioData6}  from './data';

function AndhraPradesh( props, { disableShuffle } ) {

  

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
const [CurrentstationName, setCurrentstationName] = useState(null); 
const [CurrentstationLink, setCurrentstationLink] = useState(null);    
 const  playAudio = (imageUrl,frequency,stationName,stationLink,information) => {
    
    setCurrentimageUrl(imageUrl);
    setCurrentstationName(stationName);
    setCurrentstationLink(stationLink);


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
   <p id="currentstationname2">From Andhra Pradesh</p>
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
  {radioData18.map((station, index) => {
    if (index % 2 === 0) {
      // Render two cards for every even index
      const nextStation = radioData18[index + 1]; // Get the next station for pairing
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
  {radioData2.map((station, index) => {
    if (index % 2 === 0) {
      // Render two cards for every even index
      const nextStation = radioData2[index + 1]; // Get the next station for pairing
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
  {radioData3.map((station, index) => {
    if (index % 2 === 0) {
      // Render two cards for every even index
      const nextStation = radioData3[index + 1]; // Get the next station for pairing
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
  {radioData4.map((station, index) => {
    if (index % 2 === 0) {
      // Render two cards for every even index
      const nextStation = radioData4[index + 1]; // Get the next station for pairing
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
  {radioData5.map((station, index) => {
    if (index % 2 === 0) {
      // Render two cards for every even index
      const nextStation = radioData5[index + 1]; // Get the next station for pairing
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
  {radioData6.map((station, index) => {
    if (index % 2 === 0) {
      // Render two cards for every even index
      const nextStation = radioData6[index + 1]; // Get the next station for pairing
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

export default AndhraPradesh;
