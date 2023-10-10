import React from 'react';
import {SiFacebook , SiInstagram , SiTwitter } from "react-icons/si"
import { Link } from 'react-router-dom';

export default function Footer() {
  return <>

   <div className='text-white flex gap-5 justify-between items-center md:flex-row flex-col p-5 bg-[#1F1F1F]'>
        <div className='flex flex-col'>
            <span className='text-white '> © 2023 ZIDAN™. All Rights Reserved. </span>
            <div className='flex'>
                <SiFacebook color='#f3c93d' size={20} className='me-1'   />
                <SiInstagram color='#f3c93d' size={20} className='mx-1'   />
                <SiTwitter color='#f3c93d' size={20} className='mx-1'   />
            </div>
        </div>
        <div className='flex md:justify-center justify-start flex-wrap'>
            <Link className='m-1 border py-1 px-3 rounded ' to={"/"}> <span> Home </span></Link>
            <Link className='m-1 border py-1 px-3 rounded ' to={"/movies"}> <span> Movies </span></Link>
            <Link className='m-1 border py-1 px-3 rounded ' to={"/tv"}> <span> TV </span></Link>
            <Link className='m-1 border py-1 px-3 rounded ' to={"/search"}> <span> Search </span></Link>
        </div>
   </div>
  </>
}
