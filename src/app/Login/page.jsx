'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { TiEye } from "react-icons/ti";
import { LuEyeClosed } from "react-icons/lu";
import axios from 'axios'
function Page() {
  const [error, setError]=useState("");
  const [success, setSuccess]=useState("");
 const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try{
      const response = await axios.post("/api/auth/login",data);
      if(response.data.token){
       alert("Login Successful");
       alert(`Login as a ${response.data.user.role}`)
  localStorage.setItem("token", response.data.token);
  localStorage.setItem("userId", response.data.user.id); 

  setError("");
  reset();
  window.location.href = "/";
      }
    }catch(error){
      console.log(error)
      alert("Login Failed")
      setError("Invalid credentials");
      setSuccess('')
    }
    }
    const [passwordHidden,setPasswordHidden]=useState(true)
  return (
    <section className=' w-screen h-screen quaternary-bg flex justify-center items-center relative overflow-hidden'>
        <Link href='/' className="absolute top-4 left-4">
        <h1 className="primary-color text-5xl font-semibold heading-font w-full">
          Fashion<span className="secondary-color">Store</span>
        </h1>
        </Link>
        <div className='w-[25rem] rounded-lg h-[30rem] backdrop-blur-md bg-white/30 flex flex-col gap-4 items-center p-4 border-2 tertiary-border shadow-xl'> 
        <h2 className='text-4xl font-bold tertiary-color'>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-8 my-4 items-center" >
            <div className='flex flex-col gap-1 w-full'>
                <label htmlFor="email " className="tertiary-color font-semibold">Email*</label>
            <input type="email" placeholder='example@xyz.com' name='email' required className='w-full p-1.5 border tertiary-border primary-bg focus:outline-[#EB5B00] tertiary-color rounded-lg' {...register("email")} />
            </div>
            <div className='flex flex-col gap-1 w-full'>
                <label htmlFor="password " className="tertiary-color font-semibold">Password*</label>
            <div className='w-full flex relative items-center'>
            <input type={passwordHidden?"password":"text"} placeholder='Password' name='password' required className='w-full p-1.5 border tertiary-border primary-bg focus:outline-[#EB5B00] tertiary-color  rounded-lg' {...register("password")} />
            <span className='absolute right-[5%] text-2xl tertiary-color cursor-pointer' onClick={()=>setPasswordHidden(!passwordHidden)}>
              {passwordHidden?<TiEye />:<LuEyeClosed />}
            </span>
            </div>
            </div>
            <input type="submit" className="w-40 py-1.5 text-lg font-semibold text-center bg-[#DDEB9D] border border-[#A0C878] text-[#143D60] hover:text-[#DDEB9D] hover:bg-[#143D60] duration-200 rounded-lg cursor-pointer" value="Login"  />
        </form>
        <span className="font-medium tertiary-color">Create new account.<Link href='/Signup' className="text-blue-700 underline"> SignUp</Link></span>
        </div>
        <span className='primary-bg w-60 h-60 rounded-full absolute -right-16 -bottom-16'></span>
    </section>
  )
}
export default Page
