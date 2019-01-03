import React, { Component } from 'react';
import './CSS/App.css';
import resume from './LucasHarveyResume.pdf';
import resumeIcon from './Images/resume.png';
import githubIcon from './Images/github.png';
import linkedinIcon from './Images/linkedin.png';
import emailIcon from './Images/email.png';

class App extends Component {

 render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="greeting">
            <p className="hello">Hi, I'm</p>
            <p className="name"><span>Lucas Harvey</span></p>
          </div>
          <div className="contact">
            <a target="_blank" rel="noopener noreferrer" href={resume}><img src={resumeIcon}></img></a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/LucasHarvey"><img src={githubIcon}></img></a> 
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lucas-harvey/"><img src={linkedinIcon}></img></a>
            <a href="mailto:lucas.harvey@uwaterloo.ca" target="_top"><img src={emailIcon}></img></a>
          </div>
        </header>
        <div  className="navbar">
          <a href='#about-me'>ABOUT ME</a>
          <a href='#skills'>SKILLS</a>
          <a href='#work'>WORK</a>
          <a href='#projects'>PROJECTS</a>
          <a>BLOG</a>
        </div>
      </div>
    );
  }
}

export default App;
