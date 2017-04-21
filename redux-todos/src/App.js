import React, { Component } from 'react';
// import Foot from '../component/foot';
// import Foot from './foot';
// import Foot from './component/foot';
import logo from './logo.svg';
import './App.css';

/*class Foot extends React.Component{
  render(){
    return(
      <div>
          <div>showAll</div>
          <div>showTodo</div>
          <div>showDone</div>
      </div>
    )
  }
}*/

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Foot />
      </div>
    );
  }
}

export default App;
