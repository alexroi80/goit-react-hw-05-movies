import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { notificationOptions } from 'components/Notification/Notification';
import { MutatingDots } from "react-loader-spinner";
import { fetchSearchMovie } from "components/helpers/api";
import MoviesList from "components/MoviesList/MoviesList";
import MovieSearchBar from "components/MovieSearchBar/MovieSearch.bar";
import { useSearchParams  } from "react-router-dom";

const MoviesPage = ()=>{
    const [moviesList, setMoviesList] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    const movieSearch = searchParams.get('query')

const checkMoviesList = (Array.isArray(moviesList) && moviesList.length!==0);
   
  
    useEffect(() => {
      if (!movieSearch) return;
  
      const getMoviesList = async () => {
        try {
          setIsLoading(true);
  
          const movie = await fetchSearchMovie(movieSearch);
          setMoviesList(movie);
          toast.success('Movies were successfully fetched!', notificationOptions);
        } catch (error) {
          setError(error.message);
          toast.error(error.message, notificationOptions);
        } finally {
          setIsLoading(false);
        }
      };
  
      getMoviesList();
    }, [movieSearch, checkMoviesList]);

    const handleMovieSearch = query => {
        if (query === '') {
            setSearchParams({});
          return toast.warn('Please enter movie search query', notificationOptions);
        }
        setSearchParams({query:query});
      };

  
    return (
      <div>
         <MovieSearchBar onChange={handleMovieSearch}/>
        {error !== null && (
          <p className="c-error">
            Oops, some error occured. Please, try again later. Error: {error}
          </p>
        )}
        {isLoading && (
          <MutatingDots
            height="100"
            width="100"
            color="#5800a5"
            secondaryColor="#e08e00"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )}

        {checkMoviesList && (
          <><MoviesList moviesList={moviesList} /></>
        )}
        
      </div>
    );
}

export default MoviesPage;