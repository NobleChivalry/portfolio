// npx create-react-app portfolio
// cd portfolio
// npm start

import './App.css';
import Portrait from './Portrait.png';
import SleepTracker from './SleepTracker.png';
import Demo from './Demo.mp4';


function App() {
  return (
    <body>
      <div className="Banner">
        <b>Eric Truong</b>
        <br></br>
        Software Engineer
      </div>

      <div className="Intro">
        <img className="Portrait" src={Portrait} alt="Eric Truong"></img>
        <div className="IntroText">
          Hey there! I am an aspiring software engineer attending the University of California, Irvine.
          Having first come across programming in high school, software engineering became a passion of mine that
          I wanted to pursue professionally. Here are some of my works that I would like to showcase to you thus far!
        </div>
      </div>

      <div className="Title1">
        <div className="Title1a">
          <b>Sleep Tracker</b>
        </div>
        <div className="Title1b">
          <b>Developed with JavaScript, TypeScript, and Ionic</b>
        </div>
      </div>
      <div className="Exhibit1">
        <img className="Image1" src={SleepTracker} alt="App Logo"></img>
        <div>
          <li>This app helps you track your periods of sleep and your daytime sleepiness according to the Stanford Sleepiness Scale.</li>
          <li>There are 3 main sections to the app. Section 1 is where you log your overnight sleep duration. Section 2 is where you can log your sleepiness during the day. Section 3 is where you can view and modify a list of data that you have logged so far.</li>
          <li>I was the sole creator of this app, having only been provided with high-level instructions for this as a class project.</li>
          <br></br>
          <b className="Title1c">My Approach to the Project</b>
          <br></br>
          <br></br>
          <li>I was required to implement 3 sections with their own purposes as described in the project description above. I ran into the issue of how to approach the method to record both the sleep start time and sleep end time. I solved this issue by creating two calendar elements that would make it easy to record when the sleep times started and ended.</li>
          <li>I was required to implement some form of data backup, the logged data needing to remain after the app is reopened or refreshed. I utilized the Capacitor Storage API to solve this issue.</li>
          <li>I ran into the issue of users attempting to have a sleep end time that occurs before a sleep start time. I solved this issue by simply outputting an error message into the logged data section in place of where the logged data should have been.</li>
          <br></br>
          <video className="Video1" src={Demo} type="video/mp4" controls></video>
        </div>
      </div>
    </body>
  );
}

export default App;
