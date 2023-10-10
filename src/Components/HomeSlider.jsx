import React from 'react';
import { BsPlayCircle } from 'react-icons/bs';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function HomeSlider() {
  let {trendingMovies} = useSelector((state)=>state.apiDataSlice_In_Store)
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 769 },
      items: 3
    },
    xlmobile: {
      breakpoint: { max: 769, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return <>
  <Carousel infinite={true} autoPlay={true} className='my-1' responsive={responsive} >
  {
        trendingMovies.map((movie , index)=>(
          <div className='p-5'  key={index}>
            <div className='border rounded-md' key={index}>
              <div className='relative flex justify-center items-center'>
                  <img className='w-[100%]  rounded-md' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
                  <Link to={`/movieDetails/${movie.id}`}>
                      <div className='cursor-pointer absolute inset-0  hover:bg-[#ffffff79] opacity-[40%] hover:opacity-[100%] rounded-md flex justify-center items-center'>
                          <div className=''> <BsPlayCircle size={70} color='black' /> </div>
                      </div>
                  </Link>
              </div>
            </div>
          </div>
        ))
      }
  </Carousel>;
  </>
}





