import { Fragment, Suspense, useEffect, useState} from 'react';
import { MutatingDots } from 'react-loader-spinner';
import { Outlet,  useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMovieDetails } from 'components/helpers/api';
import { notificationOptions } from 'components/Notification/Notification';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import GoBackLink from 'components/GoBackLink/GoBackLink';



const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();


  
  useEffect(() => {
    if (!movieId) return;

    const getMovieDetails = async () => {
      try {
        setIsLoading(true);

        const movieData = await fetchMovieDetails(movieId);
        setMovieDetails(movieData);
        toast.success('Movie details were successfully fetched!', notificationOptions);
      } catch (error) {
        setError(error.message);
        toast.error(error.message, notificationOptions);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieDetails();
  }, [movieId]);

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
      {movieDetails !== null && (
        <Fragment>
          <GoBackLink/>
          <MovieDetails movieDetails={movieDetails} />
          <Suspense fallback={<div><MutatingDots
          height="100"
          width="100"
          color="#5800a5"
          secondaryColor="#e08e00"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        /></div>}>
          <Outlet />
          </Suspense>
          </Fragment>
      )}
      
    </div>
  );
};

export default MovieDetailsPage;