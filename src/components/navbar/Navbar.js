import './navbar.scss'
import EmailIcon from '@mui/icons-material/Email';

export default function Navbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">陳</a>
          <div className="itemContainer">
            <EmailIcon className="icon"/>
            <span>liu.c.matthew@outlook.com</span>
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
