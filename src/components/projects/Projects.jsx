import "./projects.scss";
import { useState } from "react";

export default function Projects() {
  // Initially 0 when opening site
  const [currentSlide, setCurrentSlide] = useState(0);

  const projectData = [
    {
      id: "1",
      icon: ["./assets/html_icon.png", "./assets/css_icon.png", "./assets/js_icon.png"],
      title: "Portfolio website",
      desc: "This was my first project for my coding bootcamp, which used HTML, CSS and a bit of JavaScript",
      src: "https://github.com/hey-chan/T1A2_portfolio",
      img: "assets/indexhtml.png",
      app: "https://portfoliositebymatt.netlify.app/"
    },
    {
      id: "2",
      icon: ["./assets/ruby_icon.png"],
      title: "Terminal app",
      desc: "In this project, I had used the Ruby programming language to create a terminal based application",
      src: "https://github.com/hey-chan/movie-randomiser-review",
      img: "assets/terminal-app.png" 
    },
    {
      id: "3",
      icon: ["./assets/ruby_icon.png", "./assets/rails_icon.png" ],
      title: "Two-sided marketplace",
      desc: "Using both Ruby and Ruby on Rails framework, I created a prototype two-sided marketplace application",
      src: "https://github.com/hey-chan/marketplace-app",
      img: "assets/marketplace-app.png",
      app: "http://vintagevideogames.herokuapp.com/" 
    },

  ]

  const handleClick = (way) => {
    // Will check if slide > 0. If no, will not move to the left
    way === "left" 
    ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) 
    : setCurrentSlide(currentSlide < projectData.length - 1 ? currentSlide + 1 : 0);
  }


  return (
    <div className="projects" id="projects">
      {/* Initial state is 0. When changing, will be 1 * 100vw */}
        <h1>My projects</h1> 
      <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
       {projectData.map((project) => (
         <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <h2>{project.title}</h2>
                <div className="imgContainer">
                  {project.icon.map(pic => (
                    <img src={pic} alt="" />
                  ))}
                  {/* <img src={project.icon} alt="" />x */}
                </div>
                <p>{project.desc}</p>
                <div className="project" onClick={() => window.open(project.src, '_blank')}>Link to Repo</div>
                <div>{project.app && <p className="project" onClick={() => window.open(project.app, '_blank')}>Link to App</p>}</div>
               
              </div>
            </div>
            <div className="right">
              <img src={project.img} alt="terminal-app" />
            </div>
          </div>
        </div>))}
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")}/>
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick()}/>
    </div>
  );
}
