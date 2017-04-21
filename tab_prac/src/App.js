import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor(){
    super();
    this.state = {post:[
      {
        "title": "sunt aut facere repellat",
         "body": "1번쨰 quia et suscipit\nsuscipit"
      },
      {
        "title": "qui est essexxxxx",
        "body": "2번쨰 est rerum tempore vitae\nsequi sint"
      }
    ],
    contentIndex: 0,
    contentState: false
  }
  this.getContent = this.getContent.bind(this);
}

  getContent(Index){
    console.log(Index);
    const number = Index;
    this.setState({
      contentIndex: number,
      contentState: true
    });
    // this.setState({contentState: true})
    // this.setState(prevState => ({
    //   contentState: !prevState.contentState
    // }));
  }
  render() {
    const temp_data = this.state;
    const index = this.state.contentIndex;
    console.log(temp_data);
    // const temp_body = temp_data.post.map((v,i) =>{return(<li key={i}> {v.body} </li>
    // )})
    const temp_body = temp_data.post[index].body;
    console.log("contentIndex : ",index);
    console.log(temp_body);
    const temp_head = temp_data.post.map((v,i) => {
      return <li key={i} className="Tab-list" onClick={(e) => (this.getContent(i))}>{v.title}</li>
    })

    console.log("contentState :" , this.state.contentState)

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        
        <ul className="Tab-box">{temp_head}</ul>
        
        <div className="Tab-content"> {(this.state.contentState) ? (temp_body) : ""}</div>
        <h1>{this.state.contentIndex}</h1>
      </div>
    );
  }
}

export default App;
