"use client";
import React, { useState,useEffect } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { LiaLanguageSolid } from "react-icons/lia";
import { BsCurrencyDollar, BsTruck } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { IoIosReturnLeft, IoMdHeartEmpty } from "react-icons/io";
import { IoBagCheckOutline, IoCartOutline } from "react-icons/io5";
import { PiGearDuotone } from "react-icons/pi";
import { FaCaretDown } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Button } from "../../components/ui/button"
import { FaRegUserCircle } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { signOut } from 'next-auth/react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
function Header() {
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  const pathname = usePathname();
  const [megamenu1, setMeagamenu1] = useState([
    {
      id: "mm1-0",
      title: "Feature",
      isactive: true,
      content: [
        {
          name: "Premium Headphone",
          price: "$ 59",
          image:
            "https://img.freepik.com/free-photo/black-wireless-headphones-black-surface_417767-115.jpg?uid=R184680543&ga=GA1.1.56082603.1736629362&semt=ais_hybrid&w=740",
        },
        {
          name: "Smart Watch",
          price: "$ 100",
          image:
            "https://img.freepik.com/free-photo/rendering-smart-home-device_23-2151039302.jpg?uid=R184680543&ga=GA1.1.56082603.1736629362&semt=ais_hybrid&w=740",
        },
        {
          name: "Wireless Earbuds",
          price: "$ 150",
          image:
            "https://img.freepik.com/free-photo/wireless-earbuds-with-neon-cyberpunk-style-lighting_23-2151074308.jpg?uid=R184680543&ga=GA1.1.56082603.1736629362&semt=ais_hybrid&w=740",
        },
        {
          name: "Blue tooth speaker",
          price: "$ 220",
          image:
            "https://img.freepik.com/free-photo/rendering-smart-home-device_23-2151039370.jpg?uid=R184680543&ga=GA1.1.56082603.1736629362&semt=ais_hybrid&w=740",
        },
      ],
    },
    {
      id: "mm1-1",
      title: "New Arrivals",
      isactive: false,
      content: [
        {
          name: "Fitness Teracker",
          price: "$ 600",
          new: true,
          image:
            "https://img.freepik.com/free-photo/smartwatch-with-digital-assistant-arrangement_23-2149108009.jpg?uid=R184680543&ga=GA1.1.56082603.1736629362&semt=ais_hybrid&w=740",
        },
        {
          name: "Wireless Charger",
          price: "$ 130",
          new: true,
          image:
            "https://img.freepik.com/free-vector/powerbank-battery-charger-realistic-icons-set-with-black-silver-devices-isolated-vector-illustration_1284-81780.jpg?uid=R184680543&ga=GA1.1.56082603.1736629362&semt=ais_hybrid&w=740",
        },
        {
          name: "Smart Blub Set",
          price: "$ 20",
          new: true,
          image:
            "https://img.freepik.com/free-photo/idea-concept-with-light-bulb_23-2149105863.jpg?uid=R184680543&ga=GA1.1.56082603.1736629362&semt=ais_hybrid&w=740",
        },
        {
          name: "Portable power bank",
          price: "$ 109",
          new: true,
          image:
            "https://img.freepik.com/free-photo/phone-mobile-connect-battery-power-bank_93675-128466.jpg?t=st=1746448516~exp=1746452116~hmac=328bb8b33ecdb2952c53ccc5ac47d92e752b37d7b6881dc49011c011ec89b4e0&w=996",
        },
      ],
    },
    {
      id: "mm1-2",
      title: "Sales",
      isactive: false,
      content: [
        {
          name: "Wireless Keyboard",
          price: "$ 300",
          discount: "40%",
          image:
            "https://img.freepik.com/free-photo/keyboard-button_1203-9150.jpg?uid=R184680543&ga=GA1.1.56082603.1736629362&semt=ais_hybrid&w=740",
        },
        {
          name: "Gamming mouse",
          price: "$ 122",
          discount: "10%",
          image:
            "https://img.freepik.com/free-photo/view-neon-illuminated-gaming-desk-setup-with-keyboard_23-2149529362.jpg?uid=R184680543&ga=GA1.1.56082603.1736629362&semt=ais_hybrid&w=740",
        },
        {
          name: "Dark Lamp",
          price: "$ 49",
          discount: "12%",
          image:
            "https://img.freepik.com/free-photo/view-light-lamp-with-futuristic-design_23-2151037672.jpg?uid=R184680543&ga=GA1.1.56082603.1736629362&semt=ais_hybrid&w=740",
        },
        {
          name: "USB-C Hub",
          price: "$ 21",
          discount: "5%",
          image:
            "https://img.freepik.com/free-photo/usb-charging-gadgets-blurred-background-room-close-up-concept-technology-everyday-life_169016-15480.jpg?uid=R184680543&ga=GA1.1.56082603.1736629362&semt=ais_hybrid&w=740",
        },
      ],
    },
    {
      id: "mm1-3",
      title: "Catagories",
      isactive: false,
      content: [
        {
          title: "Cloathing",
          name: [
            "Men's Wear",
            "Women's Wear",
            "Kids Collection",
            "Sportswear",
            "Accessories",
          ],
          href: ["/", "/", "/", "/", "/"],
        },
        {
          title: "Electronics",
          name: [
            "Smartphones",
            "Laptops",
            "Audio Devices",
            "Smart Homes",
            "Accessories",
          ],
          href: ["/", "/", "/", "/", "/"],
        },
        {
          title: "Home & Living",
          name: ["Furniture", "Decor", "Kitchen", "Bedding", "Lightining"],
          href: ["/", "/", "/", "/", "/"],
        },
        {
          title: "Beauty",
          name: [
            "Skincare",
            "Makeup",
            "Haircare",
            "Fragnances",
            "Personal Care",
          ],
          href: ["/", "/", "/", "/", "/"],
        },
      ],
    },
  ]);
  const [megamenu2, setMeagamenu2] = useState([
    {
      id: "mm2-1",
      title: "Women",
      isactive: true,
      content: [
        {
          title: "Cloathing",
          name: [
            "Shirts & Tops",
            "Coats & Outwear",
            "Underwear",
            "Sweatshirts",
            "Dresses",
            "SwimWear",
            "view all",
          ],
          href: ["/", "/", "/", "/", "/", "/", "/"],
        },
        {
          title: "Shoes",
          name: [
            "Boots",
            "Sandles",
            "Heels",
            "Lofers",
            "Slippers",
            "Oxfords",
            "View all",
          ],
          href: ["/", "/", "/", "/", "/", "/", "/"],
        },
        {
          title: "Accessories",
          name: [
            "Handbags",
            "Eyewear",
            "Hats",
            "Watches",
            "Jewelry",
            "Belts",
            "View all",
          ],
          href: ["/", "/", "/", "/", "/", "/", "/"],
        },
        {
          title: "Speciality",
          name: ["Plus Size", "Petite", "Wide Shoes", "Narrow Shoes"],
          href: ["/", "/", "/", "/"],
        },
      ],
      ad: {
        src: "https://img.freepik.com/free-photo/outdoor-fashion-portrait-glamour-sensual-young-stylish-woman-wearing-trendy-fall-outfit-black-hat-grey-sweater-leather-bag-bright-red-lips-old-city-background_273443-690.jpg?uid=R184680543&ga=GA1.1.56082603.1736629362&semt=ais_hybrid",
        title: "Women's  Bag's Collection",
      },
    },
    {
      id: "mm2-2",
      title: "Men",
      isactive: false,
      content: [
        {
          title: "Cloathing",
          name: [
            "Shirts & Polos",
            "Coats & Jackets",
            "Underwear",
            "Hoodies",
            "Suits",
            "Activewear",
            "view all",
          ],
          href: ["/", "/", "/", "/", "/", "/", "/"],
        },
        {
          title: "Shoes",
          name: [
            "Boots",
            "Sandles",
            "Sneakers",
            "Lofers",
            "Slippers",
            "Dress Shoes",
            "View all",
          ],
          href: ["/", "/", "/", "/", "/", "/", "/"],
        },
        {
          title: "Accessories",
          name: [
            "Hats",
            "Sunglasses",
            "Wallets",
            "Watches",
            "Jewelry",
            "Ties",
            "View all",
          ],
          href: ["/", "/", "/", "/", "/", "/", "/"],
        },
        {
          title: "Speciality Sizes",
          name: ["Big & Tall", "Slim Fit", "Wide Shoes", "Extended Sizes"],
          href: ["/", "/", "/", "/"],
        },
      ],
      ad: {
        src: "https://img.freepik.com/free-photo/man-suit_1321-1159.jpg?uid=R184680543&ga=GA1.1.56082603.1736629362&semt=ais_hybrid",
        title: "Men's Footware Collection",
      },
    },
    {
      id: "mm2-3",
      title: "Kids",
      isactive: false,
      content: [
        {
          title: "Cloathing",
          name: [
            "T-shirts & Tops",
            " Outrwear",
            "Pagamas",
            "Sweatshirts",
            "Dresses",
            "SwimWear",
            "view all",
          ],
          href: ["/", "/", "/", "/", "/", "/", "/"],
        },
        {
          title: "Shoes",
          name: [
            "Sneakers",
            "Sandles",
            "Sports Shoes",
            "Boots",
            "Slippers",
            "School Shoes",
            "View all",
          ],
          href: ["/", "/", "/", "/", "/", "/", "/"],
        },
        {
          title: "Accessories",
          name: [
            "Backpacks",
            "Socks",
            "Hats & Caps",
            "Gloves",
            "Scarves",
            "Hair Accessories",
            "View all",
          ],
          href: ["/", "/", "/", "/", "/", "/", "/"],
        },
        {
          title: "By Age",
          name: [
            "Babies (0-24 months)",
            "Toddlers (2-4 years)",
            "Kids (4-7 years)",
            "Older Kids (8-14 years)",
          ],
          href: ["/", "/", "/", "/"],
        },
      ],
      ad: {
        src: "https://img.freepik.com/free-photo/stylish-girl-sitting-skateboard_23-2148442624.jpg?uid=R184680543&ga=GA1.1.56082603.1736629362&semt=ais_hybrid",
        title: "Kid's New Arrival",
      },
    },
  ]);
  const handleClick = (e) => {
    setMeagamenu1((prevState) =>
      prevState.map((item) =>
        item.id === e.target.id
          ? { ...item, isactive: true }
          : { ...item, isactive: false }
      )
    );
  };
  const handleClick2 = (e) => {
    setMeagamenu2((prevState) =>
      prevState.map((item) =>
        item.id === e.target.id
          ? { ...item, isactive: true }
          : { ...item, isactive: false }
      )
    );
  };
  useEffect(()=>{
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  },[])
  return (
    <nav className="flex items-center flex-col primary-color bg-white">
      <div className="w-full items-center flex px-20 py-2 justify-between gap-1 text-xs tertiary-bg">
        <div className="flex gap-4 items-center w-full">
          <div className="flex gap-2 items-center">
            <FaPhoneAlt />
            <p>
              Customer Support:{" "}
              <span className="Quaternary-color">+ 0 (234) 567-890</span>
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <FaEnvelope />
            <p className="Quaternary-color">support@example.com</p>
          </div>
        </div>
        <div className="w-68 text-center">
          &lt;&nbsp;&nbsp;&nbsp; FashionStore &nbsp;&nbsp;&nbsp; &gt;{" "}
        </div>
        <div className="flex items-center gap-4 Quaternary-color text-base w-full justify-end">
          <div className="flex items-center gap-1">
            <BsTruck />
            <p className="text-xs">Track Order </p>
          </div>
          <div className="flex items-center gap-1">
            <LiaLanguageSolid />
            <p className="text-xs">English</p>
            <FaCaretDown className="translate-y-0.5 text-sm" />
          </div>
          <div className="flex items-center gap-1">
            <BsCurrencyDollar />
            <p className="text-xs">USD</p>
            <FaCaretDown className="translate-y-0.5 text-sm" />
          </div>
        </div>
      </div>
      <div className="flex items-center w-full justify-between py-4 px-20 gap-8  border-b tertiary-border">
        <h1 className="primary-color text-3xl font-semibold heading-font w-full">
          Fashion<span className="secondary-color">Store</span>
        </h1>
        <div className="w-full">
          <form className="w-full">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 secondary-color "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-12 text-sm  border tertiary-color secondary-border rounded-lg primary-bg focus:border-[#EB5B00] focus:ring-[#EB5B00] focus:outline-[#EB5B00]"
                placeholder="Search for producs..."
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 secondary-bg focus:ring-4 focus:outline-none focus:ring-[#EB5B00] font-medium rounded-lg text-sm px-4 py-2 cursor-pointer hover:opacity-80 opacity-100 duration-100"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="flex gap-4 items-center w-full justify-end ">
          {isLoggedIn?
<DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="flex gap-1 items-center secondary-color cursor-pointer">
          <FaRegUser />
            <p>Account</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 primary-bg border-2 secondary-border tertiary-color">
        <DropdownMenuLabel>
          <div className="flex flex-col items-center gap-1 text-center w-full">
            <div className="quaternary-color text-lg font-medium leading-snug">Welcome to FashionStore</div>
            <div className="text-xs">Access account & manage order</div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className='tertiary-bg opacity-50' />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href='/profile'  className='flex items-center gap-1 cursor-pointer group'>
            <FaRegUserCircle />
            <span className="group-hover:translate-x-1 duration-200">Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className='flex items-center gap-1 cursor-pointer'>
            <Link href='/profile/'  className='flex items-center gap-1 cursor-pointer group'>
            <IoBagCheckOutline  />
            <span className="hover:translate-x-1 duration-200">My Orders</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className='flex items-center gap-1 cursor-pointer'>
            <Link href='/profile/wishlist'  className='flex items-center gap-1 cursor-pointer group'>
            <CiHeart  />
            <span className="hover:translate-x-1 duration-200">My Wishlist</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className='flex items-center gap-1 cursor-pointer'>
            <IoIosReturnLeft  />
            <span className="hover:translate-x-1 duration-200">Return & refund</span>
          </DropdownMenuItem>
          <DropdownMenuItem className='flex items-center gap-1 cursor-pointer'>
            <PiGearDuotone  />
            <span className="hover:translate-x-1 duration-200">Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
                <DropdownMenuSeparator className='tertiary-bg opacity-50' />
        <DropdownMenuItem className='flex items-center gap-1 cursor-pointer'>
            <BiLogOut  />
            <span className="hover:translate-x-1 duration-200" onClick={() => (localStorage.removeItem('token'),window.location.href = '/Login')} >Logout</span>
          </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>:
          <Link href='/Login' className="bg-[#DDEB9D] border border-[#A0C878] rounded-md text-[#143D60] text-center duration-200 hover:scale-105 hover:-translate-y-0.5 py-1.5 w-36 text-sm cursor-pointer">Login/Register</Link>
          }
          <Link href='/admin/wishlist' className="flex gap-1 items-center secondary-color cursor-pointer">
            <IoMdHeartEmpty />
            <p>Wishes</p>
          </Link>
          <Link href='/' className="flex gap-1 items-center secondary-color cursor-pointer">
            <IoCartOutline />
            <p>Cart</p>
          </Link>
        </div>
      </div>
      <div className="flex w-full px-20 py-2 gap-8 tertiary-color ">
        
        <Link
        
          href="/"
          className={`${pathname==="/"?"before:w-full text-[#EB5B00]":"before:w-0"} relative hover:before:w-full before:absolute before:duration-200 before:h-0.5 before:rounded-xl before:bg-[#EB5B00] before:-bottom-0.5 hover:text-[#EB5B00] duration-200`}
        >
          Home
        </Link>
        <Link
          href="/About-us"
          className={`${pathname==="/About-us"?"before:w-full text-[#EB5B00]":"before:w-0"} relative hover:before:w-full before:absolute before:duration-200 before:h-0.5 before:rounded-xl before:bg-[#EB5B00] before:-bottom-0.5 hover:text-[#EB5B00] duration-200`}
        >
          About
        </Link>
        <Link
          href="/"
          className=" relative before:absolute before:w-0 hover:before:w-full before:duration-200 before:h-0.5 before:rounded-xl before:bg-[#EB5B00] before:-bottom-0.5 hover:text-[#EB5B00] duration-200"
        >
          Catagory
        </Link>
        <Link
          href="/"
          className=" relative before:absolute before:w-0 hover:before:w-full before:duration-200 before:h-0.5 before:rounded-xl before:bg-[#EB5B00] before:-bottom-0.5 hover:text-[#EB5B00] duration-200"
        >
          Product Details
        </Link>
        <Link
          href="/"
          className=" relative before:absolute before:w-0 hover:before:w-full before:duration-200 before:h-0.5 before:rounded-xl before:bg-[#EB5B00] before:-bottom-0.5 hover:text-[#EB5B00] duration-200"
        >
          Cart
        </Link>
        {/* this is my mega menu 1 */}
        <DropdownMenu className="tertiary-color">
          <DropdownMenuTrigger className="cursor-pointer flex items-center gap-1 relative before:absolute before:w-0 hover:before:w-full before:duration-200 before:h-0.5 before:rounded-xl before:bg-[#EB5B00] before:-bottom-0.5 hover:text-[#EB5B00] duration-200 outline-none focus:outline-none">
            Megamenu 1 <FaCaretDown className="translate-y-0.5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="tertiary-color secondary-border w-[90vw] mx-auto translate-x-[3.5vw] primary-bg">
            <div className="flex w-full gap-8 items-center">
              {megamenu1.map((item, index) => (
                <DropdownMenuLabel
                  key={index}
                  id={item.id}
                  className={`${
                    item.isactive
                      ? "before:w-full Quaternary-color"
                      : "before:w-0 hover:before:w-full"
                  } cursor-pointer relative before:absolute   before:duration-200 before:h-0.5 before:rounded-xl before:bg-[#EB5B00] before:-bottom-0.5 hover:text-[#EB5B00] duration-200`}
                  onClick={handleClick}
                >
                  {item.title}
                </DropdownMenuLabel>
              ))}
            </div>
            <DropdownMenuSeparator />
            <hr className="secondary-color" />
            <div className="flex gap-4 items-center justify-between w-full">
              {megamenu1.map(
                (item) =>
                  item.isactive &&
                  item.content &&
                  item.content.length > 0 &&
                  item.content.map((content, index) =>
                    item.id === "mm1-3" ? (
                      <div key={index} className="flex flex-col">
                        <DropdownMenuLabel className="text-lg font-medium">
                          {content.title}
                        </DropdownMenuLabel>
                        <DropdownMenuItem className="flex flex-col gap-1 items-start">
                          {content.name.map((name, index) => (
                            <Link
                              key={index}
                              href={content.href[index]}
                              className="text-sm hover:scale-105 duration-150 hover:translate-x-0.5"
                            >
                              &gt; {name}
                            </Link>
                          ))}
                        </DropdownMenuItem>
                      </div>
                    ) : (
                      <div
                        key={index}
                        className="w-full bg-white border border-gray-200 rounded-lg shadow-sm relative"
                      >
                        <span className="text-sm absolute top-2 font-light px-2 right-2 bg-red-500 rounded-lg z-30 text-white">
                          {content.discount}
                        </span>
                        <span className="text-sm absolute top-2 font-light px-2 right-2 bg-green-500 rounded-lg z-30 text-white">
                          {content.new && "new"}
                        </span>
                        <Link href="/" className="w-full h-20 overflow-hidden">
                          <Image
                            src={content.image}
                            alt={`product image`}
                            width={1000}
                            height={1000}
                            className="rounded-t-lg w-full "
                          />
                        </Link>
                        <div className="px-5 pb-5">
                          <Link href="/">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                              {content.name}
                            </h5>
                          </Link>
                          <div className="flex items-center mt-2.5 mb-5">
                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                              <svg
                                className="w-4 h-4 text-yellow-300"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                              >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                              </svg>
                              <svg
                                className="w-4 h-4 text-yellow-300"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                              >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                              </svg>
                              <svg
                                className="w-4 h-4 text-yellow-300"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                              >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                              </svg>
                              <svg
                                className="w-4 h-4 text-yellow-300"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                              >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                              </svg>
                              <svg
                                className="w-4 h-4 text-gray-200 dark:text-gray-600"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                              >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                              </svg>
                            </div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">
                              5.0
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-gray-900 ">
                              {content.price}
                            </span>
                            <Link
                              href="/"
                              className="text-white tertiary-bg focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                              Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    )
                  )
              )}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* MegaMenu2 */}
        <DropdownMenu className="tertiary-color">
          <DropdownMenuTrigger className="cursor-pointer flex items-center gap-1 relative before:absolute before:w-0 hover:before:w-full before:duration-200 before:h-0.5 before:rounded-xl before:bg-[#EB5B00] before:-bottom-0.5 hover:text-[#EB5B00] duration-200 outline-none focus:outline-none">
            Megamenu 2 <FaCaretDown className="translate-y-0.5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="tertiary-color secondary-border w-[90vw] mx-auto primary-bg">
            <div className="flex w-full gap-8 items-center">
              {megamenu2.map((item, index) => (
                <DropdownMenuLabel
                  key={index}
                  id={item.id}
                  className={`${
                    item.isactive
                      ? "before:w-full Quaternary-color"
                      : "before:w-0 hover:before:w-full"
                  } cursor-pointer relative before:absolute   before:duration-200 before:h-0.5 before:rounded-xl before:bg-[#EB5B00] before:-bottom-0.5 hover:text-[#EB5B00] duration-200`}
                  onClick={handleClick2}
                >
                  {item.title}
                </DropdownMenuLabel>
              ))}
            </div>
            <DropdownMenuSeparator />
            <hr className="secondary-color" />
            <div className="flex gap-4 justify-between">
              {megamenu2.map(
                (item) =>
                  item.isactive &&
                  item.content &&
                  item.content.length > 0 &&
                  item.content.map(
                    (content, index) =>
                      item.id && (
                        <div className="flex flex-col w-full">
                          <DropdownMenuLabel className="text-lg font-medium">
                            {content.title}
                          </DropdownMenuLabel>
                          <DropdownMenuItem className="flex flex-col gap-2 items-start">
                            {content.name.map((name, index) => (
                              <Link
                                key={index}
                                href={content.href[index]}
                                className="text-sm hover:scale-105 duration-150 hover:translate-x-0.5 "
                              >
                                &gt; {name}
                              </Link>
                            ))}
                          </DropdownMenuItem>
                        </div>
                      )
                  )
              )}
              <div className="w-2/5 h-full">
                {megamenu2.map(
                  (item) =>
                    item.isactive && (
                      <div className="w-80 h-full relative">
                        <Image
                          src={item.ad.src}
                          alt={item.ad.title}
                          width={10000}
                          height={10000}
                          className="w-full opacity-100"
                        />
                        <div className="absolute h-full top-0 left-0 content-center  bg-[#eb5a004e] flex flex-col justify-center gap-4 tertiary-color p-4 ">
                          <span className="text-5xl font-bold leading-16">
                            {item.ad.title}
                          </span>
                          <Link href="/">
                            <button className="cursor-pointer bg-[#143c60] primary-color text-center content-center w-28 py-2 rounded-lg text-base font-normal">
                              Shop
                            </button>
                          </Link>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <Link
          href="/Contact-us"
          className={`${pathname==="/Contact-us"?"before:w-full text-[#EB5B00]":"before:w-0"} relative hover:before:w-full before:absolute before:duration-200 before:h-0.5 before:rounded-xl before:bg-[#EB5B00] before:-bottom-0.5 hover:text-[#EB5B00] duration-200`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Header;
