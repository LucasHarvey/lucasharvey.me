import React, { Component } from 'react';
import './CSS/App.css';
import './CSS/Main.css';
import Accomplishment from './Accomplishment';
import nexchange from './Images/nexchange.png';
import intellisports from './Images/intellisports.png';
import visionlock from './Images/vision-lock.png';
import climotion from './Images/cli-motion.png';
import graphgen from './Images/graph-gen.png';

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
      <div className="section accomplishments">
        <h2 className="sectionTitle"><span>Here's what I've accomplished</span></h2>
        <Accomplishment link="https://nexchange.ca" image={nexchange} title="Nexchange" subtitle1="Lead Developer and Founder" 
        subtitle2="Montreal, QC" description="Founded a web-based mobile-friendly service that 
        supports students with learning difficulties by providing them with class notes and saves 
        an average of 15 hours per week of manual labour." />        
        <Accomplishment link="http://www.intellisports.xyz/" image={intellisports} title="Intellisports" subtitle1="Research Intern" 
        subtitle2="Montreal, QC" description="Automated the data analysis of large data sets 
        of sensor data using R Studio and discovered new findings regarding the motion of the 
        curling stone never observed in the research community." />    
        <Accomplishment image={visionlock} title="VisionLock" subtitle1="Python, OpenCV, Dlib" 
        subtitle2="" description="Developed a home security system capable of performing facial recognition, unlocking a door and greeting the resident with text to speech conversion." />    
        <Accomplishment link="https://devpost.com/software/gitleap" image={climotion} title="CLIMotion" subtitle1="Hack the North 2018" 
        subtitle2="JavaScript, Shell" description="Created the user interface for a project involving computer vision which allows users to interact with the command line using physical gestures." /> 
        <Accomplishment link="https://github.com/LucasHarvey/GraphGEN" image={graphgen} title="GraphGEN" subtitle1="JavaScript, HTML, CSS" 
        subtitle2="" description="Developed a web-based mathematical graphing application capable of plotting points, drawing functions and determining the best linear fit for a given data set." /> 
      </div>
     </div>
    );
  }
}

export default App;
