import './navbar.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';


export default function Navbar({menuOpen, setMenuOpen}) {

  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo" id="personalbrand">💻</a>
          <div className="itemContainer">
            <p>Connect with me via </p>
            <LinkedInIcon className="icon" onClick={() => window.open('https://linkedin.com/in/matthew-c-liu', '_blank')} />
            <FacebookIcon className="icon" onClick={() => window.open('https://www.facebook.com/iammattnotchan', '_blank')} />
            <h2>|</h2>
            <p>See my GitHub </p>
            <GitHubIcon className="icon" onClick={() => window.open('https://github.com/hey-chan', '_blank')}/>
            {/* <EmailIcon className="icon"/>
            <span>liu.c.matthew@outlook.com</span> */}
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
            {/* <p>THIS is right</p> */}
        </div>
      </div>
    </div>
  )
}
