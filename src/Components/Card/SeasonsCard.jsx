import React from 'react'
import { BsPlayCircle } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import pic2 from "./../../pic/movie.jpg";


export default function SeasonsCard({seasons , tvID}) {

  return <>
  
  <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 p-5'>
      {
        seasons?.map((season , index)=>(
          <div className='rounded-md' key={index}>
          <div className='relative flex justify-center items-center'>
                <img className='w-[100%] rounded-t border' 
                    src={season.poster_path ? `https://image.tmdb.org/t/p/original${season.poster_path}` : pic2} alt="" />
                <Link to={`/seasondeatils/${tvID}/${season.season_number}`}> 
                    <div className='cursor-pointer absolute inset-0 hover:bg-[#ffffff79] rounded-md flex justify-center items-center'>
                        <div className=''> <BsPlayCircle size={70} color='black' /> </div>
                    </div>
                </Link>
                <div className='absolute top-[10px] right-[10px] w-[40px] h-[50px] bg-blue-500 flex justify-center items-center rounded-md'>
                      <span className='text-[14px] text-black flex justify-center flex-wrap items-center'> <FaStar size={20} color='white' className='mx-1' /> {season.vote_average.toFixed(1)} </span>
                </div>
          </div>
          <div className='bg-white h-[80px] p-2 rounded-b flex justify-center items-center'>
              <div className='bg-white h-[60px] p-2 rounded-b flex justify-center items-center'>
              <div className='w-[100%] overflow-hidden'>
                  <div className='flex items-center justify-between'>  
                    <span className='text-[16px] font-semibold'> {season.name.slice(0,30)} </span>
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
