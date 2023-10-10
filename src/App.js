import React, { useEffect } from 'react';
import Layout from './Components/Layout';
import Notfound from './Components/Notfound';
import Home from './Components/Home';
import Movies from './Components/Movies';
import Tv from './Components/Tv';
import Search from './Components/Search';
import MovieDetails from './Components/MovieDetails';
import TvDetails from './Components/TvDetails';
import SeasonDeatils from './Components/SeasonDeatils';
import Login from './Components/Login';
import Registiration from './Components/Registiration';
import Profile from './Components/Profile';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import EpisodeDeatils from './Components/Card/EpisodeDeatils';
import ProtectedRoute from './Components/ProtectedRoute';
import { saveUserData } from './Redux/authSlice';
import { useDispatch } from 'react-redux';

export default function App(props) {
  
  let routers = createBrowserRouter([
    {path: "/" , element : <Layout /> , errorElement : <Notfound/>, children : [
      {index:true , element : <Home/> },
      {path: 'movies' , element : <ProtectedRoute> <Movies/> </ProtectedRoute>  },
      {path: 'tv' , element :  <ProtectedRoute> <Tv/> </ProtectedRoute> },
      {path: 'search' , element :  <ProtectedRoute> <Search/></ProtectedRoute>  },
      {path: 'movieDetails/:movieID' , element :  <ProtectedRoute> <MovieDetails/> </ProtectedRoute>   },
      {path: 'tvDetails/:tvID' , element :  <ProtectedRoute> <TvDetails/> </ProtectedRoute> },
      {path: 'seasondeatils/:tvID/:seasonNumber' , element :  <ProtectedRoute> <SeasonDeatils/> </ProtectedRoute>  },
      {path: 'episodedeatils/:episodeID' , element :  <ProtectedRoute> <EpisodeDeatils/> </ProtectedRoute>  },
      {path: 'profile' , element : <ProtectedRoute> <Profile/> </ProtectedRoute> },
      {path: 'login' , element :  <Login/>},
      {path: 'registeration' , element : <Registiration/>},
    ]}
  ])
  let dispatch = useDispatch();
  useEffect(() => {
    if(localStorage.getItem("UserToken")){
      let userTokenLocalStorage = localStorage.getItem("UserToken");
      dispatch(saveUserData(userTokenLocalStorage)) ;
    }
  }, [dispatch])

  return <RouterProvider router={routers}>
    {props.children}
  </RouterProvider>
}
