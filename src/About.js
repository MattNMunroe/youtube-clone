import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="section">
      <div className="mission">
        Working closely with a team of three, we created a clone application of
        the ever so popular website, "Youtube". Our work makes use of
        Javascript, HTML, CSS, React, and the Youtube API V3.
      </div>
      <div className="about-container">
        <div className="profile">
          <img
            className="pic"
            src="https://avatars.githubusercontent.com/u/96262857?v=4 "
            alt=""
          ></img>
          <h2 className="name kedari">Kedari Matthews</h2>
          <p>
            A Man/ATL-ien in the flesh, that explores the vast worlds of
            Technology, Literature, and Arts. Universal Code:
            <span className="blink">Knowledge is Power!!!</span>{" "}
          </p>
          <a href="https://github.com/KamNotCam">Github</a>
        </div>
        <div className="profile">
          <img
            className="pic"
            src="https://avatars.githubusercontent.com/u/96262786?v=4 "
            alt=""
          ></img>
          <h2 className="name"> Matthew Munroe</h2>
          <p>
            A charismatic and creative man from the Bronx with a passion for
            music and the arts.
          </p>
          <a href="https://github.com/MattNMunroe">Github</a>
        </div>

        <div className="profile">
          <img
            className="pic"
            src="https://avatars.githubusercontent.com/u/96318127?v=4 "
            alt=""
          ></img>
          <h2 className="name"> Augusto Rupay</h2>
          <p>
            Born in Peru, raised in Queens NY -- Augusto is a developer
            currently enrolled in Pursuit.
          </p>
          <a href="https://github.com/arupay">Github</a>
        </div>
      </div>
    </div>
  );
};

export default About;
