import React from "react";
import "./aboutme.scss";

export default function AboutMe() {
  return (
    <div className="aboutme" id="aboutme">
      <div className="left">
        <div className="myself">
          <h2>About me</h2>
          <p>Test test tst</p>
          <p>Test test tst</p>
          <p>Test test tst</p>
          <p>Test test tst</p>
          <p>Test test tst</p>
          <p>Test test tst</p>

        </div>
      </div>

      <div className="right">
        <div className="aboutme-card">
          <img src="assets/me-again.png" alt="" className="aboutme-img"/>
        </div>
      </div>
    </div>
  );
}
