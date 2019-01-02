import React, { Component } from 'react';
import './CSS/App.css';
import resume from './Images/resume.png';
import github from './Images/github.png';
import linkedin from './Images/linkedin.png';
import email from './Images/email.png';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      value: 0
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="hello">Hi, I'm</p>
          <p className="name"><span>Lucas Harvey</span></p>
          <div className="contact">
            <img src={resume}></img> 
            <img src={github}></img> 
            <img src={linkedin}></img>
            <img src={email}></img>
          </div>
        </header>
        <Tabs  variant="fullWidth">
          <Tab label="ABOUT ME" />
          <Tab label="SKILLS" />
          <Tab label="WORK" />
          <Tab label="PROJECTS" />
          <Tab label="BLOG" />
          <Tab label="RESUME" />
        </Tabs>
        <div className="about-me">
        </div>
      </div>
    );
  }
}

export default App;
