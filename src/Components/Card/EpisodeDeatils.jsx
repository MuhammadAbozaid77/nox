import React from 'react';
import {useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { FaGrinStars, FaLanguage, FaPlay, FaStar } from 'react-icons/fa';
import {BiLogoInternetExplorer, BiSolidTimeFive} from "react-icons/bi"
import {BsFillArrowUpRightCircleFill, BsFillCalendarDateFill} from "react-icons/bs";
import {IoIosPeople} from "react-icons/io";
import {SiFacebook , SiInstagram , SiTwitter } from "react-icons/si";
import {RiUserFollowFill } from "react-icons/ri";
import actorPic from "./../../pic/images.png"


export default function EpisodeDeatils() {
  let {episodeID} = useParams();
  let {episodes} = useSelector((state)=>state.apiDataSlice_In_Store);

  
  return <>
    {
      episodes?.filter((item)=>item.id == episodeID).map((item , index)=>(
          <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 p-2 mt-3'>
            <div className='lg:col-span-1 md:col-span-1 col-span-1 flex justify-center px-2'  key={index}>
                  <img  className='border md:h-[400px] h-[250px]' src={`https://image.tmdb.org/t/p/original${item.still_path}`} alt="" />
            </div>
            <div className='lg:col-span-2 md:col-span-2 col-span-1 px-2 md:mt-0 mt-4'>
                  <div className='flex items-center py-1 px-3 rounded-b-lg bg-[#303030] text-white '> 
                      <div className='text-[30px]'> <FaPlay className='me-2 text-[#f3c93d]' /> </div>
                      <div>
                          <div className='md:text-[30px] text-[20px] font-bold'> {item.name}  </div>
                          <div className='text-[#f3c93d]'> {item.tagline}  </div>
                      </div>
                  </div>
                  <div className='flex items-center mt-2 py-1'>
                      {
                        item?.genres?.map((item , index)=>(
                            <span className='bg-[#303030] px-2 text-[14px] text-white rounded me-1'  key={index}> {item.name} </span>
                        ))
                      }
                  </div>
                  <div className='mt-2 text-white'> 
                      <span className='text-[#f3c93d] text-[14px]'> Overview :</span> 
                      <span className='block ps-3 text-[12px]'> {item.overview}  </span> 
                  </div>
                  <div className='mt-2 py-1'>
                        <button className='rounded bg-[#f3c93d] hover:bg-[#d3ae34] p-2 text-[20px] text-black font-semibold '> Watch and Download </button>
                  </div>
                  <div className='mt-2 py-1'>
                      <span className='text-[#f3c93d] me-1 text-[14px] block'> Guest Stars :  : </span> 
                      <div className='flex justify-start items-end flex-wrap'> 
                          {
                            item?.guest_stars?.map((item , index)=>(
                              <div className='flex justify-center items-center flex-col flex-wrap' key={index}>
                                <span className='w-[85px]'> 
                                  <img className='w-[80px] bg-white border my-1 rounded' 
                                        src={item.profile_path ? `https://image.tmdb.org/t/p/original${item.profile_path}` : actorPic} 
                                        alt={item.name}/>
                                </span>
                                <span className='bg-[#303030] px-2 text-[14px] text-[#f3c93d] rounded me-1'> {item.character} </span>
                                <span className='bg-[#303030] px-2 text-[14px] text-white rounded me-1'> {item.name} </span>
                              </div>
                            ))
                          }
                      </div>
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
                          item.spoken_languages?.map((item , index)=>(
                                <span className='px-1 me-1'  key={index}> {item.name} </span> 
                          ))
                        }
                        </span> 
                      </div>
                  </div>
                  <div className='flex items-center p-2 mt-2 md:text-[14px] text-[12px] bg-[#303030] text-white'> 
                      <span className='block text-[#f3c93d] me-1'> <BsFillCalendarDateFill size={20} /> </span>
                      <span className='block text-[#f3c93d]'> Release Date : </span>
                      <span className='px-1 me-1'> {item.air_date} </span>  
                  </div>
                  <div className='flex items-center p-2 mt-2 md:text-[14px] text-[12px] bg-[#303030] text-white'> 
                      <span className='block text-[#f3c93d] me-1'> <BiSolidTimeFive size={20} /> </span>
                      <span className='block text-[#f3c93d]'> Time : </span>
                      <span className='px-1 me-1'> {item.runtime} min </span>  
                  </div>
                  <div className='flex items-center p-2 mt-2 md:text-[14px] text-[12px] bg-[#303030] text-white'> 
                      <span className='block text-[#f3c93d] me-1'> <FaStar size={20} /> </span>
                      <span className='block text-[#f3c93d]'> Rating : </span>
                      <span className='px-1 me-1'> {item.vote_average} </span>  
                  </div>
                  <div className='flex items-center p-2 mt-2 md:text-[14px] text-[12px] bg-[#303030] text-white'> 
                      <span className='block text-[#f3c93d] me-1'> <IoIosPeople size={20} /> </span>
                      <span className='block text-[#f3c93d]'> Vote : </span>
                      <span className='px-1 me-1'> {item.vote_count} </span>  
                  </div>
                  <div className='flex items-center p-2 mt-2 md:text-[14px] text-[12px] bg-[#303030] text-white'> 
                      <span className='block text-[#f3c93d] me-1'> <BiLogoInternetExplorer size={20} /> </span>
                      <span className='block text-[#f3c93d]'> Website : </span>
                      <span className='px-1 me-1 cursor-pointer'> 
                        <Link className='flex items-center' target='_blank' to={item.homepage}> 
                          <span className='mx-1'> Here </span>
                          <span>  <BsFillArrowUpRightCircleFill size={20}/> </span>
                        </Link> 
                      </span>  
                  </div>
                  <div className='flex items-center p-2 mt-2 md:text-[14px] text-[12px] bg-[#303030] text-white'> 
                      <span className='block text-[#f3c93d] me-1'> <FaGrinStars size={20} /> </span>
                      <span className='block text-[#f3c93d]'> Episode : </span>
                      <span className='px-1 me-1'> {item.episode_number} </span>  
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
      ))
      }
  </>
}
