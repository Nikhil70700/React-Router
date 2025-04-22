import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="section-navbar">
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/">
              <img src="/images/logo.png" alt="Logo" />
            </NavLink>
          </div>

          <nav className="navbar hidden md:flex">
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
            
            <div className="auth-buttons">
              <button className="auth-button signin-button">Sign In</button>
              <button className="auth-button signup-button">Sign Up</button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};