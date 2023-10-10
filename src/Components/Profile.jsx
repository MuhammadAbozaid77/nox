import React from 'react';
import { useSelector } from 'react-redux';
import {FaPlay, FaUser} from "react-icons/fa";


export default function Profile() {
  let {userData} = useSelector((state)=>state.authSlice_In_Store);
  console.log(userData)

  return <>
  
    <div className="flex justify-center items-center flex-col p-5">
        <div className='text-white mt-[20px]'>
              <FaUser size={100} />
        </div>
        <div className='mt-3 bg-yellow-500 p-2 rounded min-w-[250px]'>
            <h1 className='text-white font-semi-bold text-[16px] capitalize'> Name : {userData.name} </h1>
        </div> 
        <div className='mt-3 bg-yellow-500 p-2 rounded min-w-[250px]'>
            <h1 className='text-white font-semi-bold text-[16px] capitalize'> Role : {userData.role} </h1>
        </div>
    </div>
  
  </>
}
