import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../helpers/api";
import { toast } from 'react-toastify';
import { notificationOptions } from "components/Notification/Notification";
import { MutatingDots } from "react-loader-spinner";



const Reviews =()=>{
    const [reviews, setReviews] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { movieId } = useParams();

    const checkReviews = Array.isArray(reviews) && reviews.length > 0;
    const noRewievs = Array.isArray(reviews) && reviews.length === 0;

    useEffect(() => {
      if (!movieId) return;
  
      const getReviews = async () => {
        try {
          setIsLoading(true);
  
          const movieReviews = await fetchMovieReviews(movieId);
          setReviews(movieReviews);
          toast.success('Movie reviews were successfully fetched!', notificationOptions);
        } catch (error) {
          setError(error.message);
          toast.error(error.message, notificationOptions);
        } finally {
          setIsLoading(false);
        }
      };
  
      getReviews();
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
      {noRewievs && <p>We do not have any review for this movie</p>}
      {checkReviews && (
        <ul>
         {reviews.map (({author, content, id}) => {
            return (<li key={id}>
                <h2>{author}</h2>
                <p>{content}</p>
            </li>);
         })}
          </ul>
        
      )}
      
    </div>
    );
}

export default Reviews;