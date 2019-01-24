import React from 'react';
import './Resultstyle.css';


const Result=({data,icon})=>{
  return(
    <div className='tc dib br3 pa3 ma2 grow bw2 shadow-5 bg-rgb(66, 134, 244) card'>
      <p>c:{data.temp_c}</p>
      <p>f:{data.temp_f}</p> 
      <p>Last Updated: {data.last_updated}</p>
      
      <p>{icon.text}</p>
      <img alt='' src={icon.icon}/>
    </div>
  );
}

export default Result;