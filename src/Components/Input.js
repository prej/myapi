import React from 'react';
import './Resultstyle.css';

const Input=({onChange,ShowButton,data,icon})=>{
  return(
    <div className='tc'>
      <div className='tc'>
      <input type='text' className='input-reset ba b--black-20 pa2 mb2 w-30 f6 b tc' placeholder='Enter City' onChange={onChange}/>
      <button onClick={ShowButton} className='button'>SHOW</button>
      </div>
      <div>
      { /*	  <p>c:{data.temp_c}</p>
	      <p>f:{data.temp_f}</p> 
	      <p>Last Updated: {data.last_updated}</p>
	     <p>{icon.text}</p>
	      <img alt='' src={icon.icon}/>*/}
      </div>
    </div>
  );
}

export default Input;