import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sendRegisterData } from '../Redux/authSlice';



export default function Registiration() {
  let navigate = useNavigate();
  let {registerSuccess , errorMessage } = useSelector((state)=>state.authSlice_In_Store);
  let dispath = useDispatch();
  let handelValidate = (values)=>{
    let errors = {};
    //----------------------------------------------------------------------------------------
    // Name ------------------------
    if (!values.name) {
      errors.name = 'Required';
    } else if (!/^[a-zA-Z]{5,}$/i.test(values.name)) {
      errors.name = 'Invalid Name';
    }
    // Email ------------------------
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    // Phone ------------------------
    if (!values.phone) {
      errors.phone = 'Required';
    } else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i.test(values.phone)) {
      errors.phone = 'Invalid Phone';
    }
    // Password ------------------------
    if (!values.password) {
      errors.password = 'Required';
    } else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i.test(values.password)) {
      errors.password = 'Password is Not Good';
    }
    // RePassword
    if (!values.rePassword) {
      errors.rePassword = 'Required';
    } else if (values.rePassword !== values.password) {
      errors.rePassword = 'RePassword Not Matched';
    }
    //----------------------------------------------------------------------------------------
    return errors ; 
}
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      rePassword: '',
    },
    validate: handelValidate ,
    onSubmit : (values)=>{
       dispath(sendRegisterData(values));
    }
  });
  useEffect(() => {
    if(registerSuccess){
      navigate("/login");
    }
  }, [navigate, registerSuccess]);
  
  return <>
      <div className=' flex justify-center items-center md:p-0 p-[50px]'>
          <form className='rounded md:mt-[60px] mt-[20px]  border md:w-[400px] w-[100%] p-4 shadow-md border-slate-500 bg-[#202020]' onSubmit={formik.handleSubmit} >
                {errorMessage.length > 0 ? 
                  <div className='p-2 font-semibold bg-[#FF4949] rounded text-[12px] text-white mt-1 '> 
                    {errorMessage} 
                  </div> : "" 
                }
              <div className='flex flex-col mt-3 '>
                  <label className='text-[12px] mb-1 text-white' htmlFor="name"> Name </label>
                  <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} className='rounded  p-1 text-[14px] text-white focus:outline-none bg-[#363636]' type="text" name="" id="name" />
                  {
                    formik.errors.name && formik.touched.name ? 
                      <span className='p-2 font-semibold bg-[#FF4949] rounded text-[12px] text-white mt-1 '> {formik.errors.name} </span>
                    : ""
                  }
              </div>
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
                  <label className='text-[12px] mb-1 text-white' htmlFor="phone"> Phone </label>
                  <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} className='rounded  p-1 text-[14px] text-white focus:outline-none bg-[#363636]' type="text" name="" id="phone" />
                  {
                    formik.errors.phone && formik.touched.phone ? 
                      <span className='p-2 font-semibold bg-[#FF4949] rounded text-[12px] text-white mt-1 '> {formik.errors.phone} </span>
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
              <div className='flex flex-col mt-3 '>
                  <label className='text-[12px] mb-1 text-white' htmlFor="rePassword"> RePassword </label>
                  <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword} className='rounded  p-1 text-[14px] text-white focus:outline-none bg-[#363636]' type="password" name="" id="rePassword" />
                  {
                    formik.errors.rePassword && formik.touched.rePassword ? 
                      <span className='p-2 font-semibold bg-[#FF4949] rounded text-[12px] text-white mt-1 '> {formik.errors.rePassword} </span>
                    : ""
                  }
              </div>
              <button disabled={!formik.isValid} className='my-3 py-3 px-1 shadow-md bg-[#f3c93d] w-[100%] text-[14px] font-semibold text-black' type='submit'> Create An Account </button>
          </form>
      </div>
  </>
}
