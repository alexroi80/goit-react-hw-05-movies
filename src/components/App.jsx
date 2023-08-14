import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "./Layout";

const HomePage=lazy(()=>import('../pages/HomePage'));
const MoviesPage = lazy(()=>import('../pages/MoviesPage'));
const MovieDetailsPage = lazy(()=>import('../pages/MovieDetailsPage'));
const Cast = lazy(()=>import('./Cast/Cast.jsx'));
const Reviews = lazy(()=>import('../components/Reviews/Reviews.jsx'));
const NotFound = lazy(()=>import('../pages/NotFound'));


export const App = () => {
  return (
    

    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<HomePage />} />
      <Route path="movies" element={<MoviesPage />} />
      <Route path="movies/:movieId" element={<MovieDetailsPage />} >
        <Route path="cast" element={<Cast/>}/>
        <Route path="reviews" element={<Reviews/>}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
      </Route>
      </Routes>
 
  );
};
