import './intro.scss'

export default function Intro() {
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
          <h3>Aspiring software developer</h3>
          {/* <h3><span></span></h3> */}
        </div>
        <a href="#aboutme">
          <img src="assets/arrow.png" alt=""/>
        </a>
      </div>
      {/* <p>Intro. Welcome to Matt's portfolio</p> */}
    </div> 
  )
}
 