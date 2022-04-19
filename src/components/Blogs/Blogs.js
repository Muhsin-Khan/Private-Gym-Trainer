import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="footer-style">
      <h4 className="text-center mt-3 mb-3">These are Answers</h4>
      <div className="blogs-container">
        <div className="ans">
          <h5>Difference between authorization and authentication</h5>
          <h5>Authorization</h5>
          <ul>
            <li>Authorization determines what resources a user can access.</li>
            <li>Authorization works through settings that are implemented and maintained by the organization.</li>
            <li>Authorization isnt visible to or changeable by the user.</li>
          </ul>
          <h5>Authentication</h5>
          <ul>
            <li>Authentication verifies the user.</li>
            <li>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</li>
            <li>Authentication is visible to and partially changeable by the user.</li>
          </ul>
        </div>
        <div className="ans">
          <h5>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h5>
          <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience</p>
          <p>The Realtime Database provides a flexible, expression-based rules language, called Firebase Realtime Database Security Rules, to define how your data should be structured and when data can be read from or written to. When integrated with Firebase Authentication, developers can define who has access to what data, and how they can access it.</p>
          
        </div>
        <div className="ans">
          <h5>
            What other services does firebase provide other than authentication
          </h5>
          <p>Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android</p>
          <ul>
            <li>Analytics</li>
            <li>Cloud messaging</li>
            <li>Realtime database</li>
            <li>Performance</li>
            <li>Test lab – Firebase Test Lab</li>
          </ul>
          <p>
          Create onboarding flows – developers can give users a quick, intuitive sign-in process using Firebase Authentication. They allow users to sign into their apps via their Google, Twitter, Facebook or GitHub accounts in less than five minutes. Developers can also track each step of their onboarding flows to enhance the user experience. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
