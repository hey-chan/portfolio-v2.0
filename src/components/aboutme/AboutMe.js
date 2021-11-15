import React from "react";
import "./aboutme.scss";

export default function AboutMe() {
  return (
    <div className="aboutme" id="aboutme">
      <div className="left">
        <h2>About me</h2>
      </div>
      <div className="right">
        <div className="right-card bg"></div>
        <div className="right-card">
          <img src="assets/me-again.jpg" alt="" className="img"/>
        </div>
      </div>
    </div>
  );
}
