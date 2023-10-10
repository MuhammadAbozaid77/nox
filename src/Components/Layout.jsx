import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";


export default function Layout() {

  return <>
  
  <div>
      <div> 
        <Header/>
      </div>
      <div className='min-h-[100vh]'> 
          <Outlet>
              
          </Outlet>
      </div>
      <div className='' > 
        <Footer/>
      </div>
  </div>
  </>
}
