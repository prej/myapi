import React from 'react';
//import {Button} from 'react-bootstrap';
//import countrySelect from './countrySelect';
var allCountries = require('all-countries');

const Dropdown=()=>{
  return(
    <div className='tc bw2 b--light-blue'>
      {allCountries.all}
    </div>
  );
}

export default Dropdown;