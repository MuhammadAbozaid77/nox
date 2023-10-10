import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { getTvDetails } from '../Redux/apiDataSlice';
import { FaGrinStars, FaLanguage, FaPlay, FaStar } from 'react-icons/fa';
import {BiLogoInternetExplorer, BiSolidTimeFive} from "react-icons/bi"
import {BsDisplay, BsFillArrowUpRightCircleFill, BsFillCalendarDateFill} from "react-icons/bs";
import {IoIosPeople} from "react-icons/io";
import {SiFacebook , SiInstagram , SiTwitter } from "react-icons/si";
import {RiUserFollowFill } from "react-icons/ri";
import SeasonsCard from './Card/SeasonsCard';
import logopic from './../pic/c-logo.png';


export default function TvDetails() {
  let {tvID} = useParams();
  let dispatch = useDispatch();
  let {tvDetails} = useSelector((state)=>state.apiDataSlice_In_Store)
  

  useEffect(() => {
    dispatch(getTvDetails(tvID));
  }, [dispatch, tvID]);

  return <>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 p-2 mt-3'>
            <div className='lg:col-span-1 md:col-span-1 col-span-1 flex justify-center px-2'>
                  <img  className='md:h-[400px] h-[250px] border' src={`https://image.tmdb.org/t/p/original/${tvDetails.poster_path}`} alt="" />
            </div>
            <div className='lg:col-span-2 md:col-span-2 col-span-1 px-2 md:mt-0 mt-4'>
                  <div className='flex items-center py-1 px-3 rounded-b-lg bg-[#303030] text-white '> 
                      <div className='text-[30px]'> <FaPlay className='me-2 text-[#f3c93d]' /> </div>
                      <div>
                          <div className='md:text-[30px] text-[20px] font-bold'> {tvDetails.name}  </div>
                          <div className='text-[#f3c93d]'> {tvDetails.tagline}  </div>
                      </div>
                  </div>
                  <div className='flex items-center mt-2 py-1'>
                      {
                        tvDetails?.genres?.map((item , index)=>(
                            <span className='bg-[#303030] px-2 text-[14px] text-white rounded me-1' key={index}> {item.name} </span>
                        ))
                      }
                  </div>
                  <div className='mt-2 text-white'> 
                      <span className='text-[#f3c93d] text-[14px]'> Overview :</span> 
                      <span className='block ps-3 text-[12px]'> {tvDetails.overview}  </span> 
                  </div>
                  <div className='mt-2 py-1'>
                      <span className='text-[#f3c93d] me-1 text-[14px] block'> Production Countries : </span> 
                      <div className='flex justify-start items-end'> 
                          {
                            tvDetails?.production_countries?.map((item , index)=>(
                              <span className='bg-[#303030] px-2 text-[14px] text-white rounded me-1'  key={index}> {item.name} </span>
                            ))
                          }
                      </div>
                  </div>
                  <div className='mt-2 py-1'>
                      <span className='text-[#f3c93d] me-1 text-[14px] block'> Production Companies : </span> 
                      <div className='flex justify-start items-end flex-wrap'> 
                          {
                            tvDetails?.production_companies?.map((item , index)=>(
                              <div className='flex justify-center items-center flex-col flex-wrap'  key={index}>
                                <span className='w-[85px]'> 
                                    <img className='w-[100px] bg-white border my-1 rounded p-1' 
                                         src={item.logo_path? `https://image.tmdb.org/t/p/original${item.logo_path}` : logopic } alt={item.name}/>
                                </span>
                                <span className='bg-[#303030] px-2 text-[14px] text-white rounded me-1 w-[120px]'> {item.name} </span>
                              </div>                              
                            ))
                          }
                      </div>
                  </div>
                  <div className='mt-2 py-1'>
                        <button className='rounded bg-[#f3c93d] hover:bg-[#d3ae34] p-2 text-[20px] text-black font-semibold '> Watch and Download </button>
                  </div>
            </div>
            <div className='lg:col-span-1 md:col-span-3 col-span-1 px-2 md:mt-0 mt-4 lg:block flex gap-1 flex-wrap'>
                  <div className='flex  items-start flex-col p-2 mt-2 md:text-[14px] text-[12px] bg-[#303030] text-white'> 
                      <div className='flex items-center'>
                          <span className='block text-[#f3c93d] me-1'> <FaLanguage size={20} /> </span>
                          <span className='block text-[#f3c93d]'> Language :  </span>
                      </div>
                      <div>
                        <span className='block'>
                        {
                          tvDetails.spoken_languages?.map((item , index)=>(
                                <span className='px-1 me-1' key={index}> {item.name} </span> 
                          ))
                        }
                        </span> 
                      </div>
                  </div>
                  <div className='flex items-center p-2 mt-2 md:text-[14px] text-[12px] bg-[#303030] text-white'> 
                      <span className='block text-[#f3c93d] me-1'> <BsFillCalendarDateFill size={20} /> </span>
                      <span className='block text-[#f3c93d]'> Release Date : </span>
                      <span className='px-1 me-1'> {tvDetails.first_air_date} </span>  
                  </div>
                  <div className='flex items-center p-2 mt-2 md:text-[14px] text-[12px] bg-[#303030] text-white'> 
                      <span className='block text-[#f3c93d] me-1'> <BiSolidTimeFive size={20} /> </span>
                      <span className='block text-[#f3c93d]'> Seasons : </span>
                      <span className='px-1 me-1'> {tvDetails.seasons?.length} </span>  
                  </div>
                  <div className='flex items-center p-2 mt-2 md:text-[14px] text-[12px] bg-[#303030] text-white'> 
                      <span className='block text-[#f3c93d] me-1'> <BsDisplay size={20} /> </span>
                      <span className='block text-[#f3c93d]'> Episodes : </span>
                      <span className='px-1 me-1'> {tvDetails.number_of_episodes} </span>  
                  </div>
                  <div className='flex items-center p-2 mt-2 md:text-[14px] text-[12px] bg-[#303030] text-white'> 
                      <span className='block text-[#f3c93d] me-1'> <FaStar size={20} /> </span>
                      <span className='block text-[#f3c93d]'> Rating : </span>
                      <span className='px-1 me-1'> {tvDetails.vote_average} </span>  
                  </div>
                  <div className='flex items-center p-2 mt-2 md:text-[14px] text-[12px] bg-[#303030] text-white'> 
                      <span className='block text-[#f3c93d] me-1'> <IoIosPeople size={20} /> </span>
                      <span className='block text-[#f3c93d]'> Vote : </span>
                      <span className='px-1 me-1'> {tvDetails.vote_count} </span>  
                  </div>
                  <div className='flex items-center p-2 mt-2 md:text-[14px] text-[12px] bg-[#303030] text-white'> 
                      <span className='block text-[#f3c93d] me-1'> <BiLogoInternetExplorer size={20} /> </span>
                      <span className='block text-[#f3c93d]'> Website : </span>
                      <span className='px-1 me-1 cursor-pointer'> 
                        <Link className='flex items-center' target='_blank' to={tvDetails.homepage}> 
                          <span className='mx-1'> Here </span>
                          <span>  <BsFillArrowUpRightCircleFill size={20}/> </span>
                        </Link> 
                      </span>  
                  </div>
                  <div className='flex items-center p-2 mt-2 md:text-[14px] text-[12px] bg-[#303030] text-white'> 
                      <span className='block text-[#f3c93d] me-1'> <FaGrinStars size={20} /> </span>
                      <span className='block text-[#f3c93d]'> Status : </span>
                      <span className='px-1 me-1'> {tvDetails.status} </span>  
                  </div>
                  <div className='flex items-center p-2 mt-2 md:text-[14px] text-[12px] bg-[#303030] text-white'> 
                      <span className='block text-[#f3c93d] me-1'> <RiUserFollowFill size={20} /> </span>
                      <span className='block text-[#f3c93d]'> Follow US : </span>
                      <span className='text-white mx-1'> <SiFacebook size={20} /> </span>
                      <span className='text-white mx-1'> <SiTwitter size={20} /> </span>
                      <span className='text-white mx-1'> <SiInstagram size={20} /> </span>
                  </div>
            </div>
      </div>
      <div>
          <SeasonsCard seasons={tvDetails.seasons}  tvID={tvID} />
      </div>
  </>
}

