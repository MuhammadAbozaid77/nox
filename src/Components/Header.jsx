import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {HiOutlineBars3BottomRight} from "react-icons/hi2"
import {FaInstagram, FaPlay, FaSpotify, FaTwitter, FaUser} from "react-icons/fa";
import {MdOutlineLogout} from "react-icons/md";
import {FiSearch} from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { LogOutFun } from '../Redux/authSlice';
import {FaFacebook} from "react-icons/fa"

export default function Header() {
    let dispatch = useDispatch();
    let { userToken } = useSelector((state)=>state.authSlice_In_Store);
    
    const [iconBar, setIconBar] = useState("hidden");
    let iconBarFun = ()=>{
        if(iconBar === "hidden"){
            setIconBar("flex")
        }else {
            setIconBar("hidden")
        }
    }
  return <>
      <nav className='flex justify-between p-3 bg-[#1F1F1F]'>
        <div>
            <FaPlay color='#f3c93d' size={40} />
        </div>
        <div className='md:flex justify-between items-center md:flex-row flex-col hidden w-[100%] px-5'>
            <ul className='flex md:flex-row  flex-col items-center'>
                <li className='mx-1 p-1'> <Link to="/">  <span className='text-[18px] text-white'> Home </span> </Link> </li>
                                {  userToken.length > 0 ?
                    <>
                        <li className='mx-1 p-1'> <Link to="/movies">  <span className='text-[18px] text-white'> Movies </span> </Link> </li>
                        <li className='mx-1 p-1'> <Link to="/tv">  <span className='text-[18px] text-white'> TV Show </span> </Link> </li>
                        <li className='mx-1 p-1'> 
                            <Link to="/search" className='flex items-center'> 
                            <span className='mx-1'> <FiSearch color='white' size={20}/> </span> 
                            <span className='text-[18px] text-white'> Search </span> 
                            </Link> 
                        </li>
                    </>
                        :
                        ""
                }
  
            </ul>
            <ul className='flex md:flex-row  flex-col items-center'>
                <li className='mx-1 p-1 text-white flex justify-center items-center'>
                    <span className='me-2 cursor-pointer'> <FaFacebook size={20}/></span>
                    <span className='me-2 cursor-pointer'> <FaTwitter size={20}/></span>
                    <span className='me-2 cursor-pointer'> <FaSpotify size={20}/></span>
                    <span className='me-2 cursor-pointer'> <FaInstagram size={20}/></span>
                </li>
                {  userToken.length > 0 ?
                    <>
                        <li className='mx-1 p-1'> <Link to="/profile">  <span className='text-[18px] text-[#f3c93d]'> <FaUser size={20} /> </span> </Link> </li>
                        <li className='cursor-pointer mx-1 p-1 flex justify-center items-center' onClick={()=>dispatch(LogOutFun())}> 
                                <span className='mx-1 text-[#f3c93d]'> <MdOutlineLogout size={20}/> </span>
                                <span className='text-[18px] text-white'>  Logout </span> 
                        </li>
                    </>
                        :
                        ""
                }
                {  userToken.length === 0 ?
                    <>
                        <li className='mx-1 p-1'> <Link to="/login">  <span className='text-[18px] text-white'> Login </span> </Link> </li>
                        <li className='mx-1 p-1'> <Link to="/registeration">  <span className='text-[18px] text-white'> Registiration </span> </Link> </li>
                    </>
                        :
                        ""
                }
            </ul>
        </div>
        <div className='md:hidden block cursor-pointer' onClick={()=>iconBarFun()}>
            <HiOutlineBars3BottomRight color='white' size={25} />
        </div>
      </nav>
        <div className={`${iconBar} md:hidden items-start flex-col bg-[#333333] shadow p-3`}>
            <ul className='flex md:flex-row  flex-col items-start'>
                <li className='mx-1 p-1'> <Link to="/">  <span className='text-[18px] text-white'> Home </span> </Link> </li>
                {
                    userToken.length > 0 ?
                    <>
                        <li className='mx-1 p-1'> <Link to="/movies">  <span className='text-[18px] text-white'> Movies </span> </Link> </li>
                        <li className='mx-1 p-1'> <Link to="/tv">  <span className='text-[18px] text-white'> TV Show </span> </Link> </li>
                        <li className='mx-1 p-1'> 
                          <Link to="/search" className='flex justify-center items-center'>  
                            <span className='text-[18px] text-[#f3c93d] me-2'> <FiSearch/> </span> 
                            <span className='text-[18px] text-white'> Search </span> 
                          </Link> </li>
                    </>
                    :
                    ""
                }
            </ul>
            <ul className='flex md:flex-row  flex-col items-start'>
                <li className='mx-1 p-1 text-white flex justify-center items-center'>
                    <span className='me-2 cursor-pointer'> <FaFacebook size={20}/></span>
                    <span className='me-2 cursor-pointer'> <FaTwitter size={20}/></span>
                    <span className='me-2 cursor-pointer'> <FaSpotify size={20}/></span>
                    <span className='me-2 cursor-pointer'> <FaInstagram size={20}/></span>
                </li>
            {
                    userToken.length > 0 ?
                    <>
                        <li className='mx-1 p-1'> 
                            <Link to="/profile" className=' flex justify-center items-center'>  
                                <span className='text-[#f3c93d] me-1'> <FaUser size={20} /></span>
                                <span className='text-[18px] text-white'>  User </span> 
                            </Link> 
                        </li>
                        <li className='mx-1 p-1 flex justify-center items-center' onClick={()=>dispatch(LogOutFun())}> 
                                <span className='me-1 text-[#f3c93d]'> <MdOutlineLogout size={20}/> </span>
                                <span className='text-[18px] text-white cursor-pointer'>  Logout </span> 
                        </li>
                    </>
                    :
                    ""
                }
                                {
                    userToken.length === 0 ?
                    <>
                        <li className='mx-1 p-1'> <Link to="/login">  <span className='text-[18px] text-white'> Login </span> </Link> </li>
                        <li className='mx-1 p-1'> <Link to="/registeration">  <span className='text-[18px] text-white'> Registiration </span> </Link> </li>
                    </>
                    :
                    ""
                }
            </ul>
        </div>
  </>
}
