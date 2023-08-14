import React, { Fragment, useEffect, useState } from 'react';
import { MutatingDots } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { fetchTrendingMovies } from '../components/helpers/api';
import { notificationOptions } from 'components/Notification/Notification';
import MoviesList from 'components/MoviesList/MoviesList';



const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState(
    () => JSON.parse(localStorage.getItem('trendingMovies')) ?? []
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMoviesData = async () => {
      try {
        setIsLoading(true);

        const movies  = await fetchTrendingMovies();

        setTrendingMovies(movies);
        toast.success('Trending movies were successfully fetched!', notificationOptions);
      } catch (error) {
        setError(error.message);
        toast.error(error.message, notificationOptions);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendingMoviesData();
  }, []);


  return (
    <div>
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
    
      {trendingMovies.length > 0 && 
        <Fragment>
<h1>Trending movies</h1>
          <MoviesList moviesList={trendingMovies}/>
        </Fragment>
        }
    </div>
  );
};

export default HomePage;