import "./projects.scss";
import { useState } from "react";
import portfolio from "../../data/portfolioData"

export default function Projects() {
  // Initially 0 when opening site
  const [currentSlide, setCurrentSlide] = useState(0);

  // Portfolio stuff
  const projectData = portfolio


  const handleClick = (way) => {
    // Will check if slide > 0. If no, will not move to the left
    way === "left" 
    ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 :  projectData.length - 1 ) 
    : setCurrentSlide(currentSlide < projectData.length - 1 ? currentSlide + 1 : 0);
  }


  return (
    <div className="projects" id="projects">
      {/* Initial state is 0. When changing, will be 1 * 100vw */}
      <h1 className="header">My projects</h1> 
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
                {/* <div className="project" onClick={() => window.open(project.src, '_blank')}>Link to Repo</div> */}
                <div>{project.src && <p className="project" onClick={() => window.open(project.src, '_blank')}>Link to Repo</p>}</div>
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
