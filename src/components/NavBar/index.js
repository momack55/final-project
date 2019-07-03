import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logoWhite.png";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-custom bg-custom">
        <Link className="navbar-brand" to="/"><img src={Logo} alt="logo" id="logo"/></Link>
        <div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className={
                        window.location.pathname === "/" || window.location.pathname === "/about"
                            ? "nav-link active"
                            : "nav-link"
                        }
                    >
                    Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/profile"
                        className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}
                    >
                    Profile
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/discover"
                        className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
                    >
                    Search
                    </Link>
                </li>
                {/* <li className="nav-item">
                    <Link to="/login"
                        className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
                    >
                    Log In
                    </Link>
                </li> */}
                {/* <li className="nav-item">
                    <Link to="/signup"
                        className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
                    >
                    Sign Up
                    </Link>
                </li> */}
            </ul>
        </div>
      </nav>
    );
}
export default Navbar;