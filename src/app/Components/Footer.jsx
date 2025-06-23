import React from "react";
import Link from "next/link";
import {
  RiFacebookCircleFill,
  RiTwitterXFill,
  RiPinterestFill,
} from "react-icons/ri";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { AiOutlineTikTok, AiFillYoutube } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { HiOutlineEnvelope } from "react-icons/hi2";
function Footer() {
  const shopContent = {
    title: "Shop",
    content: [
      "New Arrivals",
      "Bestseller",
      "Women's Cloathing",
      "Men's Cloathing",
      "Accessories",
      "Sale",
    ],
    href: ["/h", "/dsf", "/sdf", "/ghdf", "/", "/ds"],
  };
  const supportContent = {
    title: "Support",
    content: [
      "Help Center",
      "Order Status",
      "Shipping Info",
      "Returns & Exchange",
      "Size Guide",
      "Contact Us",
    ],
    href: ["/ ", "/", "/", "/", "/", "/"],
  };
  return (
    <footer>
      <div className=" w-screen border-b border-gray-500 flex justify-center items-center">
        <div className="w-[67rem] py-10 flex gap-8 justify-between items-start">
          <div className="flex flex-col gap-8">
            <h5 className="text-4xl font-semibold secondary-color heading-font">
              FashionStore
            </h5>
            <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
              Nullam in nibh vehicula, facilisis magna ut, consectetur <br />{" "}
              lorem. Proin eget tortor risus.
            </p>
            <div className="flex flex-col gap-2">
              <h6 className="text-lg text-gray-500">Contact With Us</h6>
              <div className="flex gap-2 items-center">
                <RiFacebookCircleFill className="w-10 h-10 p-2 bg-[#DDEB9D]/70 hover:bg-[#DDEB9D]  rounded-lg hover:text-[#143D60] duration-200 cursor-pointer" />
                <IoLogoInstagram className="w-10 h-10 p-2 bg-[#DDEB9D]/70 hover:bg-[#DDEB9D] rounded-lg hover:text-[#143D60] duration-200 cursor-pointer" />
                <RiTwitterXFill className="w-10 h-10 p-2 bg-[#DDEB9D]/70 hover:bg-[#DDEB9D] rounded-lg hover:text-[#143D60] duration-200 cursor-pointer" />
                <AiOutlineTikTok className="w-10 h-10 p-2 bg-[#DDEB9D]/70 hover:bg-[#DDEB9D] rounded-lg hover:text-[#143D60] duration-200 cursor-pointer" />
                <RiPinterestFill className="w-10 h-10 p-2 bg-[#DDEB9D]/70 hover:bg-[#DDEB9D] rounded-lg hover:text-[#143D60] duration-200 cursor-pointer" />
                <AiFillYoutube className="w-10 h-10 p-2 bg-[#DDEB9D]/70 hover:bg-[#DDEB9D] rounded-lg hover:text-[#143D60] duration-200 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="mb-4 text-xl font-medium relative before:absolute left-0 before:-bottom-2 before:w-10 before:h-1 text-[#EB5B00] before:bg-[#EB5B00]">
              {shopContent.title}
            </h6>
            {shopContent.content.map((item,index) => (
              <Link
              key={index}
                href="/"
                className="flex items-center gap-1 text-sm text-gray-500 hover:text-[#EB5B00] duration-200"
              >
                {" "}
                <FaArrowRightLong className="text-xs text-[#EB5B00]" />
                <span>{item}</span>
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="mb-4 text-xl font-medium relative before:absolute left-0 before:-bottom-2 before:w-10 before:h-1 text-[#EB5B00] before:bg-[#EB5B00]">
              {supportContent.title}
            </h6>
            {supportContent.content.map((item,index) => (
              <Link
              key={index}
                href="/"
                className="flex items-center gap-1 text-sm text-gray-500 hover:text-[#EB5B00] duration-200"
              >
                {" "}
                <FaArrowRightLong className="text-xs text-[#EB5B00]" />
                <span>{item}</span>
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4 ">
            <h6 className="mb-4 text-xl font-medium relative before:absolute left-0 before:-bottom-2 before:w-10 before:h-1 text-[#EB5B00] before:bg-[#EB5B00]">
              Contact Information
            </h6>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <CiLocationOn className="text-[#EB5B00]" />
              <span>123 abc street, City, country</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <FiPhone className="text-[#EB5B00]" />
              <span>+12 345 67890</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <HiOutlineEnvelope className="text-[#EB5B00]" />
              <span>xyz@example.com</span>
            </div>
            <div className="flex gap-2 items-center">
              <button className="flex gap-2 items-center p-2 bg-[#DDEB9D]/70 hover:bg-[#DDEB9D] rounded-lg hover:text-[#143D60] duration-200 cursor-pointer">
                <FaApple />
                <p>App Store</p>
              </button>
              <button className="flex gap-2 items-center p-2 bg-[#DDEB9D]/70 hover:bg-[#DDEB9D] rounded-lg hover:text-[#143D60] duration-200 cursor-pointer">
                <FaGooglePlay />
                <p>Google Play</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen justify-center items-center flex">
        <div className="w-[67rem] py-4 flex  items-center justify-center text-center text-sm">
          <div className="flex flex-col gap-2 text-sm font-light text-[#143D60]">
            <p>
              &copy; Copyright <b className="text-[#EB5B00]">MyWebsite.</b> All Right Reserved
            </p>
            <div className="text-[#143D60]">
              Developed by <b className="text-[#EB5B00]">DesignSpectrum</b>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
