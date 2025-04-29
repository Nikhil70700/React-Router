import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

export const Header = () => {
  const[showMenu,setShowMenu]=useState(false);

  const handleButtonToggle=()=>{
    setShowMenu(!showMenu);
  }
  return (
    <>
      <header className="section-navbar">
        <div className="container">
          <div className="grid navbar-brand">
            <div className="logo">
            <NavLink to="/">
              <img src="/images/logo.png" alt="Logo" />
            </NavLink>
            </div>
            
          </div>

          <nav className={showMenu ? "menu-mobile":"menu-web"}>
            <ul>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "active" : ""
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/movie"
                  className={({ isActive }) =>
                    isActive ? "active" : ""
                  }
                >
                  Movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "active" : ""
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            
            <div className="auth-buttons nav-item">
              <NavLink to="/signin" className={({isActive})=>isActive?"active":""}>
              <button className="auth-button signin-button">Sign In</button>
              </NavLink>
              <NavLink to="/signup" className={({isActive})=>isActive?"active":""}>
              <button className="auth-button signup-button">Sign Up</button>
              </NavLink>
              
              
            </div>
          </nav>
          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
            <RxHamburgerMenu />
            </button>

          </div>
        </div>
      </header>
    </>
  );
};