import React from 'react';
import  { BsPlayCircle} from "react-icons/bs";
import { FaStar } from 'react-icons/fa';
import  { FiAirplay} from "react-icons/fi";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function TopRatedMovieCard() {
  let {topRatedMovies} = useSelector((state)=>state.apiDataSlice_In_Store)
  return <>
    <div className='flex md:justify-start justify-center items-center px-5 py-3 mt-[10px]'> 
        <span className='text-[40px] text-[#f3c93d] me-3'> <FiAirplay/> </span> 
        <span className='text-[30px] text-white'>  Top  Rated Movies  </span> 
    </div>
    <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 p-5'>
      {
        topRatedMovies.slice(0,10).map((movie , index)=>(
          <div className='border rounded-md' key={index}>
          <div className='relative flex justify-center items-center'>
              <img className='w-[100%] rounded-t' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
              <Link to={`/movieDetails/${movie.id}`}>
                  <div className='cursor-pointer absolute inset-0 hover:bg-[#ffffff79] rounded-md flex justify-center items-center'>
                      <div className=''> <BsPlayCircle size={70} color='black' /> </div>
                  </div>
              </Link>
              <div className='absolute top-[10px] right-[10px] w-[40px] h-[50px] bg-[#f3c93d] flex justify-center items-center rounded-md'>
                    <span className='text-[14px] text-black flex justify-center flex-wrap items-center'> <FaStar size={20} color='white' className='mx-1' /> {movie.vote_average.toFixed(1)} </span>
              </div>
          </div>
          <div className='bg-white h-[80px] p-2 rounded-b flex justify-center items-center'>
              <div className='bg-white h-[80px] p-2 rounded-b flex justify-center items-center'>
              <div className='w-[100%] overflow-hidden'>
                  <div className='flex items-center justify-center'>  
                    <span className='text-[16px] font-semibold'> {movie.title} </span>
                  </div>
              </div>
          </div>
          </div>
      </div>
        ))
      }
    </div>
  </>
}
