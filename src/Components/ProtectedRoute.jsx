import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Login';


export default function ProtectedRoute({children}) {
    let { userToken } = useSelector((state)=>state.authSlice_In_Store);
    if(userToken.length === 0){
        return <Login/>
    }
    else{
        return children
    }
}
