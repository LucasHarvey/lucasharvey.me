import React, { Component } from "react";
import "../CSS/App.css";
import "../CSS/Main.css";
import { HashLink as Link } from "react-router-hash-link";
import ScrollAnimation from "react-animate-on-scroll";
import Accomplishment from "./Accomplishment";
import resume from "../LucasHarveyResume.pdf";
import partyfinder from "../Images/partyfinder.png";
import nexchange from "../Images/nexchange.png";
import intellisports from "../Images/intellisports.png";
import visionlock from "../Images/vision-lock.png";
import climotion from "../Images/cli-motion.png";
import graphgen from "../Images/graph-gen.png";
import githubBlack from "../Images/github-black.png";
import linkedinBlue from "../Images/linkedin-blue.png";

class App extends Component {
  render() {
    return (
      <div className="Main">
        <div id="about-me">
          <div className="about-me section off-white">
            <h2 className="sectionTitle">
              <span>Get to know me</span>
            </h2>
            <p>
              I am a Software Engineering student at the{" "}
              <span>University of Waterloo</span>, I grew up in Montreal and am
              passionate about entrepreneurship, programming, and sports. I am
              currently working on a <span>React Native</span> app for
              crowdsourcing local events and am interested in Machine Learning.
              I am now looking for internship opportunities starting in January
              2020.
            </p>
            <ScrollAnimation animateIn="fadeInButton" animateOnce>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="button"
                href={resume}
              >
                View Resume
              </a>
            </ScrollAnimation>
          </div>
        </div>
        <div id="skills">
          <div className="section">
            <h2 className="sectionTitle">
              <span>This is what I know</span>
            </h2>
            <div className="sectionContent">
              <div className="subSection">
                <h3>
                  <nobr>Programming languages</nobr>
                </h3>
                <div className="lists">
                  <ul>
                    <li>
                      <nobr>Objective-C</nobr>
                    </li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>PHP</li>
                    <li>MySQL</li>
                  </ul>
                  <ul>
                    <li>Swift</li>
                    <li>Shell</li>
                    <li>C</li>
                    <li>Python</li>
                    <li>R</li>
                  </ul>
                </div>
              </div>
              <div className="subSection">
                <h3>
                  <nobr>Tools and Frameworks</nobr>
                </h3>
                <ul>
                  <li>Expo</li>
                  <li>Git</li>
                  <li>XCode</li>
                  <li>React.js</li>
                  <li>Apache</li>
                  <li>R Studio</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="work">
          <div className="section accomplishments merged-top off-white">
            <h2 className="sectionTitle">
              <span>Here's what I've accomplished</span>
            </h2>
            <Accomplishment
              link="https://www.intellisports.ca/"
              image={intellisports}
              alt="Intellisports logo"
              title="Intellisports"
              subtitle1="Full Stack Developer Intern"
              subtitle2="Montreal, QC"
              description="Developed the Playfitt Mobile App by adding new gamification features to increase user retention. Was responsible for the development of a leveling up
              feature to incentivize long-term user engagement."
            />
            <Accomplishment
              link="https://www.intellisports.ca/"
              image={intellisports}
              alt="Intellisports logo"
              title="Intellisports"
              subtitle1="Research Intern"
              subtitle2="Montreal, QC"
              description="Automated the data analysis of large data sets 
                    of sensor data using linear regression in R Studio and discovered new findings regarding the motion of the 
                      curling stone never observed in the research community."
            />
          </div>
        </div>
        <div id="projects">
          <div className="section accomplishments merged-bottom off-white animatedParent">
            <Accomplishment
              link="https://partyfinder.ca/"
              image={partyfinder}
              alt="Partyfinder logo"
              title="PartyFinder"
              subtitle1="Developer and Co-Founder"
              subtitle2="Waterloo, ON"
              description="PartyFinder is a mobile app built in React Native that allows you to spot and discover parties and events near you. Get the location 
              and live ratings before you get there! Launching on September 1st on the App Store and Google Play Store."
            />
            <Accomplishment
              link="https://www.youtube.com/watch?v=lnMbYg0ked8"
              image={visionlock}
              alt="VisionLock logo"
              title="VisionLock"
              subtitle1="Python, OpenCV, Dlib"
              subtitle2=""
              description="Developed a home security system capable of performing facial recognition, unlocking a door and greeting the resident with text to speech conversion."
            />
            <Accomplishment
              link="https://devpost.com/software/gitleap"
              image={climotion}
              alt="CLIMotion logo"
              title="CLIMotion"
              subtitle1="Hack the North 2018"
              subtitle2="JavaScript, Shell"
              description="Created the user interface for a project involving computer vision which allows users to interact with the command line using physical gestures."
            />
            <Accomplishment
              link="https://nexchange.ca"
              image={nexchange}
              alt="Nexchange logo"
              title="Nexchange"
              subtitle1="Lead Developer and Founder"
              subtitle2="Montreal, QC"
              description="Founded a web-based mobile-friendly service that 
                    supports students with learning difficulties by providing them with class notes and saves 
                    an average of 15 hours per week of manual labour."
            />
            <Accomplishment
              link="https://github.com/LucasHarvey/GraphGEN"
              image={graphgen}
              alt="GraphGEN logo"
              title="GraphGEN"
              subtitle1="JavaScript, HTML, CSS"
              subtitle2=""
              description="Developed a web-based mathematical graphing application capable of plotting points, drawing functions and determining the best linear fit for a given data set."
            />
          </div>
        </div>
        <div className="section">
          <h2 className="sectionTitle">
            <span>Let's connect</span>
          </h2>
          <div className="connections">
            <ScrollAnimation animateIn="fadeIn" animateOnce>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/lucas-harvey/"
              >
                <img alt="LinkedIn logo" src={linkedinBlue} />
              </a>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/LucasHarvey"
              >
                <img alt="GitHub logo" src={githubBlack} />
              </a>
            </ScrollAnimation>
          </div>
          <p>
            Or, shoot me an email at{" "}
            <a
              className="email"
              href="mailto:lucas.harvey@uwaterloo.ca"
              target="_top"
            >
              lucas.harvey@uwaterloo.ca
            </a>
          </p>
          <Link
            to="/#header"
            scroll={el =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            Back to top
          </Link>
        </div>
      </div>
    );
  }
}

export default App;
