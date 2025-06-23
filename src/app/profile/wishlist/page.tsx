"use client"
import React, { useMemo } from "react";
import { useWishlist } from "../../../context/WishlistContext";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { GoArrowSwitch } from "react-icons/go";
import StarRating from "../../Components/StarRating";
function Page() {
  const { wishlist, toggleWishlist } = useWishlist();
  return (
    <section className='w-full min-h-screen flex flex-col gap-4'>
        <h2 className="text-4xl font-semibold quaternary-color">
        Wishlist
      </h2>
      <div className='w-full flex flex-wrap justify-start items-center  '>
        {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty</p>
      ) : (
        <div className="w-full flex flex-wrap gap-8 justify-start items-start">
          {wishlist.map((contentItem) => (
            <div
              key={contentItem.itemNo}
              className="w-60 flex flex-col rounded-md shadow-md overflow-hidden relative group hover:-translate-y-1 duration-200"
            >
              {contentItem.new && (
                <span className="w-12 text-sm py-0.5 quaternary-bg primary-color rounded-full text-center content-center">
                  NEW
                </span>
              )}
              {contentItem.discount && (
                <span className="w-12 text-sm py-0.5 quaternary-bg primary-color rounded-full text-center content-center">
                  SALE
                </span>
              )}

              <div className="h-64 relative overflow-hidden">
                <span className="absolute group-hover:flex flex-col items-center gap-2 bottom-2 left-1/2 -translate-x-1/2 z-10 hidden pb-2">
                  <button className="w-36 py-2 quaternary-bg primary-color flex gap-2 items-center justify-center rounded-full hover:-translate-y-1 duration-200">
                    <MdAddShoppingCart className="text-lg translate-y-0.5" />
                    <span className="text-sm font-medium">Add to cart</span>
                  </button>

                  <span className="flex gap-1 items-center justify-center">
                    <FaHeart
                      onClick={() => toggleWishlist(contentItem)}
                      className="w-8 h-8 bg-white p-1 rounded-full text-[#EB5B00] hover:bg-[#EB5B00] hover:text-white duration-200 cursor-pointer hover:-translate-y-1"
                    />
                    <IoEyeOutline className="w-8 h-8 bg-white p-1 rounded-full text-[#143D60] hover:bg-[#EB5B00] hover:text-white duration-200 cursor-pointer hover:-translate-y-1" />
                    <GoArrowSwitch className="w-8 h-8 bg-white p-1 rounded-full text-[#143D60] hover:bg-[#EB5B00] hover:text-white duration-200 cursor-pointer hover:-translate-y-1" />
                  </span>
                </span>

                <Image
                  src={contentItem.imgSrc1}
                  alt={`${contentItem.description} image`}
                  width={10000}
                  height={10000}
                  className="absolute top-0 left-0 opacity-100 group-hover:opacity-0 duration-300 group-hover:duration-300 group-hover:scale-100 scale-95 h-full w-auto"
                />
                <Image
                  src={contentItem.imgSrc2}
                  alt={`${contentItem.description} image`}
                  width={10000}
                  height={10000}
                  className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-300 group-hover:duration-300 bg-gradient-to-b from-white via-white to-gray-600 h-full w-auto group-hover:scale-95 scale-100"
                />
              </div>

              <div className="flex flex-col h-32 gap-0.5 justify-between p-2">
                <p className="text-[#EB5B00] font-medium text-base">
                  {contentItem.description}
                </p>
                <span className="flex text-lg font-semibold quaternary-color items-center">
                  <span>${contentItem.price}</span>
                  {contentItem.discount?.oldPrice && (
                    <span className="text-gray-500 text-sm line-through ml-1">
                      {contentItem.discount.oldPrice}
                    </span>
                  )}
                </span>
                <span className="flex gap-1 items-center">
                  <StarRating rating={contentItem.rating} />
                  <span className="text-sm font-light text-gray-500">
                    ({contentItem.itemNo})
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
      </div>
      
    </section>
  )
}

export default Page
