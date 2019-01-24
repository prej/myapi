import React from 'react';

const Navigation=({ onRouteChange })=>{
  return(
    <nav className='underline pointer tr pr5 pointer'>
      <p onClick={()=>onRouteChange('Signin')}>sign out</p>
    </nav>
  );
}

export default Navigation;