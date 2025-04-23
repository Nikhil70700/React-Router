import { NavLink } from "react-router-dom";
import "./Card.css";

export const Card = ({ curMovie }) => {
  const { Poster, imdbID, Title, Type, Year } = curMovie;

  return (
    <li className="hero-containers">
      <div className="main-containers">
        <div className="poster-containers">
          <img src={Poster} className="posters" alt={Title} />
        </div>
        <h2 className="movie-titles">{Title}</h2>
        <div className="poster-childs">
          <p>{Type}</p>
          <p>{Year}</p>
        </div>
        <div className="ticket-containers">
          <div className="ticket__contents">
            <NavLink to={`/movie/${imdbID}`}>
              <button className="ticket__buy-btns">Watch now</button>
            </NavLink>
          </div>
        </div>
      </div>
    </li>
  );
};