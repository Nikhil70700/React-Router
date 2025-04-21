import { NavLink } from "react-router-dom";

export const Header = () => {
  const getNavLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "blue" : "red",
    };
  };

  return (
    <>
      <header className="section-navbar">
        {/* <section className="top_txt">
          <div className="head container">
            <div className="head_txt">
              <p>Watch movies 🎥 and shows you love, all in one place 🎬.</p>
            </div>
            <div className="sing_in_up">
              <NavLink to="# ">SIGN IN</NavLink>
              <NavLink to="# ">SIGN UP</NavLink>
            </div>
          </div>
        </section> */}

        <div className="container">
          <div className="navbar-brand">
            <NavLink to="index">
              <img src="/images/logo.png" alt="" />
            </NavLink>
          </div>

          <nav className="navbar">
            <ul>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "blue" : "black",
                    };
                  }}
                >
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="movie"
                  className="nav-link"
                  style={getNavLinkStyle}
                >
                  movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="contact"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  contact
                </NavLink>
              </li>
              <div className="sing_in_up">
              <NavLink className="sign-in" to="# ">Sign in</NavLink>
              <NavLink className="sign-up"  to="# ">Sign Up</NavLink>
            </div>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};