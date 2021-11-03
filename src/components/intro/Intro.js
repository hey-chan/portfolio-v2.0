import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Software developer", "Designer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/me.png" alt="matt-liu" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hey there, I'm</h2>
          <h1>Matt</h1>
          {/* <h3>Aspiring software developer</h3> */}
          <h3>
            Aspiring <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#aboutme">
          <img src="assets/arrow.png" alt="" />
        </a>
      </div>
      {/* <p>Intro. Welcome to Matt's portfolio</p> */}
    </div>
  );
}
