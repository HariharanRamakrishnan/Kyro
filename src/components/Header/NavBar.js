import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <nav className="navbar__nav">
            <h3 className="navbar__brand">
              <Link to="/">
                <i className="fas fa-tv"></i>KYRO TV
              </Link>
            </h3>
            <SearchBar />
            <ul className="nav__links">
              <li className="links__link">
                <Link to="/about">
                  <b>ABOUT</b>
                </Link>
              </li>
              <li className="links__link">
              <Link to="/login">
                <b>LOGIN</b>
              </Link>
              </li>
            </ul>        
        </nav>
      </div>
    </div>
  )
}

export default NavBar;