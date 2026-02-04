"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { TiEye } from "react-icons/ti";
import { LuEyeClosed } from "react-icons/lu";
import axios from "axios";
function Page() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({defaultValues:{role:"buyer"}});
  const onSubmit = async (data) => {
    if (data.password === data.confirmpassword) {
      try {
        const response = await axios.post(
          "/api/auth/register",
          data
        );
        alert("Register Successfully!");
        reset();
        window.location.href = "/Login";
      } catch (error) {
        console.log(error);
        alert("Signup failed");
      }
    } else {
      console.log("password and confirm password should be same");
    }
  };
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [cPasswordHidden, setCPasswordHidden] = useState(true);
  return (
    <section className=" w-screen h-screen quaternary-bg flex justify-center items-center relative overflow-hidden ">
      <Link href="/" className="absolute top-4 left-4">
        <h1 className="primary-color text-5xl font-semibold heading-font w-full">
          Fashion<span className="secondary-color">Store</span>
        </h1>
      </Link>
      <div className="overflow-y-scroll w-[25rem] rounded-lg h-[30rem] backdrop-blur-md bg-white/30 flex flex-col gap-4 items-center p-4 border-2 tertiary-border shadow-xl hide-scrollbar ">
        <h2 className="text-4xl font-bold tertiary-color">Signup</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-2 items-center">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="name " className="tertiary-color font-semibold">
              Username*
            </label>
            <input
              type="text" placeholder="Username" name="username" required className="w-full p-1.5 border tertiary-border primary-bg focus:outline-[#EB5B00] tertiary-color rounded-lg"
              {...register("username")}/>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="email " className="tertiary-color font-semibold">
              Email*
            </label>
            <input
              type="email"
              placeholder="example@xyz.com"
              name="email"
              required
              className="w-full p-1.5 border tertiary-border primary-bg focus:outline-[#EB5B00] tertiary-color rounded-lg"
              {...register("email")}
            />
          </div>
          <div className="flex gap-4 items-center w-full tertiary-color">
            <div className="flex gap-2 items-center">
            <input type="radio" id="buyer" name="role" value='buyer' {...register("role")} required />
              <label htmlFor="buyer">Buyer Account</label>
            </div>
            <div className="flex gap-2 items-center">
            <input type="radio" id="seller" name="role" value='seller' {...register("role")} required />
              <label htmlFor="seller">Seller Account</label>
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="password " className="tertiary-color font-semibold">
              Password*
            </label>
            <div className="w-full flex relative items-center">
              <input
                type={passwordHidden ? "password" : "text"}
                placeholder="Password"
                name="password"
                required
                className="w-full p-1.5 border tertiary-border primary-bg focus:outline-[#EB5B00] tertiary-color  rounded-lg"
                {...register("password")}
              />
              <span
                className="absolute right-[5%] text-2xl tertiary-color cursor-pointer"
                onClick={() => setPasswordHidden(!passwordHidden)}
              >
                {passwordHidden ? <TiEye /> : <LuEyeClosed />}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="confirmpassword "
              className="tertiary-color font-semibold"
            >
              confirm Password*
            </label>
            <div className="w-full flex relative items-center">
              <input
                type={cPasswordHidden ? "password" : "text"}
                placeholder="Password"
                name="confirmpassword"
                required
                className="w-full p-1.5 border tertiary-border primary-bg focus:outline-[#EB5B00] tertiary-color  rounded-lg"
                {...register("confirmpassword")}
              />
              <span className="absolute right-[5%] text-2xl tertiary-color cursor-pointer" onClick={() => setCPasswordHidden(!cPasswordHidden)}>
                {cPasswordHidden ? <TiEye /> : <LuEyeClosed />}
              </span>
            </div>
          </div>
          <input
            type="submit"
            className="w-40 py-1.5 text-lg font-semibold text-center bg-[#DDEB9D] border border-[#A0C878] text-[#143D60] hover:text-[#DDEB9D] hover:bg-[#143D60] duration-200 rounded-lg cursor-pointer"
            value="Signup"
          />
        </form>
        <span className="font-medium tertiary-color">
          Already have an account.{" "}
          <Link href="/Login" className="text-blue-700 underline">
            Login
          </Link>
        </span>
      </div>
      <span className="primary-bg w-60 h-60 rounded-full absolute -right-16 -bottom-16"></span>
    </section>
  );
}
export default Page;