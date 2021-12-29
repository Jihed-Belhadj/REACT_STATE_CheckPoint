
import React from 'react';
import './App.css';
import Person from './Person';


class App extends React.Component{

  constructor(){
    super()
    this.state={x:false}
  }

  toggleshow=()=>{this.setState({x:!this.state.x})}


  render(){
   
      return (
        <div>
          <button onClick={()=>this.toggleshow()}>{this.state.x ? "Hide" : "Show"}</button>
          {this.state.x && <Person></Person>}  
          
        </div>
      );

  }
}

export default App;
