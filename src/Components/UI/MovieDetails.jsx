import React from 'react'
import { useLoaderData } from 'react-router-dom'
import './MovieDetails.css'

export const MovieDetails = () => {
  const movieData = useLoaderData();

  const {
    Actor,
    Poster,
    Title,
    Type,
    Year,
    Plot,
    BoxOffice,
    imdbID,
    Genre,
    Runtime,
    Director,
    Language,
    Country,
    Awards
  } = movieData;

  return (
    <li className="hero-container hero-movie-container">
      <div className="main-container">
        <div className="poster-container">
          <img src={Poster} className='poster' alt={Title} />
        </div>

        <div className="ticket-container">
          <div className="ticket_content">
            <h4 className="ticket_movie-title">{Title}</h4>

            <div className="movie-meta-grid">
              <div className="meta-item">
                <div className="meta-icon">📅</div>
                <div className="meta-text">
                  <strong>Year</strong>
                  <p>{Year}</p>
                </div>
              </div>

              <div className="meta-item">
                <div className="meta-icon">🎭</div>
                <div className="meta-text">
                  <strong>Genre</strong>
                  <p>{Genre}</p>
                </div>
              </div>

              <div className="meta-item">
                <div className="meta-icon">⏳</div>
                <div className="meta-text">
                  <strong>Runtime</strong>
                  <p>{Runtime}</p>
                </div>
              </div>

              <div className="meta-item">
                <div className="meta-icon">🎥</div>
                <div className="meta-text">
                  <strong>Director</strong>
                  <p>{Director}</p>
                </div>
              </div>
            </div>

            <p className="ticket_current-price">
              {Plot}
            </p>

            <div className="movie-meta-grid">
              <div className="meta-item">
                <div className="meta-icon">🌐</div>
                <div className="meta-text">
                  <strong>Language</strong>
                  <p>{Language}</p>
                </div>
              </div>

              <div className="meta-item">
                <div className="meta-icon">🏆</div>
                <div className="meta-text">
                  <strong>Awards</strong>
                  <p>{Awards || 'N/A'}</p>
                </div>
              </div>
            </div>

            <button className='ticket_buy-btn'>
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}