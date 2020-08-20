import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../utils/auth";
import "./Navbar.css";

// NavLink adds "active" to className when path matches.

function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  const links = [<BrandLink key="/" to="/" />];

  if (isLoggedIn) {
    links.push(
      <NavLink key="profile" className="nav-item" to="/profile">
        Profile
      </NavLink>
    );
    links.push(
      <span key="lougout" className="nav-item" onClick={logout}>
        Logout
      </span>
      

    );
    links.push(
      <NavLink key="factbook" className="nav-item" to="/factbook">
        Factbook
      </NavLink>
    );
    links.push(
      <NavLink key="quizpage" className="nav-item" to="/quiz">
        Quiz
      </NavLink>

    );
    
  } else {
    links.push(
      <NavLink key="signup" className="nav-item" to="/signup">
        Sign Up
      </NavLink>
    );
    links.push(
      <NavLink key="login" className="nav-item" to="/login">
        Login
      </NavLink>
    );
  }
  return <nav className="Navbar">{links}</nav>;
}

function BrandLink(props) {
  return (
    <NavLink className="nav-item brand" exact {...props}>
      HERstory
    </NavLink>
  );
}

export default Navbar;
