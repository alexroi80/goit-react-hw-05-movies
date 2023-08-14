import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY= 'd2ed1712f75ea64103909f0dfb022753';

export const fetchTrendingMovies = async () => {
  const {data} = await axios.get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
  return data.results;
};

export const fetchSearchMovie = async movie => {
    const { data } = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query='${movie}'`);
    return data.results;
  };

export const fetchMovieDetails = async movieId => {
  const {data} = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  return data;
};

export const fetchMovieCredits = async movieId => {
  const {data} = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return data.cast;
};
export const fetchMovieReviews = async movieId => {
    const {data} = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    return data.results;
  };
