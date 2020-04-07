import React, { Component } from "react";
import "../CSS/App.css";
import "../CSS/Main.css";
import { HashLink as Link } from "react-router-hash-link";
import ScrollAnimation from "react-animate-on-scroll";
import Accomplishment from "./Accomplishment";
import resume from "../LucasHarveyResume.pdf";
import partyfinder from "../Images/partyfinder.png";
import nexchange from "../Images/nexchange.png";
import wayfair from "../Images/wayfair.png";
import intellisports from "../Images/intellisports.png";
import visionlock from "../Images/vision-lock.png";
import climotion from "../Images/cli-motion.png";
import graphgen from "../Images/graph-gen.png";
import githubBlack from "../Images/github-black.png";
import linkedinBlue from "../Images/linkedin-blue.png";
import round_headshot from "../Images/round_me.png";

class App extends Component {
  render() {
    return (
      <div className="Main">
        <a id="about-me" className="anchor"></a>
        <div className="about-me-section">
          <div className="about-me section off-white">
            <h2 className="sectionTitle">
              <span>Get to know me</span>
            </h2>
            <img
              className="round-headshot"
              src={round_headshot}
              alt="Lucas Harvey"
            ></img>
            <p>
              Studying <span>Computer Science</span> at the{" "}
              <span>University of Waterloo</span>
              <br />
              From: <span>Montreal</span>, Canada
              <br />
              Passion: <span>Entrepreneurship</span>
              <br />
              Interested in: <span>Machine Learning</span>
              <br />
              Current project: Tracking and analyzing my biometrics data
              <br />
              Seeking internship opportunities starting in{" "}
              <span>Fall 2020</span>
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
        <a id="skills" className="anchor"></a>
        <div>
          <div className="section">
            <h2 className="sectionTitle">
              <span>This is what I know</span>
            </h2>
            <div className="sectionContent">
              <p>
                <span className="section-subtitle">
                  <nobr>I am fluent in: </nobr>
                </span>
                <span> Python </span>
                <span className="element"> SQL </span>
                <span className="element"> JavaScript </span>
                <span className="element"> HTML </span>
                <span className="element"> CSS </span>
                <span className="element"> C/C++/Objective-C </span>
                <span className="element"> PHP </span>
              </p>
              <p>
                <span className="section-subtitle">
                  <nobr>I have worked with: </nobr>
                </span>
                <span> Flask </span>
                <span className="element"> React.js </span>
                <span className="element"> Git </span>
                <span className="element"> Apache Airflow </span>
                <span className="element"> Hive </span>
                <span className="element"> Docker </span>
                <span className="element"> React Native </span>
              </p>
            </div>
          </div>
        </div>
        <a id="work" className="anchor"></a>
        <div>
          <div className="section accomplishments merged-top off-white">
            <h2 className="sectionTitle">
              <span>Work Experience</span>
            </h2>
            <Accomplishment
              link="https://www.wayfair.com/"
              image={wayfair}
              alt="Wayfair logo"
              title="Wayfair"
              subtitle1="Software Engineer Intern"
              subtitle2="Boston, MA"
              description="Worked with the Machine Learning Platforms team to create a tool for the exploration of machine learning models, features and datasets. Improved performance of large-scale machine learning applications."
            />
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
        <a id="projects" className="anchor"></a>
        <div>
          <div className="section accomplishments merged-bottom off-white animatedParent">
            <h2 className="sectionTitle">
              <span>Projects</span>
            </h2>
            <Accomplishment
              link="https://partyfinder.ca/"
              image={partyfinder}
              alt="Partyfinder logo"
              title="PartyFinder"
              subtitle1="Developer and Co-Founder"
              subtitle2="Waterloo, ON"
              description="PartyFinder is a crowdsourced mobile app built in React Native that allows you to spot and discover parties and events near you.
              Amassed 5,000+ downloads and 1,000 Weekly Active Users."
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
              href="mailto:lucas.harvey10@gmail.com"
              target="_top"
            >
              lucas.harvey10@gmail.com
            </a>
          </p>
          <Link
            to="/#about-me"
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
