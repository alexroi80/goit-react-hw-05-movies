import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../helpers/api";
import { toast } from 'react-toastify';
import { notificationOptions } from "components/Notification/Notification";
import { MutatingDots } from "react-loader-spinner";
import css from './Cast.mobile.css'


const Cast =()=>{
    const [cast, setCast] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { movieId } = useParams();
  
    useEffect(() => {
      if (!movieId) return;
  
      const getCast = async () => {
        try {
          setIsLoading(true);
  
          const castData = await fetchMovieCredits(movieId);
          setCast(castData);
          toast.success('Movie cast was successfully fetched!', notificationOptions);
        } catch (error) {
          setError(error.message);
          toast.error(error.message, notificationOptions);
        } finally {
          setIsLoading(false);
        }
      };
  
      getCast();
    }, [movieId]);

    return(
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
      {cast !== null && (
        <ul>
         {cast.map (({name, profile_path, cast_id, character}) => {
            return (<li key={cast_id}>
               {<img src={'https://image.tmdb.org/t/p/w200'+profile_path} alt={name}/>}
                <h2 className={css.name}>{name}</h2>
                <p className={css.character}>Character: {character}</p>
            </li>);
         })}
          </ul>
        
      )}
      
    </div>
    );

  
}

export default Cast;