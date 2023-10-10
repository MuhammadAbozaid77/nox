import React, { useEffect } from 'react';
import { getTopRatedTv, getTrendingTv } from '../Redux/apiDataSlice';
import { useDispatch, useSelector } from 'react-redux';
import TopRatedTvCard from "./Card/TopRatedTvCard"
import TrendingTv from './Card/TrendingTv';

export default function Movies() {
  let dispatch = useDispatch(); 
  
  useEffect(() => {
    dispatch(getTopRatedTv());
    dispatch(getTrendingTv());
  }, [])
  return <>
      <TopRatedTvCard />

      <TrendingTv />
  </>
}




// 