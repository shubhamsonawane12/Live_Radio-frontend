// import React,{useState} from 'react';
// import 'react-h5-audio-player/lib/styles.css'; // Import the styles for the audio player
// import "../Css/Radioplayer.css";
// import { Router, Route } from 'wouter';
// import imagina from "../Images/nature.jpg";
// import Maharashtra from './Maharashtra';
// import ReactAudioPlayer from 'react-audio-player';

//  function RadioPlayer( { disableShuffle } ) {
 


// const [CurrentimageUrl, setCurrentimageUrl] = useState(null); 
// const [Currentfrequency, setCurrentfrequency] = useState(null); 
// const [CurrentstationName, setCurrentstationName] = useState(null); 
// const [CurrentstationLink, setCurrentstationLink] = useState(null);    
// const [Currentinformation, setCurrentinformation] = useState(null);
//  const  playAudio = (imageUrl,frequency,stationName,stationLink,information) => {
    
//     setCurrentimageUrl(imageUrl);
//     setCurrentfrequency(frequency); 
//     setCurrentstationName(stationName);
//     setCurrentstationLink(stationLink);
//     setCurrentinformation(information);


//   };
//   return (



// <div  className="Container">



// <Maharashtra playAudio={playAudio}/>

//     <div className="radio-player">

//       <player_card>
//       <img src={imagina} alt="" id="top_img"></img>
//   <div className="player-card">
   
//     <img src={CurrentimageUrl} alt='radio_img'/>
   

//       <card>
  
//     <h4>{CurrentstationName}</h4>

//        <ReactAudioPlayer 
//         src={CurrentstationLink} 
//         controls 
//         autoPlay 
//       />
//       </card>
//     </div>

//     </player_card>
// </div>
//     </div>

//   );
//  }
//  export default RadioPlayer;
// import ReactAudioPlayer from 'react-audio-player';

// function AudioPlayerComponent({ audioSrc, onClose }) {
//   return (
//     <div className="audio-player">
//       <ReactAudioPlayer
//         autoPlay={false} // Adjust as needed
//         src={audioSrc}
//         // Other props as needed
//       />
//       <button onClick={onClose}>Close Audio</button>
//     </div>
//   );
// }

// export default AudioPlayerComponent;