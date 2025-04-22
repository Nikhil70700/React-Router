import { NavLink } from "react-router-dom";
import "./Card.css";

export const Card = ({ curMovie }) => {
  const { Poster, imdbID, Title,Type,Year } = curMovie;
  return (
    <li className="hero-container">
      <div className="main-container">
        <div className="poster-container" data-title={Title}>
          <img src={Poster} className="poster" alt={Title} />
        </div>
        <div className="poster-child flex justify-around">
        <p className="font-mono rounded-4xl">{Type}</p>
        <p className="font-mono  rounded-4xl">{Year}</p>
        </div>
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