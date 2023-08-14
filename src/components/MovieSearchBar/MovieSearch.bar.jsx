import React, {useState} from "react";
import PropTypes from 'prop-types';
import css from './MovieSearchBar.module.css';
import { toast } from 'react-toastify';
import { notificationOptions } from "components/Notification/Notification";

const MovieSearchBar = ({onChange}) =>{
    const [movieSearchQuery, setMovieSearchQuery] = useState('');

    const handleSearchQuery = evt => {
     setMovieSearchQuery(evt.currentTarget.value.toLowerCase());
    };
  
    const handleSubmit = evt => {
      evt.preventDefault();
      const form = evt.currentTarget;
      if (movieSearchQuery.trim() === '') {
        return toast.warn('Please enter movie search query', notificationOptions);
      }
     onChange(movieSearchQuery);
     form.reset();
    };
  
  
      return (
          <form className={css.form} onSubmit={handleSubmit}>
            <input
              className={css.input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search movie"
              required
              defaultValue={movieSearchQuery}
              onChange={handleSearchQuery}
            />
            <button type="submit" className={css.button}>
              <span className={css.buttonLabel}>Search</span>
            </button>
  
          </form>
      );
}
MovieSearchBar.propTypes = {
onChange:PropTypes.func.isRequired
}

export default MovieSearchBar;