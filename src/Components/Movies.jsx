import React, { useEffect } from 'react';
import { getTopRatedMovies, getTrendingMovies } from '../Redux/apiDataSlice';
import { useDispatch, useSelector } from 'react-redux';
import TopRatedMovieCard from "./Card/TopRatedMovieCard";
import TrendingMovies from "./Card/TrendingMovies";

export default function Movies() {
  let dispatch = useDispatch(); 
  
  useEffect(() => {
    dispatch(getTopRatedMovies());
    dispatch(getTrendingMovies());
  }, [])
  return <>
      <TopRatedMovieCard />
      <TrendingMovies />
  </>
}
