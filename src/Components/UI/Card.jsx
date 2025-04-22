import { NavLink } from "react-router-dom";
import "./Card.css";

export const Card = ({ curMovie }) => {
  const { Poster, imdbID, Title, Type, Year } = curMovie;

  return (
    <li className="hero-container">
      <div className="main-container">
        {/* Poster */}
        <div className="poster-container">
          <img src={Poster} className="poster" alt={Title} />
        </div>

        {/* Title - now always visible */}
        <h2 className="movie-title">{Title}</h2>

        {/* Type & Year */}
        <div className="poster-child">
          <p>{Type}</p>
          <p>{Year}</p>
        </div>

        {/* Watch Now Button */}
        <div className="ticket-container">
          <div className="ticket__content">
            <NavLink to={`/movie/${imdbID}`}>
              <button className="ticket__buy-btn">Watch now</button>
            </NavLink>
          </div>
        </div>
      </div>
    </li>
  );
};
