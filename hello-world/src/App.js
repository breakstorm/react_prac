import React , {Component} from 'react';
// import ReactDOM from 'react-dom';
import logo from './logo.svg';
import Head from './Head/Head';

// import './Head/Head';
// import Introducing from './Example/IntroducJSX';
// import Welcome from './Example/Rendering';
// import Comment from './Example/Extract';
import './App.css';

class MyList extends Component {
  constructor() {
    super();
    this.state = {
      posts:[
      {
        "title": "sunt aut facer rera",
        "body": "quia et djflkasdfjklv"
      }, 
      {
        "title": "2sts djflkasjfdja vjlkdf",
        "body": "4st djafkl fjklav"
      }]
    }
  }

  addCount(number) {
    console.log('log', number);
  }

  render(){
    let data = this.state.posts;
    let element = data.map((v,i) => {
      return (<li key={i} onClick={this.addCount.bind(this, i)}> {v.title} {v.body}</li>)
    });
    return(
      <div>
      <li>{this.props.children}</li>
      <li>{element}</li>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          <MyList>foo</MyList>
          <MyList>bar</MyList>
        </ul>


      </div> 
    );
  }
}
/////////////


export default App;
