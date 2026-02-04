'use client'
import React from "react";
import Link from "next/link"
import Header from "../Components/Header";
import { CiGift, CiHeart, CiStar } from "react-icons/ci";
import { BsBell, BsBoxSeam } from "react-icons/bs";
import { PiCreditCardDuotone, PiGearDuotone } from "react-icons/pi";
import { usePathname } from 'next/navigation';
import { HiOutlineUserCircle } from "react-icons/hi2";
import { SlLocationPin } from "react-icons/sl";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { BsFileMedical } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import Footer from "../Components/Footer";
import axios from "axios";
import Image from "next/image";
import { FaBars } from "react-icons/fa6"; 
export default function ProfileLayout({ children}) {
  const pathname=usePathname()
  const [userName,setUserName]=React.useState("user")
  const [avatarUrl, setAvatarUrl]=React.useState(null);
  const [userId, setUserId] = React.useState(null);
  const [profileMenu,setProfileMenu]=React.useState(false)
 React.useEffect(() => {
    if (typeof window !== "undefined") {
      const id = localStorage.getItem("userId");
      setUserId(id);
    }
  }, []);
  React.useEffect(() => {
    const fetchUser = async () => {
      if (!userId) return;
      try {
        const response = await axios.get(`/api/user/${userId}`);
        setUserName(response.data.username);
        if (response.data.avatar) {
          const avatarPath = `/uploads/${response.data.avatar}`;
          setAvatarUrl(avatarPath);
        } else {
          setAvatarUrl(null);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, [userId])
const deleteAvatar=async ()=>{
  try{
     await axios.put(`/api/user/remove-avatar/${userId}`);
     setAvatarUrl(null);
  }catch(error){
     console.log("Failed to delete")
  }
}
React.useEffect(()=>{
const handleResize=()=>{
  if(window.innerWidth>=768){setProfileMenu(!false)}
}
handleResize()
window.addEventListener("resize",handleResize)
return()=>window.addEventListener("resize",handleResize)
},[])
  return (
    <>
    <Header/>
    <div className="w-screen flex flex-col justify-center items-center tertiary-color">
     <div className="flex flex-col gap-2 w-[67rem] max-lg:w-full py-8 max-lg:px-2">
      <div className="flex gap-1 items-center">
        <Link className="quaternary-color hover:opacity-75 duration-200" href='/'>Home</Link>
        <span>/</span>
        <span>Account</span>
      </div>
     </div>
     <div className="hidden max-md:flex w-full justify-center px-4 max-md:px-2">
      <div className="tertiary-border border-2 w-full flex justify-center py-4 items-center rounded-xl font-light" onClick={()=>setProfileMenu(!profileMenu)}><FaBars className="font-light" />&nbsp;Profile Menu</div>
     </div>
      <div className={`${!profileMenu?"h-0 py-0":"h-auto py-4"} w-full px-2 overflow-hidden md:hidden  duration-200`}>
        <aside className="w-full py-4 flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <div className="relative">
          <div className="w-16 h-16 rounded-full flex justify-center items-center quaternary-bg primary-color text-2xl font-semibold overflow-hidden ">
          {
            avatarUrl?(<Image src={`${avatarUrl}`} alt="Avatar" width={1000} height={1000} className="w-full"/>)
            :
            <div>
              {userName[0].toUpperCase()}
            </div>
          }
          </div>
           {
            avatarUrl?<button className="absolute -bottom-6 text-xs w-24 quaternary-bg primary-color font-medium p-[1px] cursor-pointer" onClick={deleteAvatar} >Remove Avatar</button>:null
          }
          </div>  
          <div className="flex flex-col">
            <div className="text-xl font-semibold quaternary-color">{userName}</div>
            <div className="flex items-center gap-1 text-sm"><CiGift className="quaternary-color text-base" /><span >100 bonus available</span></div>
          </div>
        </div>
        <nav className="flex flex-col tertiary-color py-4">
              <Link href="/profile/orders" className={` ${ pathname === "/profile/orders" ? "tertiary-bg primary-color" : " "} flex group items-center gap-2  p-4 rounded-xl text-lg font-medium duration-200`}>
              <BsBoxSeam />
                <span className="group-hover:translate-x-1 duration-200">Orders</span>
              </Link>
              <Link href="/profile/wishlist" className={` ${ pathname === "/profile/wishlist" ? "tertiary-bg primary-color" : " "} flex group items-center gap-1  p-4 rounded-xl text-lg font-medium duration-200`}>
              <CiHeart  className="text-2xl" />
                <span className="group-hover:translate-x-1 duration-200">Wishlist</span>
              </Link>
              <Link href="/profile/payment-methods" className={` ${ pathname === "/profile/payment-methods" ? "tertiary-bg primary-color" : " "} flex group items-center gap-2  p-4 rounded-xl text-lg font-medium duration-200`}>
              <PiCreditCardDuotone  className="text-xl"  />
                <span className="group-hover:translate-x-1 duration-200">Payment methods</span>
              </Link>
              <Link href="/profile/my-reviews" className={` ${ pathname === "/profile/my-reviews" ? "tertiary-bg primary-color" : " "} flex group items-center gap-1  p-4 rounded-xl text-lg font-medium duration-200`}>
              <CiStar   className="text-2xl"  />
                <span className="group-hover:translate-x-1 duration-200">My reviews</span>
              </Link>
              <Link href="/profile/personal-info" className={` ${ pathname === "/profile/personal-info" ? "tertiary-bg primary-color" : " "} flex group items-center gap-2  p-4 rounded-xl text-lg font-medium duration-200`}>
              <HiOutlineUserCircle  className="text-xl" />
                <span className="group-hover:translate-x-1 duration-200">Personal info</span>
              </Link>
              <Link href="/profile/address" className={` ${ pathname === "/profile/address" ? "tertiary-bg primary-color" : " "} flex group items-center gap-2  p-4 rounded-xl text-lg font-medium duration-200`}>
              <SlLocationPin   className="text-xl" />
                <span className="group-hover:translate-x-1 duration-200">Address</span>
              </Link>
              <Link href="/profile/notification" className={` ${ pathname === "/profile/notification" ? "tertiary-bg primary-color" : " "} flex group items-center gap-2  p-4 rounded-xl text-lg font-medium duration-200`}>
              <BsBell   className="text-xl" />
                <span className="group-hover:translate-x-1 duration-200">Notifications</span>
              </Link>
              <span className="mt-2 text-sm quaternary-color ">CUSTOMER SERVICE</span>
              <Link href="/profile/#" className={`flex group items-center gap-2  p-4 rounded-xl text-lg font-medium duration-200`}>
              <RxQuestionMarkCircled    className="text-xl" />
                <span className="group-hover:translate-x-1 duration-200">Help center</span>
              </Link>
              <Link href="/profile/#" className={`flex group items-center gap-2  p-4 rounded-xl text-lg font-medium duration-200`}>
              <BsFileMedical     className="text-xl" />
                <span className="group-hover:translate-x-1 duration-200">Terms and Conditions</span>
              </Link>
              <button onClick={() => (localStorage.removeItem('token'),window.location.href = '/Login')} className={`flex cursor-pointer group items-center gap-2 text-red-500  p-4 rounded-xl text-lg font-medium duration-200`}>
              <IoIosLogOut      className="text-xl" />
                <span className="group-hover:translate-x-1 duration-200">log out</span>
              </button>
        </nav>
      </aside>
      </div>
    <div className="flex w-[67rem] max-lg:w-[50rem] max-md:w-full">
      <aside className="w-64 max-lg:w-52 py-4 flex flex-col gap-4 max-md:hidden">
        <div className="flex gap-2 items-center">
          <div className="relative">
          <div className="w-16 h-16 rounded-full flex justify-center items-center quaternary-bg primary-color text-2xl font-semibold overflow-hidden ">
          {
            avatarUrl?(<Image src={`${avatarUrl}`} alt="Avatar" width={1000} height={1000} className="w-full"/>)
            :
            <div>
              {userName[0].toUpperCase()}
            </div>
          }
          </div>
           {
            avatarUrl?<button className="absolute -bottom-6 text-xs w-24 quaternary-bg primary-color font-medium p-[1px] cursor-pointer" onClick={deleteAvatar} >Remove Avatar</button>:null
          }
          </div>  
          <div className="flex flex-col">
            <div className="text-xl font-semibold quaternary-color">{userName}</div>
            <div className="flex items-center gap-1 text-sm"><CiGift className="quaternary-color text-base" /><span >100 bonus available</span></div>
          </div>
        </div>
        <nav className="flex flex-col tertiary-color py-4">
              <Link href="/profile/orders" className={` ${ pathname === "/profile/orders" ? "tertiary-bg primary-color" : " "} flex group items-center gap-2  p-4 rounded-xl text-lg font-medium duration-200`}>
              <BsBoxSeam />
                <span className="group-hover:translate-x-1 duration-200">Orders</span>
              </Link>
              <Link href="/profile/wishlist" className={` ${ pathname === "/profile/wishlist" ? "tertiary-bg primary-color" : " "} flex group items-center gap-1  p-4 rounded-xl text-lg font-medium duration-200`}>
              <CiHeart  className="text-2xl" />
                <span className="group-hover:translate-x-1 duration-200">Wishlist</span>
              </Link>
              <Link href="/profile/payment-methods" className={` ${ pathname === "/profile/payment-methods" ? "tertiary-bg primary-color" : " "} flex group items-center gap-2  p-4 rounded-xl text-lg font-medium duration-200`}>
              <PiCreditCardDuotone  className="text-xl"  />
                <span className="group-hover:translate-x-1 duration-200">Payment methods</span>
              </Link>
              <Link href="/profile/my-reviews" className={` ${ pathname === "/profile/my-reviews" ? "tertiary-bg primary-color" : " "} flex group items-center gap-1  p-4 rounded-xl text-lg font-medium duration-200`}>
              <CiStar   className="text-2xl"  />
                <span className="group-hover:translate-x-1 duration-200">My reviews</span>
              </Link>
              <Link href="/profile/personal-info" className={` ${ pathname === "/profile/personal-info" ? "tertiary-bg primary-color" : " "} flex group items-center gap-2  p-4 rounded-xl text-lg font-medium duration-200`}>
              <HiOutlineUserCircle  className="text-xl" />
                <span className="group-hover:translate-x-1 duration-200">Personal info</span>
              </Link>
              <Link href="/profile/address" className={` ${ pathname === "/profile/address" ? "tertiary-bg primary-color" : " "} flex group items-center gap-2  p-4 rounded-xl text-lg font-medium duration-200`}>
              <SlLocationPin   className="text-xl" />
                <span className="group-hover:translate-x-1 duration-200">Address</span>
              </Link>
              <Link href="/profile/notification" className={` ${ pathname === "/profile/notification" ? "tertiary-bg primary-color" : " "} flex group items-center gap-2  p-4 rounded-xl text-lg font-medium duration-200`}>
              <BsBell   className="text-xl" />
                <span className="group-hover:translate-x-1 duration-200">Notifications</span>
              </Link>
              <span className="mt-2 text-sm quaternary-color ">CUSTOMER SERVICE</span>
              <Link href="/profile/#" className={`flex group items-center gap-2  p-4 rounded-xl text-lg font-medium duration-200`}>
              <RxQuestionMarkCircled    className="text-xl" />
                <span className="group-hover:translate-x-1 duration-200">Help center</span>
              </Link>
              <Link href="/profile/#" className={`flex group items-center gap-2  p-4 rounded-xl text-lg font-medium duration-200`}>
              <BsFileMedical     className="text-xl" />
                <span className="group-hover:translate-x-1 duration-200">Terms and Conditions</span>
              </Link>
              <button onClick={() => (localStorage.removeItem('token'),window.location.href = '/Login')} className={`flex cursor-pointer group items-center gap-2 text-red-500  p-4 rounded-xl text-lg font-medium duration-200`}>
              <IoIosLogOut      className="text-xl" />
                <span className="group-hover:translate-x-1 duration-200">log out</span>
              </button>
        </nav>
      </aside>
      <main className="flex flex-1">
        <section className="flex-1 p-5">{children}</section>
      </main>

    </div>
    </div>
<Footer/>
    </>
  );
}

