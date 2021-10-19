import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";


export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            sTaggers
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 9935417773</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>saurabhp643@gmail.com</span>
          </div>
          {/* <div class="frame"> */}
          <span><button className="custom-btn btn-9">Login</button>
  <button className="custom-btn btn-15">Sign up</button></span>
  {/* </div> */}
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
