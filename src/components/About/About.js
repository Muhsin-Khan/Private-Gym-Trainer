import React from "react";
import "./About.css";
import me from "../../me/Muhsin Khan.png";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="footer-style ">
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className="about-me">
        <div className="about-info">
          <img src={me} alt="" />
        </div>
        <div>
          <div className="info">
            <h4>
              I am <span className="muhsin">Md. Muhsin Uddin</span>{" "}
            </h4>
            <p>
              I a student of Programming-hero. I have a goal and that is to be a
              programmer of Google or any tech giant company. Now I am Learinig
              web development with Jhankar Mahbub's Programming Hero course.
              After finishing this course I have a plan to jump in job market as
              intern or full time job holder if possible. Besides I will be
              learning proramming and will be incrreasing tech skills
              in-Sha-Allah.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
