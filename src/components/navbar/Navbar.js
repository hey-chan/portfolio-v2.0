import './navbar.scss'
import EmailIcon from '@mui/icons-material/Email';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">陳</a>
          <div className="itemContainer">
            <EmailIcon className="icon"/>
            <span>liu.c.matthew@outlook.com</span>
          </div>
        </div>
        <div className="right">
          <p>THIS is right</p>
        </div>
      </div>
    </div>
  )
}
