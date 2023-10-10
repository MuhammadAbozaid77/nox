import React, { useRef } from 'react';
import {BiSearch} from "react-icons/bi";
import  { BsPlayCircle} from "react-icons/bs";
import { FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { dataSearching } from '../Redux/apiDataSlice';
import pic from "./../pic/movie.jpg";


export default function Search() {
  let {searchingData} = useSelector((state)=>state.apiDataSlice_In_Store);
  let dispatch = useDispatch(); 
  let ref = useRef();
  let ref2 = useRef();

  console.log(searchingData)
  return <>
  
  <div className='my-3 p-3 flex justify-between items-center'>
      <div className='w-[100%]'> 
        <input ref={ref} type="search" className='rounded focus:outline-none text-[16px] w-[100%] p-2' name="" id="" /> 
      </div>
      <div className='mx-1 '>
         <select className='bg-[#f3c93d] p-2 rounded text-black' ref={ref2} name="" id="">
            <option value="tv"> Tv </option>
            <option value="movie"> Movie </option>
         </select>
      </div>
      <div  onClick={()=>dispatch(dataSearching({ref , ref2}))}
            className='rounded w-[80px] flex justify-center items-center bg-[#f3c93d] p-2 mx-1'> 
            <BiSearch size={20} color='black' className=''/> 
      </div>
  </div>  
  <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 p-5'>
      {
        searchingData.slice(0,10).map((movie , index)=>(
          
            
          <>
            <div className='rounded-md' key={index}>

                    <div className='relative flex justify-center items-center'>
                        {  movie.poster_path ? 
                          <img className='w-[100%] border rounded-t' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
                          :
                          <img className='w-[100%] border rounded-t' src={pic} alt="" />
                        }
                        {
                          movie.title ? 
                        <>
                            <Link to={`/movieDetails/${movie.id}`}> 
                                <div className='cursor-pointer absolute inset-0 hover:bg-[#ffffff79] rounded-t flex justify-center items-center'>
                                    <div className=''> <BsPlayCircle size={70} color='black' /> </div>
                                </div>
                            </Link>
                        </>
                        :
                        <>
                            <Link to={`/tvDetails/${movie.id}`}> 
                                <div className='cursor-pointer absolute inset-0 hover:bg-[#ffffff79] rounded-t flex justify-center items-center'>
                                    <div className=''> <BsPlayCircle size={70} color='black' /> </div>
                                </div>
                            </Link>
                        </>
                        }
                        <div className='absolute top-[10px] right-[10px] w-[40px] h-[50px] bg-[#f3c93d] flex flex-col justify-center items-center rounded-md'>
                              <span> <FaStar size={20} color='white' className='mx-1' /> </span>
                              <span className='text-[14px] text-black flex justify-center flex-wrap items-center'>  {movie.vote_average.toFixed(1)} </span>
                        </div>
                    </div>
                    <div className='bg-white h-[80px] p-2 rounded-b flex justify-center items-center'>
                        <div className='w-[100%] overflow-hidden'>
                            <div className='flex items-center justify-center'>  
                              <span className='text-[16px] font-semibold'> {movie.title ? movie.title.slice(0,30) : movie.name.slice(0,30) } </span>
                            </div>
                        </div>
                    </div>
            </div>
          </>
          ))
      }
    </div>
  </>
}
