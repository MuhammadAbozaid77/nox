import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

export default function Notfound() {
  return <>
  <Header/>
  <div className='h-[100vh] flex justify-center items-center'>
        <h1 className='text-[50px] text-white/80 '> Page Not Found </h1>
  </div>
  <Footer/>
  </>
}
