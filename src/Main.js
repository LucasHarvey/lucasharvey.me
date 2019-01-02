import React, { Component } from 'react';
import './CSS/App.css';
import './CSS/Main.css';

class App extends Component {

 render() {
    return (
      <div className="Main">
       <div className="about-me section">
        <p className="sectionTitle"><span>Get to know me</span></p>
        <p>I’m a Software Engineering student at the <span>University of Waterloo</span> and am passionate 
            about programming, sports and entrepreneurship. 
            I am currently taking a course on <span>Machine Learning</span> and developing my mobile and 
            web development skills by learning <span>iOS development</span> and <span>React.js</span>. 
            I am now looking for internship opportunities starting in May 2019.</p>
       </div>
      </div>
    );
  }
}

export default App;
