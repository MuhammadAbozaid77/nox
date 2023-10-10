import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveUserData, sendLoginData } from '../Redux/authSlice';



export default function Login() {
  let navigate = useNavigate();
  let { login_ErrorMessage , userToken } = useSelector((state)=>state.authSlice_In_Store);
  let dispatch = useDispatch();

  let handelValidate = (values)=>{
    let errors = {};
    // ----------------------------------------------------------------------------------------
    // Email ------------------------
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
     // Password ------------------------
     if (!values.password) {
      errors.password = 'Required';
    } else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i.test(values.password)) {
      errors.password = 'Password is Not Good';
    }
    // ----------------------------------------------------------------------------------------
    return errors ; 
}
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validate : handelValidate ,
    onSubmit : (values)=>{
        dispatch(sendLoginData(values))
    },

  });
  useEffect(() => {
    if(userToken.length > 0 ){
      localStorage.setItem("UserToken" , userToken );
      dispatch(saveUserData(userToken))
      navigate("/");
    }
  }, [dispatch, navigate, userToken]);
  
  return <>
  <div className='flex justify-center items-center md:p-0 p-[50px]'>
          <form className='md:mt-[100px] mt-[20px] rounded border md:w-[400px] w-[100%] p-4 shadow-md border-slate-500 bg-[#202020]' onSubmit={formik.handleSubmit} >
                {login_ErrorMessage.length > 0 ? 
                  <div className='p-2 font-semibold bg-[#FF4949] rounded text-[12px] text-white mt-1 '> 
                    {login_ErrorMessage} 
                  </div> : "" 
                }
              <div className='flex flex-col mt-3 '>
                  <label className='text-[12px] mb-1 text-white' htmlFor="email"> Email </label>
                  <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} className='rounded  p-1 text-[14px] text-white focus:outline-none bg-[#363636]' type="email" name="" id="email" />
                  {
                    formik.errors.email && formik.touched.email ? 
                      <span className='p-2 font-semibold bg-[#FF4949] rounded text-[12px] text-white mt-1 '> {formik.errors.email} </span>
                    : ""
                  }
              </div>
              <div className='flex flex-col mt-3 '>
                  <label className='text-[12px] mb-1 text-white' htmlFor="password"> Password </label>
                  <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} className='rounded  p-1 text-[14px] text-white focus:outline-none bg-[#363636]' type="password" name="" id="password" />
                  {
                    formik.errors.password && formik.touched.password ? 
                      <span className='p-2 font-semibold bg-[#FF4949] rounded text-[12px] text-white mt-1 '> {formik.errors.password} </span>
                    : ""
                  }
              </div>
              <button disabled={!formik.isValid} className='my-3 py-3 px-1 shadow-md bg-[#f3c93d] w-[100%] text-[14px] font-semibold text-black' type='submit'> LogIn </button>
          </form>
      </div>
  </>
}
