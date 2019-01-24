import React, { Component } from 'react';
import Text from './Components/Text';
import Result from './Components/Result';
import Input from './Components/Input';
import Signin from './Components/Signin';
import Navigation from './Components/Navigation';
import Register from './Components/Register';
//import Dropdown from './Components/Dropdown';
import 'tachyons';

class App extends Component {
  constructor(){
    super()
    this.state={
      input:'',
      city:'',
      data:{},
      icon:{},
      route:'Signin'
    }
  }

  onChange=(evt)=>{
   // console.log(evt.target.value);
    this.setState({input:evt.target.value});
  }

/*result=(data)=>{
    this.setState({data:data})
}*/

ShowButton=()=>{
  this.setState({city:this.state.input});
 // console.log(this.state.city);
  fetch(`http://api.apixu.com/v1/current.json?key= 39f25f3b5c734d19aec185814180807  &q=${this.state.input}`)
    .then(response=> {
    return response.json();
  })
    .then(myJson=>{
      this.setState({data:myJson.current})
      this.setState({icon:myJson.current.condition})
    } )
}

onRouteChange=(route)=>{
  this.setState({route:route});
}

  render() {
    
      if (this.state.route==='Signin') {
         return <Signin onRouteChange={this.onRouteChange}/>
       }else if (this.state.route==='Register') {
          return <Register onRouteChange={this.onRouteChange}/>
       }else{
        return(
          <div className='tc f3'>
             <Navigation onRouteChange={this.onRouteChange}/>
             <Text/>
             <Input 
                onChange={this.onChange} 
                ShowButton={this.ShowButton}
                data={this.state.data} 
              />
            <Result 
                data={this.state.data} 
                icon={this.state.icon}
              />
            </div>
        );
       }
    
  }
}

export default App;
