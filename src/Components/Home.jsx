import React, { useEffect }  from 'react';
import TrendingMovies from "./Card/TrendingMovies";
import TrendingTv from "./Card/TrendingTv";
import HomeSlider from "./HomeSlider";
import { useDispatch, useSelector } from 'react-redux';
import { getTrendingMovies, getTrendingTv } from '../Redux/apiDataSlice';
import { FaPlay } from 'react-icons/fa';
import { saveUserData } from '../Redux/authSlice';


export default function Home() {
  let dispatch = useDispatch();



useEffect(() => {
  dispatch(getTrendingMovies());
  dispatch(getTrendingTv());
}, [dispatch]);
  
  return <>
    <div className='flex justify-center items-center mt-[20px]'>
        <span className='text-[#f3c93d]  me-3'> <FaPlay color='#f3c93d' size={40} /></span>
        <span className='text-[30px] text-white font-bold'> NOXE MOVIES </span>
    </div>
    <HomeSlider/>
    <TrendingTv/>
    <TrendingMovies/>
  </>
}
