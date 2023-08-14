import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './MovieDetails.module.css';
import PropTypes from 'prop-types';


const MovieDetails = ({movieDetails}) => {
    const {title, poster_path, release_date, overview, genres, vote_average} = movieDetails;
    const userScore= (Math.round(Number.parseFloat(vote_average))*10);

  return (
    <div className={css.container}>
        <div className={css.movieCard}>
        <div className={css.movieImageWrapper}>
            <img src={'https://image.tmdb.org/t/p/w300'+poster_path} alt={title}/>
        </div>
      <div className={css.movieDetails}>
        <h2 className={css.movieTitle}>
          {movieDetails.title} ({release_date.split('-')[0]})
        </h2>
        <p className={css.movieRating}>User score: {userScore}%</p>
        <h3 className={css.movieOverviewTitle}>Overview</h3>
        <p className={css.movieOverview}>{overview}</p>
        <h4 className={css.movieGenres}>Genres</h4>
        <ul className={css.genresList}>
            {genres.map(genre=>{
return (<li key={genre.id}>{genre.name} </li>)
            })}
        </ul>
      </div>
        </div>
<div className={css.additionalInfo}>
      <p className={css.text}>Additional Information</p>
      <div className={css.nav}>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
</div>
    </div>
  );
};
MovieDetails.propTypes = {
 movieDetails: PropTypes.object.isRequired,
};

export default MovieDetails;
