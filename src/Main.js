import React, { Component } from 'react';
import './CSS/App.css';
import './CSS/Main.css';

class App extends Component {

 render() {
    return (
      <div className="Main">
       <div className="about-me section">
        <h2 className="sectionTitle"><span>Get to know me</span></h2>
        <p>I’m a Software Engineering student at the <span>University of Waterloo</span> and am passionate 
            about programming, sports and entrepreneurship. 
            I am currently taking a course on <span>Machine Learning</span> and developing my mobile and 
            web development skills by learning <span>iOS development</span> and <span>React.js</span>. 
            I am now looking for internship opportunities starting in May 2019.</p>
       </div>
       <div className="section">
        <h2 className="sectionTitle"><span>Here's what I have to offer</span></h2>
        <div className="sectionContent">
            <div className="subSection">
                <h3><nobr>Programming languages</nobr></h3>
                <div className="lists">
                    <ul>
                        <li>Python</li>
                        <li>R</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>PHP</li>

                    </ul>
                    <ul>
                        <li>MySQL</li>
                        <li>Swift</li>
                        <li><nobr>Objective-C</nobr></li>
                        <li>Shell</li>
                        <li>C</li>
                    </ul>
                </div> 
            </div> 
            <div className="subSection">
                <h3><nobr>Tools and Frameworks</nobr></h3>
                <ul>
                    <li>R Studio</li>
                    <li>Git</li>
                    <li>React.js</li>
                    <li>XCode</li>              
                    <li>Apache</li>
                </ul>
            </div>
        </div>
      </div>
     </div>
    );
  }
}

export default App;
