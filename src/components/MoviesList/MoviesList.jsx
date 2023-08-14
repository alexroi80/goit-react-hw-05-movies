import React from "react";
import { Link, useLocation } from "react-router-dom";
import css from './MoviesList.module.css';
import PropTypes from 'prop-types';


const MoviesList = ({moviesList}) =>{
const location =useLocation();

    return (
        <ul className={css.moviesList}>
            {moviesList.map(({id,title,name}) => {
    return ( <li key={id} className={css.movieItem}>
<Link className={css.movieLink}  to={`/movies/${id}`} state={{from: location}}> 
        <h2>{title ?? name}</h2>
      </Link>
    </li>
      
    );
  })}
        </ul>
    )
}
MoviesList.propTypes = {
    moviesList: PropTypes.array.isRequired,
  };

export default MoviesList;